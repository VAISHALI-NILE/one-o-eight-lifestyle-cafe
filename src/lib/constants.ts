import type {
  NavLink,
  MenuItem,
  FeaturedDish,
  Testimonial,
  MenuTabItem,
  GalleryImage,
} from "@/types";

export const NAV_LINKS: NavLink[] = [
  { href: "#experience", label: "Experience" },
  { href: "#menu", label: "Menu" },
  { href: "#atmosphere", label: "Atmosphere" },
  { href: "#wellness", label: "Wellness" },
  { href: "#visit", label: "Visit" },
];
export const MENU_TABS: MenuTabItem[] = [
  { label: "PASTA", value: "pasta" },
  { label: "COFFEE", value: "coffee" },
  { label: "VEGETARIAN BREAKFAST", value: "veg-breakfast" },
  { label: "COLD COFFEE", value: "cold-coffee" },
  { label: "LOOSE LEAF TEA", value: "loose-leaf-tea" },
  { label: "JUICE", value: "juice" },
  { label: "SMOOTHIE", value: "smoothie" },
  { label: "H20", value: "h20" },
  { label: "EGG BREAKFAST", value: "egg-breakfast" },
  { label: "SALAD & BOWLS", value: "salad-bowls" },
  { label: "STARTER", value: "starter" },
  { label: "PIZZA", value: "pizza" },
  { label: "TEA", value: "tea" },
  { label: "BAKED GOODS", value: "baked" },
  { label: "RETAIL", value: "retail" },
  { label: "SANDWICH", value: "sandwich" },
];

