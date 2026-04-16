window.CLAPHAM_NORTH_MENU_DATA = {
  editorHint: "Click on the text to edit it",
  printButton: "Download PDF",
  logo: {
    src: "images/Logo.jpeg",
    alt: "Clapham North logo"
  },
  columns: [
    [
      {
        type: "section",
        title: "Small Plates",
        items: [
          { name: "Onion Bhajis,", desc: "cucumber & mint yoghurt (v) - 377 kcal", price: "£8" },
          { name: "Curried Lamb leg kebabs,", desc: "cucumber & mint yoghurt - 811 kcal", price: "£12" },
          { name: "Loaded Tater Tots,", desc: "chicken, gruyere cheese, crispy onion, pico de gallo, hot honey mayo - 834 kcal", price: "£9.5" },
          { name: "Cheeseburger tacos,", desc: "pico de gallo, crispy onions, burger sauce - 318 kcal", price: "£9" },
          { name: "Halloumi with jerk gravy,", desc: "chilli, spring onion - 892 kcal", price: "£10" },
          { name: "Bang Bang Cauliflower,", desc: "gochujang sauce, spring onion, chilli (Vg) - 98 kcal", price: "£8" },
          { name: "Lamb shoulder sliders,", desc: "cucumber & mint yoghurt, baby gem lettuce - 416 kcal", price: "£8" },
          { name: "Beef burger sliders,", desc: "cheese, baby gem lettuce, tomato - 576 kcal", price: "£8.5" },
          { name: "Cheesy truffle fries,", desc: "gruyere cheese - 549 kcal", price: "£8.5" }
        ]
      },
      {
        type: "section",
        title: "Mains",
        marginTopMm: 5,
        items: [
          { name: "Cyder Battered Haddock & Triple cooked chips,", desc: "tartar sauce & mushy peas - 1090 kcal", price: "£19.5" },
          { name: "Hertfordshire chicken caesar salad,", desc: "cos lettuce, anchovies, brioche croutons & soft St Ewes egg - 701 kcal", price: "£17" },
          { name: "Loaded Nachos,", desc: "Beef ragu, Gruyere cheese, sour cream, guacamole, pico de gallo, Jalapenos - 422 kcal", price: "£18.5" },
          { name: "Jacket potato,", desc: "beef ragu, gruyere cheese, aioli coleslaw & dill - 549 kcal", price: "£9.5" },
          { name: "Hot dog,", desc: "ketchup, american mustard, crispy onions, gherkin, fries - 487 kcal", price: "£14" }
        ]
      },
      {
        type: "section",
        title: "Puds",
        marginTopMm: 5,
        items: [
          { name: "Eton Mess,", desc: "merringue, strawberries, chocolate flakes (V) - 464 kcal", price: "£8.5" },
          { name: "Lemon possett,", desc: "lemon zest, mint (V) - 529 kcal", price: "£7" },
          { name: "Flourless Chocolate cake,", desc: "vanilla ice cream (V) - 544 kcal", price: "£8.5" },
          { name: "Affogato, vegan vanilla ice cream,", desc: "coffee, cocoa powder (VG) - 139 kcal", price: "£6.5" },
          { name: "Ice cream,", desc: "Vanilla, Chocolate, Salted Caramel, Honeycomb (VG) -", price: "£2.5" }
        ]
      }
    ],
    [
      {
        type: "editableSection",
        title: "Sunday Roast",
        removable: true,
        note: "All roasts served with roast potatoes, carrots, butternut squash puree,creamed leeks, braised red cabbage, yorkshire pudding & gravy.",
        items: [
          { name: "Lemon & Thyme Roasted Chicken", price: "£22.5" },
          { name: "35 Day Aged West Country Rump of Beef", price: "£24" },
          { name: "Salted Pork Belly", price: "£21" },
          { name: "Roasted Pepper, Cauliflower, Courgette, Vegan Feta Wellington", price: "£19.5" },
          { name: "The Ultimate Roast(For Two)", price: "£50" }
        ]
      },
      {
        type: "editableSection",
        title: "Sunday Sides",
        removable: true,
        marginTopMm: 3,
        items: [
          { name: "Cauliflower Cheese" },
          { name: "Sunday Yorkshire Pudding, Gravy" },
          { name: "Garlic and Rosemary Potatoes, Gravy" },
          { name: "Creamed Leeks" },
          { name: "Braised Red Cabbage, Sausage Bacon Stuffing" }
        ]
      },
      {
        type: "box",
        kind: "pizza",
        removable: true,
        marginTopMm: 4,
        titleHtml: "Pizza Slices<br>(Weekends Only)",
        addButtonLabel: "+ Add pizza line",
        lines: [
          { className: "pizza-item", text: "Pepperoni Slice £6" },
          { className: "pizza-item", text: "Margherita Slice (V) £5" },
          { className: "pizza-item", text: "Veggie Slice (V)" },
          { className: "pizza-sub", text: "Courgette, Mushroom & Red Pepper £5" }
        ]
      },
      {
        type: "box",
        kind: "wings",
        removable: true,
        className: "wings-box",
        title: "Wings",
        addButtonLabel: "+ Add wings line",
        lines: [
          { className: "box-sub", html: "Crispy Chicken Wings served with<br>your choice of sauce:" },
          { className: "wings-line", text: "Lemon & Herb" },
          { className: "wings-line", text: "Honey Glaze" },
          { className: "wings-line", text: "Gochujang Barbecue" },
          { className: "wings-line", text: "Mango & Scotch Bonnet" }
        ],
        pricesHtml: "<span>5 Wings £9.5</span><span>10 Wings £17.5</span><span>20 Wings £32</span>"
      },
      {
        type: "section",
        title: "Buns (GF bun available)",
        marginTopMm: 4,
        items: [
          { name: "Short rib & brisket British beef burger,", desc: "sesame seeded bun, cheese, pickles, burger sauce, crispy onions, fries - 1280 kcal", price: "£17.50" },
          { name: "Plant Burger,", desc: "sesame seeded bun, vegan cheddar, pickles, burger sauce, crispy onion, fries - 1076 kcal", price: "£16" },
          { name: "Chicken breast burger,", desc: "sesame seeded bun, baby gem lettuce, aioli coleslaw, fries - 1036 kcal", price: "£17.50" },
          { name: "Mango & scotch bonnet chicken breast burger,", desc: "sesame seeded bun, baby gem lettuce, aioli coleslaw, fries - 1087 kcal", price: "£18" },
          { name: "Smashed beef burger,", desc: "sesame seeded bun, burger sauce, cheese, baby gem lettuce, onion, gherkin, tomato, fries - 1062 kcal", price: "£17.50" },
          { name: "Mango & scotch bonnet hot smashed beef burger,", desc: "sesame seeded bun, cheese, baby gem lettuce, onion, burger sauce, gherkin, tomato, fries - 1079 kcal", price: "£18" },
          { name: "Onion bhaji burger,", desc: "sesame seeded bun, baby gem lettuce, tomato, cucumber & mint yoghurt, fries - 1030 kcal", price: "£16.50" }
        ],
        addOn: "ADD BACON £1 – ADD EXTRA PATTY £2"
      }
    ]
  ],
  footerLines: [
    "<em>Before you order your food & drinks, please inform a member of staff if you have a food allergy or intolerance.</em>",
    "Tables of 4 or more are subject to a discretionary service charge of 12.5%.",
    "An adult's daily recommended allowance is 2000 kcal.",
    "Fish may contain small bones. All weights & measures are accurate before being cooked. (V) vegetarian, (Vg) vegan"
  ]
};
