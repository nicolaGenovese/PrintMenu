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
          { name: "Onion Bhajis,", desc: "cucumber & mint yoghurt (v) - 270 kcal", price: "£8" },
          { name: "Curried Lamb leg kebabs,", desc: "cucumber & mint yoghurt - 1157 kcal", price: "£12" },
          { name: "Loaded Tater Tots,", desc: "chicken, gruyere cheese, crispy onion, pico de gallo, hot honey mayo - 834 kcal", price: "£8.5" },
          { name: "Cheeseburger tacos,", desc: "pico de gallo, crispy onions, burger sauce - 302 kcal", price: "£9" },
          { name: "Halloumi with jerk gravy,", desc: "chilli, spring onion - 441 kcal", price: "£10" },
          { name: "Bang Bang Cauliflower,", desc: "gochujang sauce, spring onion, chilli (Vg) - 155 kcal", price: "£8" },
          { name: "Lamb shoulder sliders,", desc: "cucumber & mint yoghurt, baby gem lettuce - 378 kcal", price: "£8" },
          { name: "Beef burger sliders,", desc: "cheese, baby gem lettuce, tomato - 488 kcal", price: "£8.5" },
          { name: "Cheesy truffle fries,", desc: "gruyere cheese - 549 kcal", price: "£8.5" },
          { name: "Triple cooked chips/Skinny fries,", desc: " - 540 kcal", price: "£4.5" }
        ]
      },
      {
        type: "section",
        title: "Mains",
        marginTopMm: 5,
        items: [
          { name: "Cyder Battered Haddock & Triple cooked chips,", desc: "tartar sauce & mushy peas - 1090 kcal", price: "£19" },
          { name: "Hertfordshire chicken caesar salad,", desc: "cos lettuce, anchovies, brioche croutons & soft St Ewes egg - 701 kcal", price: "£17" },
          { name: "Loaded Nachos,", desc: "Beef ragu, Gruyere cheese, sour cream, guacamole, pico de gallo, Jalapenos - 561 kcal", price: "17.5" },
          { name: "Jacket potato,", desc: "beef ragu, gruyere cheese, aioli coleslaw & dill - 692 kcal", price: "£12" },
          { name: "Hot dog,", desc: "ketchup, american mustard, crispy onions, gherkin, fries - 488 kcal", price: "£14" }
        ]
      },
      {
        type: "section",
        title: "Puds",
        marginTopMm: 5,
        items: [
          { name: "Eton Mess,", desc: "merringue, strawberries, chocolate flakes (V) - 276 kcal", price: "£8.5" },
          { name: "Lemon posset,", desc: "lemon zest, mint (V) - 529 kcal", price: "£7" },
          { name: "Flourless Chocolate cake,", desc: "vanilla ice cream (V) - 550 kcal", price: "£8.5" },
          { name: "Affogato, vegan vanilla ice cream,", desc: "coffee, cocoa powder (VG) - 139 kcal", price: "£6.5" },
          { name: "Ice cream,", desc: "Vanilla, Chocolate, Salted Caramel, Brandy (VG) -", price: "£2.5" }
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
          { name: "Lemon & Thyme Roasted Chicken - kcal 1653", price: "£21.5" },
          { name: "35 Day Aged West Country Rump of Beef - kcal 969", price: "£23.50" },
          { name: "Salted Pork Belly - kcal 1271", price: "£20" },
          { name: "Roasted Pepper, Cauliflower, Courgette, Vegan Feta Wellington - kcal 930", price: "£18" },
          { name: "The Ultimate Roast(For Two) - kcal 2701", price: "£50" }
        ]
      },
      {
        type: "editableSection",
        title: "Sunday Sides",
        removable: true,
        marginTopMm: 1,
        items: [
          { name: "Cauliflower Cheese - kcal 429", price: "£7.50" },
          { name: "Sunday Yorkshire Pudding, Gravy - kcal 415", price: "£4" },
          { name: "Garlic and Rosemary Potatoes, Gravy - kcal 270", price: "£3" },
          { name: "Creamed Leeks - kcal 336", price: "£" },
          { name: "Braised Red Cabbage, Sausage Bacon Stuffing - kcal 261", price: "£" }
        ]
      },
      {
        type: "box",
        kind: "pizza",
        removable: true,
        marginTopMm: 2,
        titleHtml: "Pizza Slices<br>(Weekends Only)",
        addButtonLabel: "+ Add pizza line",
        lines: [
          { className: "pizza-item", text: "Pepperoni Slice - kcal 245 £6" },
          { className: "pizza-item", text: "Margherita Slice (V) - kcal 219 £5" },
          { className: "pizza-item", text: "Veggie Slice (V)" },
          { className: "pizza-sub", text: "Courgette, Mushroom & Red Pepper - kcal 286 £5" }
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
          { className: "wings-line", text: "Lemon & Herb - kcal 863" },
          { className: "wings-line", text: "Honey Glaze - kcal 998" },
          { className: "wings-line", text: "Gochujang Barbecue - kcal 958" },
          { className: "wings-line", text: "Mango & Scotch Bonnet - kcal 886" }
        ],
        pricesHtml: "<span>5 Wings £9.5</span><span>10 Wings £17.5</span><span>20 Wings £32</span>"
      },
      {
        type: "section",
        title: "Buns (GF bun available)",
        marginTopMm: 2,
        items: [
          { name: "Short rib & brisket British beef burger,", desc: "sesame seeded bun, cheese, pickles, burger sauce, crispy onions, fries - 1280 kcal", price: "£17.50" },
          { name: "Plant Burger,", desc: "sesame seeded bun, vegan cheddar, pickles, burger sauce, crispy onion, fries - 1076 kcal", price: "£16" },
          { name: "Chicken breast burger,", desc: "sesame seeded bun, baby gem lettuce, aioli coleslaw, fries - 1066 kcal", price: "£17.50" },
          { name: "Mango & scotch bonnet chicken breast burger,", desc: "sesame seeded bun, baby gem lettuce, aioli coleslaw, fries - 1048 kcal", price: "£18" },
          { name: "Smashed beef burger,", desc: "sesame seeded bun, burger sauce, cheese, baby gem lettuce, onion, gherkin, tomato, fries - 1069 kcal", price: "17.50" },
          { name: "Mango & scotch bonnet hot smashed beef burger,", desc: "sesame seeded bun, cheese, baby gem lettuce, onion, burger sauce, gherkin, tomato, fries - 1076 kcal", price: "£18" },
          { name: "Onion bhaji burger,", desc: "sesame seeded bun, baby gem lettuce, tomato, cucumber & mint yoghurt, fries - 856 kcal", price: "£16.50" }
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