export const MENU_ITEMS: MenuItem[] = [
  // Pasta
  {
    id: "pasta-1",
    name: "Arrabiata Pasta",
    description: "Chili Neapolitan Sauce With Broccoli",
    price: 450,
    category: "pasta",
  },
  {
    id: "pasta-2",
    name: "Chilli & Garlic",
    description:
      "Garlic, Red Chili, Fresh Parsley & Basil Tossed In EVOO",
    price: 400,
    category: "pasta",
  },
  {
    id: "pasta-3",
    name: "Creamy Pesto Pasta",
    description:
      "Bianco Sauce Mixed With Basil Pesto & Sauteed Spinach & Mushroom",
    price: 450,
    category: "pasta",
  },
  {
    id: "pasta-4",
    name: "Rosa Pasta",
    description:
      "Bianco Sauce Mixed With Nap Sauce & Sauteed Spinach & Mushroom",
    price: 450,
    category: "pasta",
  },

  // Coffee
  {
    id: "coffee-1",
    name: "Almond Milk Coffee",
    description: "[200Ml] Double Shot of Espresso With Almond Milk",
    price: 300,
    category: "coffee",
  },
  {
    id: "coffee-2",
    name: "Cappuccino",
    description:
      "[200 Ml] Double shot espresso with hot milk and chocolate powder.",
    price: 250,
    category: "coffee",
  },
  {
    id: "coffee-3",
    name: "Coffee With Coconut Milk",
    description: "[200Ml] Double Shot of Espresso With Coconut Milk",
    price: 300,
    category: "coffee",
  },
  {
    id: "coffee-4",
    name: "Espresso Coffee",
    description: "[200 Ml] Single Shot Espresso",
    price: 140,
    category: "coffee",
  },
  {
    id: "coffee-5",
    name: "Flat White Coffee",
    description: "[200 Ml] Double shot espresso with steamed milk.",
    price: 250,
    category: "coffee",
  },
  {
    id: "coffee-6",
    name: "Golden Latte",
    description: "Organic Turmeric With Steamed Milk",
    price: 250,
    category: "coffee",
  },
  {
    id: "coffee-7",
    name: "Hot Chocolate",
    description: "[200 Ml] Chocolate and hot milk.",
    price: 230,
    category: "coffee",
  },
  {
    id: "coffee-8",
    name: "Caffe Latte Coffee",
    description: "[200 Ml] Double shot espresso with hot milk.",
    price: 250,
    category: "coffee",
  },
  {
    id: "coffee-9",
    name: "Long Black Coffee",
    description: "[200 Ml] Double shot espresso with hot water.",
    price: 230,
    category: "coffee",
  },
  {
    id: "coffee-10",
    name: "Long Macchiato",
    description: "Double shot espresso with a dash of hot milk.",
    price: 230,
    category: "coffee",
  },
  {
    id: "coffee-11",
    name: "Matcha Latte",
    description: "[200Ml] Matcha Powder With Steamed Milk",
    price: 330,
    category: "coffee",
  },
  {
    id: "coffee-12",
    name: "Mocha Coffee",
    description:
      "[200 Ml] Single shot espresso with chocolate and hot milk.",
    price: 270,
    category: "coffee",
  },

  // Vegetarian Breakfast
  {
    id: "veg-1",
    name: "Cacao Berry Smoothie Bowl",
    description:
      "Raspberry, Cacao, Banana, Coconut Milk, topped with nut mix, fresh banana, chia seed & Bali butter",
    price: 580,
    category: "veg-breakfast",
  },
  {
    id: "veg-2",
    name: "Dragon Smoothie Bowl",
    description:
      "Purple Dragon Fruit, Wild Blueberry, Banana, Fresh Coconut Milk topped with nut mix, fresh banana & chia seed & almond butter",
    price: 580,
    category: "veg-breakfast",
  },
  {
    id: "veg-3",
    name: "Granola Bowl",
    description:
      "House granola with fruits & house made yoghurt. Crunchy, creamy & naturally sweet",
    price: 450,
    category: "veg-breakfast",
  },
  {
    id: "veg-4",
    name: "Mushroom On Toast",
    description:
      "Roast & charred mushroom with garlic cashew cream & parmesan",
    price: 450,
    category: "veg-breakfast",
  },
  {
    id: "veg-5",
    name: "Pink Passion Smoothie",
    description:
      "Raspberry, Papaya, Banana, Apple Juice, Coconut Milk & Nut Mix",
    price: 550,
    category: "veg-breakfast",
  },

  // Cold Coffee
  {
    id: "cold-1",
    name: "Affogato",
    description:
      "2 scoops of vanilla ice cream with double shot of espresso.",
    price: 320,
    category: "cold-coffee",
  },
  {
    id: "cold-2",
    name: "Coffee Shake",
    description:
      "[300 Ml] Double shot espresso, vanilla ice cream and milk.",
    price: 320,
    category: "cold-coffee",
  },
  {
    id: "cold-3",
    name: "Cold Brew",
    description: "[300 Ml] 12 hour brew.",
    price: 250,
    category: "cold-coffee",
  },
  {
    id: "cold-4",
    name: "Ice Black",
    description: "[300 Ml] Double shot espresso over ice.",
    price: 250,
    category: "cold-coffee",
  },
  {
    id: "cold-5",
    name: "Ice Latte",
    description:
      "[300 Ml] Double shot espresso over ice and milk.",
    price: 275,
    category: "cold-coffee",
  },

  // Juice
  {
    id: "juice-1",
    name: "Cleanse",
    description: "Beetroot, Carrot, Apple, Ginger & Lemon",
    price: 330,
    category: "juice",
  },
  {
    id: "juice-2",
    name: "Green Juice",
    description: "Cucumber, Carrot, Apple, Ginger & Lemon",
    price: 330,
    category: "juice",
  },
  {
    id: "juice-3",
    name: "Mandarin & Orange",
    description: "Fresh citrus blend",
    price: 350,
    category: "juice",
  },
  {
    id: "juice-4",
    name: "Minty Melon Juice",
    description: "Watermelon, Mint, Chia",
    price: 300,
    category: "juice",
  },

  // Smoothie
  {
    id: "smoothie-1",
    name: "Alkaline Smoothie",
    description:
      "Coconut Water, Spinach, Banana, Chia, Mint & Lemon",
    price: 390,
    category: "smoothie",
  },
  {
    id: "smoothie-2",
    name: "Berry Nice To Meet You",
    description:
      "Raspberry, Blueberry, Honey & House Made Yoghurt",
    price: 390,
    category: "smoothie",
  },
  {
    id: "smoothie-3",
    name: "Invigorate",
    description:
      "25g ISO whey, red dragon fruit, raspberry, pineapple, coconut water & honey",
    price: 390,
    category: "smoothie",
  },

  // Pizza
  {
    id: "pizza-1",
    name: "Margherita Pizza",
    description:
      "(12 Inches) Nap Sauce, Grana Padano, Pizza Mozzarella, Fresh Basil, EVOO",
    price: 550,
    category: "pizza",
  },
  {
    id: "pizza-2",
    name: "Pesto Pizza",
    description:
      "(12 Inches) Pesto, Pizza Mozzarella, Roast Zucchini & Peppers, Olives & Fresh Rocula",
    price: 715,
    category: "pizza",
  },
  {
    id: "pizza-3",
    name: "Smoked Mushroom Pizza",
    description:
      "(12 Inches) Bechamel, Mushroom, Mozzarella, Fresh Rocket, EVOO",
    price: 715,
    category: "pizza",
  },
  {
    id: "pizza-4",
    name: "The Lot",
    description:
      "Nap sauce, mozzarella, mushroom, roast zucchini, capsicum, olives, jalapeno & EVOO",
    price: 780,
    category: "pizza",
  },

  // Sandwich
  {
    id: "sandwich-1",
    name: "Chuna Melt Sandwich",
    description:
      "Smashed Chickpeas, Onion, Capers, Dill, Mozzarella & Cheddar",
    price: 400,
    category: "sandwich",
  },
  {
    id: "sandwich-2",
    name: "Brioche Croque Madame",
    description:
      "Classic French-style toasted brioche with spinach, bechamel, mozzarella, cheddar and fried egg",
    price: 400,
    category: "sandwich",
  },
  {
    id: "sandwich-3",
    name: "Italian Toasted Sandwich",
    description: "Cherry tomato, olives, pesto & mozzarella",
    price: 350,
    category: "sandwich",
  },

  // Baked Goods
  {
    id: "baked-1",
    name: "Cheesecake",
    description:
      "Whole Wheat, Brown Sugar, Butter, Cheese Cream & Vanilla Paste",
    price: 350,
    category: "baked",
  },
  {
    id: "baked-2",
    name: "Banana Bread",
    description: "Khapli, Brown Sugar, Butter, Banana, Egg",
    price: 200,
    category: "baked",
  },
  {
    id: "baked-3",
    name: "Carrot Cake",
    description:
      "Khapli Wheat Flour, Carrot, Walnut, Brown Sugar & Cheese Cream",
    price: 300,
    category: "baked",
  },

  // Tea
  {
    id: "tea-1",
    name: "Leaf Tea",
    description: "Premium brewed leaf tea",
    price: 275,
    category: "tea",
  },

  // Retail
  {
    id: "retail-1",
    name: "Almond Butter",
    description: "House made almond butter",
    price: 550,
    category: "retail",
  },
  {
    id: "retail-2",
    name: "Coffee Beans",
    description:
      "House Blend - Medium Roast Blend of Mysore Nuggets & Robusta Coffee Beans",
    price: 500,
    category: "retail",
  },
  {
    id: "retail-3",
    name: "Granola Classic 250grm",
    description: "House-made granola",
    price: 500,
    category: "retail",
  },
];

