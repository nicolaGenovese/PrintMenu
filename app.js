(function () {
  // Bootstraps the page from the external menu data object and wires up
  // the editor controls after the DOM structure has been rendered.
  const data = window.CLAPHAM_NORTH_MENU_DATA;
  if (!data) return;

  const editorHint = document.querySelector(".editor-hint");
  const printButton = document.querySelector(".print-button");
  const logoContainer = document.getElementById("menu-logo");
  const grid = document.getElementById("menu-grid");
  const footer = document.getElementById("menu-footer");

  if (!grid || !footer || !logoContainer) return;

  if (editorHint) editorHint.textContent = data.editorHint;
  if (printButton) printButton.textContent = data.printButton;

  renderLogo();
  renderColumns();
  renderFooter();
  initializeEditing();

  function renderLogo() {
    const img = document.createElement("img");
    img.src = data.logo.src;
    img.alt = data.logo.alt;
    logoContainer.replaceChildren(img);
  }

  function renderColumns() {
    // The data file is organized as two arrays, one per menu column.
    data.columns.forEach((columnBlocks) => {
      const column = document.createElement("div");
      column.className = "col";

      columnBlocks.forEach((blockData) => {
        column.appendChild(renderBlock(blockData));
      });

      grid.appendChild(column);
    });
  }

  function renderBlock(blockData) {
    // Sections render dish lists, boxes render special blocks like pizza/wings.
    if (blockData.type === "section" || blockData.type === "editableSection") {
      return renderSectionBlock(blockData);
    }

    if (blockData.type === "box") {
      return renderBoxBlock(blockData);
    }

    const fallback = document.createElement("div");
    return fallback;
  }

  function renderSectionBlock(blockData) {
    const block = document.createElement("div");
    block.className = blockData.type === "editableSection" ? "editable-section block-root" : "menu-section block-root";

    if (blockData.marginTopMm) {
      block.style.marginTop = blockData.marginTopMm + "mm";
    }

    if (blockData.removable) {
      block.appendChild(createBlockDeleteControl());
    }

    const title = document.createElement("div");
    title.className = "section-title";
    title.textContent = blockData.title;
    title.contentEditable = "true";
    title.spellcheck = false;
    title.classList.add("editable-field");
    block.appendChild(title);

    if (blockData.note) {
      const note = document.createElement("div");
      note.className = "section-note editable-field";
      note.contentEditable = "true";
      note.spellcheck = false;
      note.textContent = blockData.note;
      block.appendChild(note);
    }

    blockData.items.forEach((itemData) => {
      block.appendChild(createItem(itemData));
    });

    if (blockData.addOn) {
      const addOn = document.createElement("div");
      addOn.className = "add-on editable-field";
      addOn.contentEditable = "true";
      addOn.spellcheck = false;
      addOn.textContent = blockData.addOn;
      block.appendChild(addOn);
    }

    block.appendChild(createSectionAddButton());
    return block;
  }

  function renderBoxBlock(blockData) {
    const block = document.createElement("div");
    block.className = "box block-root";
    if (blockData.className) {
      block.classList.add(...blockData.className.split(" ").filter(Boolean));
    }
    if (blockData.marginTopMm) {
      block.style.marginTop = blockData.marginTopMm + "mm";
    }
    if (blockData.kind) {
      block.dataset.boxKind = blockData.kind;
    }

    if (blockData.removable) {
      // Pizza needs a custom delete handler because removing it changes the
      // spacing logic for the wings block below.
      block.appendChild(createBlockDeleteControl(blockData.kind === "pizza" ? removePizzaBlock : removeGenericBlock));
    }

    const title = document.createElement("div");
    title.className = "box-title editable-field";
    title.contentEditable = "true";
    title.spellcheck = false;
    if (blockData.titleHtml) {
      title.innerHTML = blockData.titleHtml;
    } else {
      title.textContent = blockData.title || "";
    }
    block.appendChild(title);

    const list = document.createElement("div");
    list.className = blockData.kind + "-list";
    list.style.marginTop = "4px";

    blockData.lines.forEach((lineData) => {
      list.appendChild(createBoxEntry(blockData.kind, lineData));
    });

    block.appendChild(list);

    const addButton = document.createElement("button");
    addButton.type = "button";
    addButton.className = "box-add-button";
    addButton.textContent = blockData.addButtonLabel;
    block.appendChild(addButton);

    if (blockData.pricesHtml) {
      const prices = document.createElement("div");
      prices.className = "wings-prices editable-field";
      prices.contentEditable = "true";
      prices.spellcheck = false;
      prices.innerHTML = blockData.pricesHtml;
      block.appendChild(prices);
    }

    return block;
  }

  function createItem(itemData) {
    const item = document.createElement("div");
    item.className = "item";

    const name = document.createElement("div");
    name.className = "item-name";
    name.textContent = itemData.name || "New dish";
    item.appendChild(name);

    if (itemData.desc) {
      const desc = document.createElement("div");
      desc.className = "item-desc";
      desc.textContent = itemData.desc;
      item.appendChild(desc);
    }

    if (itemData.price) {
      const price = document.createElement("div");
      price.className = "item-price";
      price.textContent = itemData.price;
      item.appendChild(price);
    }

    return item;
  }

  function createBoxEntry(kind, lineData) {
    const entry = document.createElement("div");
    entry.className = kind + "-entry";

    const field = document.createElement("div");
    field.className = lineData.className;
    if (lineData.html) {
      field.innerHTML = lineData.html;
    } else {
      field.textContent = lineData.text || "";
    }

    entry.appendChild(field);
    return entry;
  }

  function createBlockDeleteControl(onDelete) {
    const controls = document.createElement("div");
    controls.className = "item-controls";

    const button = document.createElement("button");
    button.type = "button";
    button.className = "item-delete";
    button.textContent = "×";
    button.title = "Delete block";
    button.addEventListener("click", () => {
      const block = button.closest(".block-root");
      if (!block) return;
      (onDelete || removeGenericBlock)(block);
    });

    controls.appendChild(button);
    return controls;
  }

  function createSectionAddButton() {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "section-add-button";
    button.textContent = "+ Add plate";
    return button;
  }

  function renderFooter() {
    footer.innerHTML = data.footerLines.join("<br>");
  }

  function removeGenericBlock(block) {
    block.remove();
  }

  function removePizzaBlock(block) {
    block.remove();
    syncRightColumnSpacing();
  }

  function initializeEditing() {
    // Rendering is data-driven, but editing is attached to the generated DOM.
    grid.querySelectorAll(".item").forEach(makeEditableItem);
    grid.querySelectorAll(".pizza-entry").forEach(makePizzaEditable);
    grid.querySelectorAll(".wings-entry").forEach(makeWingsEditable);
    grid.querySelectorAll(".section-add-button").forEach(attachSectionAddButton);
    grid.querySelectorAll(".box").forEach(attachBoxAddButton);
    grid.querySelectorAll(".col > .block-root").forEach(attachSpacingControls);
    styleCalories();
    styleInlinePrices();
    syncRightColumnSpacing();
  }

  function makeEditableItem(item) {
    [".item-name", ".item-desc", ".item-price"].forEach((selector) => {
      const field = item.querySelector(selector);
      if (!field) return;
      makeTextEditable(field);
    });

    if (item.querySelector(".item-controls")) return;

    const controls = document.createElement("div");
    controls.className = "item-controls";

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "item-delete";
    deleteButton.textContent = "×";
    deleteButton.title = "Delete item";
    deleteButton.addEventListener("click", () => item.remove());

    controls.appendChild(deleteButton);
    item.appendChild(controls);
  }

  function makePizzaEditable(entry) {
    makeEditableLine(entry, ".pizza-item, .pizza-sub");
  }

  function makeWingsEditable(entry) {
    makeEditableLine(entry, ".box-sub, .wings-line");
  }

  function makeEditableLine(entry, selector) {
    const field = entry.querySelector(selector);
    if (!field) return;
    makeTextEditable(field);

    if (entry.querySelector(".item-controls")) return;

    const controls = document.createElement("div");
    controls.className = "item-controls";

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "item-delete";
    deleteButton.textContent = "×";
    deleteButton.title = "Delete line";
    deleteButton.addEventListener("click", () => entry.remove());

    controls.appendChild(deleteButton);
    entry.appendChild(controls);
  }

  function attachSectionAddButton(button) {
    button.addEventListener("click", () => {
      const block = button.closest(".block-root");
      if (!block) return;

      // New dishes follow the same three-field structure used by the standard sections.
      const item = createItem({ name: "New dish", desc: "Description", price: "£0" });
      makeEditableItem(item);
      const addOn = block.querySelector(".add-on");
      if (addOn) {
        addOn.insertAdjacentElement("beforebegin", item);
      } else {
        button.insertAdjacentElement("beforebegin", item);
      }
    });
  }

  function attachBoxAddButton(box) {
    const button = box.querySelector(".box-add-button");
    if (!button) return;

    button.addEventListener("click", () => {
      const kind = box.dataset.boxKind;
      if (!kind) return;

      const list = box.querySelector("." + kind + "-list");
      if (!list) return;

      const entry = createBoxEntry(kind, {
        className: kind === "pizza" ? "pizza-item" : "wings-line",
        text: kind === "pizza" ? "New pizza line" : "New wings line"
      });

      list.appendChild(entry);

      if (kind === "pizza") {
        makePizzaEditable(entry);
      } else {
        makeWingsEditable(entry);
      }
    });
  }

  function makeTextEditable(field) {
    field.contentEditable = "true";
    field.spellcheck = false;
    field.classList.add("editable-field");
  }

  function styleCalories() {
    // Calorie text is embedded in multiple menu fields, including lines that
    // are otherwise bold. Split it into its own span so it can stay regular.
    grid.querySelectorAll(".item-name, .item-desc, .pizza-item, .pizza-sub, .wings-line").forEach((field) => {
      if (field.querySelector(".item-calories")) return;

      const text = field.textContent || "";
      const priceMatch = text.match(/(\s£\d+(?:\.\d+)?)$/);
      const priceText = priceMatch ? priceMatch[1] : "";
      const textWithoutPrice = priceText ? text.slice(0, -priceText.length) : text;
      const caloriesMatch = textWithoutPrice.match(/^(.*?)(\s*-\s*(?:\d+\s*kcal|kcal\s*\d+))$/i);
      if (!caloriesMatch) return;

      field.textContent = "";
      field.append(document.createTextNode(caloriesMatch[1]));

      const calories = document.createElement("span");
      calories.className = "item-calories";
      calories.textContent = caloriesMatch[2];
      field.appendChild(calories);

      if (priceText) {
        const price = document.createElement("span");
        price.className = "inline-price";
        price.textContent = priceText;
        field.appendChild(price);
      }
    });
  }

  function styleInlinePrices() {
    grid.querySelectorAll(".pizza-item, .pizza-sub, .wings-line, .box-sub").forEach((field) => {
      if (field.querySelector(".inline-price")) return;
      const html = field.innerHTML;
      const match = html.match(/^(.*?)(\s£\d+(?:\.\d+)?)$/);
      if (!match) return;
      field.innerHTML = match[1] + '<span class="inline-price">' + match[2] + "</span>";
    });
  }

  function getMarginTopMm(element) {
    const inlineValue = element.style.marginTop;
    if (inlineValue && inlineValue.endsWith("mm")) {
      return parseFloat(inlineValue) || 0;
    }

    const computedValue = window.getComputedStyle(element).marginTop;
    const pixels = parseFloat(computedValue) || 0;
    return pixels / 3.7795275591;
  }

  function adjustSpacing(element, delta) {
    const current = getMarginTopMm(element);
    const next = Math.max(0, Math.round((current + delta) * 10) / 10);
    element.style.marginTop = next + "mm";
  }

  function attachSpacingControls(element) {
    if (!element || element.querySelector(":scope > .spacing-controls")) return;

    // Spacing is adjusted inline in mm so the print layout stays predictable.
    const controls = document.createElement("div");
    controls.className = "spacing-controls";

    const decreaseButton = document.createElement("button");
    decreaseButton.type = "button";
    decreaseButton.className = "spacing-button";
    decreaseButton.textContent = "-";
    decreaseButton.title = "Reduce space above";
    decreaseButton.addEventListener("click", () => adjustSpacing(element, -1));

    const increaseButton = document.createElement("button");
    increaseButton.type = "button";
    increaseButton.className = "spacing-button";
    increaseButton.textContent = "+";
    increaseButton.title = "Increase space above";
    increaseButton.addEventListener("click", () => adjustSpacing(element, 1));

    controls.appendChild(decreaseButton);
    controls.appendChild(increaseButton);
    element.appendChild(controls);
  }

  function syncRightColumnSpacing() {
    // When the pizza block is removed, wings should drop lower to preserve
    // the looser visual spacing the user requested.
    const pizzaBox = grid.querySelector('[data-box-kind="pizza"]');
    const wingsBox = grid.querySelector(".wings-box");
    if (!wingsBox) return;
    wingsBox.classList.toggle("wings-box-expanded", !pizzaBox);
  }
})();