export const FEATURED_DISHES: FeaturedDish[] = [
  {
    id: "featured-1",
    name: "Dragon Smoothie Bowl",
    description: "A vibrant symphony of organic pitaya and house granola.",
    price: 18,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCoBqakmmWLZoR94D8kZ_9rcH8h2sJs1Ii4QD7vS2BXXa3VP1P5O_MhCmftvo-OpUTl07VHDN5nYkmvDH5QvlE3TYPETUjc5sk-kP9aiDCiJ3_ws224G28Au25JUocy-kId7V-bRpvR--Hdty3BfdC2Gn5L7J0u9p5_WJ64PHKy0aDlaGbOXMr77-plM9Lpd3T8UnK1mVx1Xfju971e5SO7_vcHAOhuZdX3avnKI7QIVIS5IFKJYIaNdeVJhZyreNI9ordPQgTecLoJ",
    alt: "Dragon Smoothie Bowl with pitaya and granola",
  },
  {
    id: "featured-2",
    name: "Ricotta Pancakes",
    description: "Whipped lemon ricotta, organic berries, artisan maple.",
    price: 22,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCWbpv6XNrw4Yb7NuUsa95IR3FLZTEgpbXPgrkFlMpJyYTnVYKVWebzRXoVlRaTH09VVngX_EiSGm9EOtB-VnSCjK-ZMpjow9Fwuw2CM7nDafFH8cCSRb3BUtp5v_7SvdEnAy-lW7U1Ujf-wpfgx6ikS6cOdJioKX4op-9YVtK6w1O1vFf7psJFWYID2irPkpJap2CIRzSB114RCpgpsNhoWYVbclZ2r31MUcUFC_ej00npXhdLePIb_Jj3L3g3fkfSmI_y4cbkzTOt",
    alt: "Ricotta Pancakes with berries and maple syrup",
  },
  {
    id: "featured-3",
    name: "Sourdough Pizza",
    description: "24-hour fermented dough, buffalo mozzarella, wild basil.",
    price: 26,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAbi0FfS7ilxWgqQJe-rg1FTOgYNBwjtGYiLYUlG3IhoNq_1bircgDH1vtGvxT6IkjshCZIJoP0ux5mfqqG7n9JkcftcxLzdhmXb7VVGt068MIEmq8Frg2lYaujH0A9cz8yl9euYmZ9LfA6TfHDtQWKtu7dl_r0e9NBKT1J1bybebfkKbMNly23cPeFGIQyvHgMxtK5-n7po_KjQHLAsXNgRkuWnbQDPfn_aHAMJfGg-LG4hfexpuSVKwdkikspJ3o5OgLmunTBGmO8",
    alt: "Sourdough Pizza with buffalo mozzarella and basil",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote:
      "A calm and peaceful cafe with incredible food and the perfect atmosphere to relax or work. Their Eggs Benedict were absolutely perfect.",
    author: "Ashwini Sahay",
    role: "Local Guide",
    initials: "AS",
  },
  {
    id: "t2",
    quote:
      "The Dragon Smoothie Bowl and Masala Omelette were fresh, comforting and beautifully balanced. The relaxed international cafe vibe makes this place truly special.",
    author: "Ashish Singh",
    role: "Breakfast & Brunch Lover",
    initials: "AS",
  },
  {
    id: "t3",
    quote:
      "Every bite felt premium and thoughtfully prepared. The ingredients tasted fresh, the presentation was beautiful, and the vegan options were impressive.",
    author: "Sho",
    role: "Food Explorer",
    initials: "SH",
  },
  {
    id: "t4",
    quote:
      "One of the most refreshing spots in the city. The greenery, healthy menu, smoothie bowls and coffee create such a wholesome experience.",
    author: "Ayushman Arun",
    role: "Travel & Food Creator",
    initials: "AA",
  },
  {
    id: "t5",
    quote:
      "The calming vibe, warm lighting and peaceful crowd make this cafe perfect for slowing down, working, reading or simply enjoying a quiet brunch.",
    author: "Ritika Raj",
    role: "Cafe Enthusiast",
    initials: "RR",
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "g1",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJ7ZslFB5V-DWkHs8iGNrsTWufaRyq8D2_MNTFWXUc1QgAo-2gUF2fLDqpTe-TYQT5YnbORMYyYLC33BLEMfsdLfTx7iNRBZHP9_L9qoGnTrYXcFQrKXMmjT4oxQYrmMF6yQKzgbVGwYOYWtbZjS6FaTwl185xNltpAdstq0v5mQNjm5VqnaDX-fxu-KN92WS-R71OnXk6m-OhJmWtw1q_ocUNZDswHip_0a_MjMt2x4rX9CGZCG9fJuE-E90ZwG2pNh8DrYdKKyAh",
    alt: "Sunlit cafe interior with architectural details",
    span: "wide",
  },
  {
    id: "g2",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzzPs_KlV3ZjlXQkJcYdA_HKhVr-BUfnmWvup6HvTt0OxfFOC0IxUr75kexU90DGDxSpRM_vzY53iiJw1XuA1clCFEBIiLzLfIJrWJSiGP4Q35sfiJIHdjokV0MSirI-YK4SMbc3j-Dx8XjmCWQlF5EaTRKRbK1ohLtm2qgI7A-X7ftwSAArTC5Sf6MY8K5PZlFCjjrsuhLNDIZU4QJHOAlN_Oy6w3NIlAzIE45_yXyb6bY2dkdPpZukrh60j8iRVzLql_cPhk-pE5",
    alt: "Perfectly crafted coffee with latte art",
    span: "normal",
  },
  {
    id: "g3",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJwkwhsa-_Ywf99vK5lk0D7G-bUlIk014ryCMl1uKAGN1mcJGCOvGznsZ5-TT2ym6W_TpnvcJC6wa8RGqRQSTemg3XkNAdGYBVF2E_46o1vD_y-LguPCghKQ3hRfcrm_lZ_yhmURRqy_6lArqGPX4m2oKM30Alu6khidFteF1redKjaprJ_P4jmDcgXNJCbr_E1NJjVRWMr3pzYIwomSspzaTZLvdmGlcMBfagOVblwH9-KtQkAfjJhias7A-Sz0UM2p2BFRXDHBig",
    alt: "Tranquil workspace for remote creatives",
    span: "tall",
  },
  {
    id: "g4",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfU7KqYG2zjQ_8J2q2bkOg8TDZRkOlfyLRsMN3W4OAGNDO_VZs-sSzT3Q2v_Sc86xvZEzXpLCGBcVlTe4NdVElrvO9VzpKn69y459VgN45lFT7GmSj2xMbogPQtke_TM87RgRFO2b6H306TFtACpxvdyX-1BoytYqs_hwVrqTxCMwoMsVnEgdrO_Pdv04CegCQ3ZCLLIVPr089wfofQbV1lQ-83RDGxXsUX9oTV3Jq0-GZq-bVSvnfp4vEQxf-_5cey5kTTFUnMQcS",
    alt: "Cosy corner nook with warm natural lighting",
    span: "wide",
  },
];

export const BUSINESS_INFO = {
  name: "One O Eight",
  tagline: "Lifestyle Cafe & Sanctuary",
  address: "Pingale Farms, S Main Rd, behind Blossom Boulevard, Ashok Chakra Society, Iricen Railway Colony, Koregaon Park, Pune, Maharashtra 411001",
  hours: "Daily: 8:00 AM – 9:30 PM",
  kitchenCloses: "Kitchen closes at 9:30",
  phone: "070710 81080",
  email: "hello@oneoheight.com",
  instagram: "https://www.instagram.com/oneoeightcafe",
};
