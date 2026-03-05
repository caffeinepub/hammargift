export interface Product {
  id: number;
  name: string;
  category:
    | "birthday"
    | "anniversary"
    | "party-decor"
    | "kids"
    | "teens"
    | "men"
    | "women"
    | "seniors"
    | "corporate"
    | "combos";
  ageGroup: "all" | "0-5" | "6-12" | "teens" | "adults" | "seniors";
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviewCount: number;
  badge: "Best Seller" | "New" | "Sale" | null;
  emoji: string;
  gradient: string;
  isFlashSale?: boolean;
  description: string;
}

export const products: Product[] = [
  // ── Birthday ─────────────────────────────────────────────────────────────
  {
    id: 1,
    name: "Personalized LED Name Board",
    category: "birthday",
    ageGroup: "adults",
    price: 999,
    originalPrice: 1799,
    discount: 44,
    rating: 4.8,
    reviewCount: 342,
    badge: "Best Seller",
    emoji: "✨",
    gradient: "from-pink-400 to-rose-500",
    isFlashSale: true,
    description:
      "Custom LED name board with warm white lights. Perfect for birthdays, room décor, and gifting. Battery operated, easy to set up.",
  },
  {
    id: 2,
    name: "Chocolate Gift Box Premium",
    category: "birthday",
    ageGroup: "all",
    price: 599,
    originalPrice: 899,
    discount: 33,
    rating: 4.6,
    reviewCount: 218,
    badge: "Best Seller",
    emoji: "🍫",
    gradient: "from-pink-400 to-rose-500",
    isFlashSale: true,
    description:
      "Assorted premium chocolates in a beautiful gift box. Includes 16 handcrafted chocolates in milk, dark, and white varieties.",
  },
  {
    id: 3,
    name: "Happy Birthday Hamper Deluxe",
    category: "birthday",
    ageGroup: "adults",
    price: 1299,
    originalPrice: 2099,
    discount: 38,
    rating: 4.7,
    reviewCount: 156,
    badge: "New",
    emoji: "🎂",
    gradient: "from-pink-400 to-rose-500",
    description:
      "Complete birthday hamper with chocolates, candles, confetti, birthday card, and a personalized message ribbon.",
  },
  {
    id: 4,
    name: "Birthday Cake Scented Candle Set",
    category: "birthday",
    ageGroup: "adults",
    price: 449,
    originalPrice: 799,
    discount: 44,
    rating: 4.5,
    reviewCount: 89,
    badge: "Sale",
    emoji: "🕯️",
    gradient: "from-pink-400 to-rose-500",
    description:
      "Set of 3 cake-scented soy wax candles in decorative jars. Burns for 40+ hours each. Perfect birthday surprise.",
  },
  {
    id: 5,
    name: "Musical Birthday Greeting Card",
    category: "birthday",
    ageGroup: "all",
    price: 299,
    originalPrice: 499,
    discount: 40,
    rating: 4.4,
    reviewCount: 203,
    badge: null,
    emoji: "🎵",
    gradient: "from-pink-400 to-rose-500",
    description:
      "Pop-up musical greeting card that plays 'Happy Birthday' when opened. Hand-crafted with watercolor illustrations.",
  },

  // ── Anniversary ──────────────────────────────────────────────────────────
  {
    id: 6,
    name: "Luxury Rose Box Eternal",
    category: "anniversary",
    ageGroup: "adults",
    price: 1499,
    originalPrice: 2199,
    discount: 32,
    rating: 4.9,
    reviewCount: 412,
    badge: "Best Seller",
    emoji: "🌹",
    gradient: "from-red-400 to-pink-600",
    isFlashSale: true,
    description:
      "24 preserved roses in a luxury round box. Roses last 1-3 years without water. Available in red, pink, and white.",
  },
  {
    id: 7,
    name: "Silver Photo Frame Couple",
    category: "anniversary",
    ageGroup: "adults",
    price: 699,
    originalPrice: 1199,
    discount: 42,
    rating: 4.6,
    reviewCount: 178,
    badge: null,
    emoji: "🖼️",
    gradient: "from-red-400 to-pink-600",
    description:
      "Elegant silver-plated photo frame for couples. Holds a 5×7 photo with space for a personalized engraving.",
  },
  {
    id: 8,
    name: "Couple Infinity Lamp",
    category: "anniversary",
    ageGroup: "adults",
    price: 1199,
    originalPrice: 1899,
    discount: 37,
    rating: 4.7,
    reviewCount: 267,
    badge: "New",
    emoji: "💫",
    gradient: "from-red-400 to-pink-600",
    isFlashSale: true,
    description:
      "3D optical infinity illusion lamp with couple silhouette. USB powered, 7 color changing modes.",
  },
  {
    id: 9,
    name: "Personalized Star Map Print",
    category: "anniversary",
    ageGroup: "adults",
    price: 899,
    originalPrice: 1499,
    discount: 40,
    rating: 4.8,
    reviewCount: 134,
    badge: "New",
    emoji: "⭐",
    gradient: "from-red-400 to-pink-600",
    description:
      "Custom star map showing the night sky on your special date. Printed on premium matte paper, A3 size, ready to frame.",
  },

  // ── Party Decor ───────────────────────────────────────────────────────────
  {
    id: 10,
    name: "Birthday Balloon Kit 50pcs",
    category: "party-decor",
    ageGroup: "all",
    price: 349,
    originalPrice: 599,
    discount: 42,
    rating: 4.5,
    reviewCount: 589,
    badge: "Best Seller",
    emoji: "🎈",
    gradient: "from-yellow-400 to-orange-500",
    description:
      "50 latex balloons in assorted festive colors + ribbon + balloon pump. Perfect for any party decoration.",
  },
  {
    id: 11,
    name: "Party Decoration Complete Kit",
    category: "party-decor",
    ageGroup: "all",
    price: 899,
    originalPrice: 1499,
    discount: 40,
    rating: 4.6,
    reviewCount: 334,
    badge: "Best Seller",
    emoji: "🎉",
    gradient: "from-yellow-400 to-orange-500",
    isFlashSale: true,
    description:
      "All-in-one party kit: 50 balloons, banner, streamers, confetti poppers, tableware, and tissue pom-poms.",
  },
  {
    id: 12,
    name: "Fairy Light Curtain 3m×3m",
    category: "party-decor",
    ageGroup: "all",
    price: 549,
    originalPrice: 999,
    discount: 45,
    rating: 4.7,
    reviewCount: 445,
    badge: "Sale",
    emoji: "✨",
    gradient: "from-yellow-400 to-orange-500",
    description:
      "Warm white LED fairy light curtain. 300 LEDs, 8 lighting modes, waterproof. Perfect backdrop for photos.",
  },
  {
    id: 13,
    name: "Happy Birthday Foil Balloon Set",
    category: "party-decor",
    ageGroup: "all",
    price: 449,
    originalPrice: 799,
    discount: 44,
    rating: 4.4,
    reviewCount: 267,
    badge: null,
    emoji: "🎁",
    gradient: "from-yellow-400 to-orange-500",
    description:
      "Rose gold 'Happy Birthday' letter balloons + number foil balloons (0-9 set). Reusable, extra-large size.",
  },

  // ── Kids ─────────────────────────────────────────────────────────────────
  {
    id: 14,
    name: "Unicorn Gift Hamper",
    category: "kids",
    ageGroup: "6-12",
    price: 799,
    originalPrice: 1299,
    discount: 38,
    rating: 4.8,
    reviewCount: 312,
    badge: "Best Seller",
    emoji: "🦄",
    gradient: "from-blue-400 to-purple-500",
    description:
      "Magical unicorn hamper with plush toy, color book, sticker sheets, mini puzzle, and candy treats.",
  },
  {
    id: 15,
    name: "Remote Control Car Turbo",
    category: "kids",
    ageGroup: "6-12",
    price: 1299,
    originalPrice: 1999,
    discount: 35,
    rating: 4.6,
    reviewCount: 198,
    badge: null,
    emoji: "🚗",
    gradient: "from-blue-400 to-purple-500",
    description:
      "High-speed RC car with rechargeable battery, 4-wheel drive, 1:16 scale. Handles off-road terrain.",
  },
  {
    id: 16,
    name: "Building Blocks Mega Set 500pcs",
    category: "kids",
    ageGroup: "0-5",
    price: 899,
    originalPrice: 1499,
    discount: 40,
    rating: 4.7,
    reviewCount: 256,
    badge: "New",
    emoji: "🧱",
    gradient: "from-blue-400 to-purple-500",
    description:
      "500-piece colorful building blocks set compatible with major brands. Develops creativity and motor skills.",
  },
  {
    id: 17,
    name: "Art & Craft Kit for Kids",
    category: "kids",
    ageGroup: "6-12",
    price: 649,
    originalPrice: 999,
    discount: 35,
    rating: 4.5,
    reviewCount: 143,
    badge: "New",
    emoji: "🎨",
    gradient: "from-blue-400 to-purple-500",
    description:
      "Complete art kit with watercolors, colored pencils, brushes, sketch pads, and stencils. Age 5+.",
  },

  // ── Teens ─────────────────────────────────────────────────────────────────
  {
    id: 18,
    name: "Bluetooth Wireless Earbuds",
    category: "teens",
    ageGroup: "teens",
    price: 1499,
    originalPrice: 2499,
    discount: 40,
    rating: 4.5,
    reviewCount: 567,
    badge: "Best Seller",
    emoji: "🎧",
    gradient: "from-purple-400 to-pink-500",
    isFlashSale: true,
    description:
      "True wireless earbuds with noise cancellation, 24hr battery life, IPX5 waterproof. Universal compatibility.",
  },
  {
    id: 19,
    name: "Glow-in-Dark Poster Set",
    category: "teens",
    ageGroup: "teens",
    price: 599,
    originalPrice: 999,
    discount: 40,
    rating: 4.4,
    reviewCount: 189,
    badge: "New",
    emoji: "🌙",
    gradient: "from-purple-400 to-pink-500",
    description:
      "Set of 4 glow-in-the-dark room posters featuring galaxy, music, and motivational themes. Easy peel-and-stick.",
  },
  {
    id: 20,
    name: "Personalized Friendship Bracelet",
    category: "teens",
    ageGroup: "teens",
    price: 399,
    originalPrice: 699,
    discount: 43,
    rating: 4.6,
    reviewCount: 234,
    badge: null,
    emoji: "💜",
    gradient: "from-purple-400 to-pink-500",
    description:
      "Customizable friendship bracelet with name engraving. Set of 2, sterling silver with adjustable clasp.",
  },

  // ── Men ───────────────────────────────────────────────────────────────────
  {
    id: 21,
    name: "Men's Premium Grooming Kit",
    category: "men",
    ageGroup: "adults",
    price: 1199,
    originalPrice: 1799,
    discount: 33,
    rating: 4.7,
    reviewCount: 423,
    badge: "Best Seller",
    emoji: "🧴",
    gradient: "from-slate-500 to-blue-700",
    description:
      "Complete grooming set: beard oil, face wash, moisturizer, lip balm, and a premium comb in a luxury box.",
  },
  {
    id: 22,
    name: "Leather Wallet with RFID Block",
    category: "men",
    ageGroup: "adults",
    price: 799,
    originalPrice: 1399,
    discount: 43,
    rating: 4.6,
    reviewCount: 312,
    badge: null,
    emoji: "👜",
    gradient: "from-slate-500 to-blue-700",
    description:
      "Genuine leather bifold wallet with RFID blocking technology. Slim design, 8 card slots, coin pocket.",
  },
  {
    id: 23,
    name: "Travel Accessories Set Men",
    category: "men",
    ageGroup: "adults",
    price: 999,
    originalPrice: 1699,
    discount: 41,
    rating: 4.5,
    reviewCount: 178,
    badge: "New",
    emoji: "✈️",
    gradient: "from-slate-500 to-blue-700",
    description:
      "Complete travel kit: passport holder, luggage tags, cable organizer, travel pillow, and toiletry bag.",
  },

  // ── Women ─────────────────────────────────────────────────────────────────
  {
    id: 24,
    name: "Luxury Spa Gift Set",
    category: "women",
    ageGroup: "adults",
    price: 1499,
    originalPrice: 2499,
    discount: 40,
    rating: 4.8,
    reviewCount: 534,
    badge: "Best Seller",
    emoji: "💆",
    gradient: "from-pink-300 to-purple-400",
    description:
      "Indulgent spa set with rose bath salts, lavender body scrub, shea butter lotion, face mask, and candle.",
  },
  {
    id: 25,
    name: "Crystal Jewelry Box Organizer",
    category: "women",
    ageGroup: "adults",
    price: 899,
    originalPrice: 1499,
    discount: 40,
    rating: 4.7,
    reviewCount: 289,
    badge: "New",
    emoji: "💎",
    gradient: "from-pink-300 to-purple-400",
    description:
      "Mirrored jewelry organizer with crystal accents. 3 drawers, 24 ring slots, necklace hooks, and velvet lining.",
  },
  {
    id: 26,
    name: "Aromatic Diffuser Gift Set",
    category: "women",
    ageGroup: "adults",
    price: 1199,
    originalPrice: 1999,
    discount: 40,
    rating: 4.6,
    reviewCount: 201,
    badge: null,
    emoji: "🌸",
    gradient: "from-pink-300 to-purple-400",
    description:
      "Ultrasonic aroma diffuser with 6 essential oils (lavender, rose, eucalyptus, jasmine, mint, citrus).",
  },

  // ── Seniors ───────────────────────────────────────────────────────────────
  {
    id: 27,
    name: "Memory Photo Book Premium",
    category: "seniors",
    ageGroup: "seniors",
    price: 1299,
    originalPrice: 1999,
    discount: 35,
    rating: 4.9,
    reviewCount: 156,
    badge: "Best Seller",
    emoji: "📷",
    gradient: "from-amber-400 to-orange-500",
    description:
      "Personalized photo memory book with up to 40 photos and your captions. Hardcover, A4 size.",
  },
  {
    id: 28,
    name: "Herbal Wellness Gift Basket",
    category: "seniors",
    ageGroup: "seniors",
    price: 999,
    originalPrice: 1699,
    discount: 41,
    rating: 4.7,
    reviewCount: 134,
    badge: "New",
    emoji: "🌿",
    gradient: "from-amber-400 to-orange-500",
    description:
      "Curated wellness basket with herbal teas, honey, immunity supplements, and a warm knitted hand warmer.",
  },

  // ── Corporate ─────────────────────────────────────────────────────────────
  {
    id: 29,
    name: "Executive Corporate Gift Box",
    category: "corporate",
    ageGroup: "adults",
    price: 2499,
    originalPrice: 3999,
    discount: 37,
    rating: 4.8,
    reviewCount: 89,
    badge: "Best Seller",
    emoji: "🏢",
    gradient: "from-gray-500 to-slate-700",
    description:
      "Luxury corporate gift box with leather notebook, metal pen set, card holder, and desk organizer. Custom branding available.",
  },
  {
    id: 30,
    name: "Premium Planner & Pen Set",
    category: "corporate",
    ageGroup: "adults",
    price: 899,
    originalPrice: 1499,
    discount: 40,
    rating: 4.6,
    reviewCount: 167,
    badge: null,
    emoji: "📝",
    gradient: "from-gray-500 to-slate-700",
    description:
      "Hardcover premium planner with monthly/weekly layouts + Parker-style gel pen in a gift box.",
  },

  // ── Combos ────────────────────────────────────────────────────────────────
  {
    id: 31,
    name: "Birthday Mega Combo Pack",
    category: "combos",
    ageGroup: "all",
    price: 1799,
    originalPrice: 2999,
    discount: 40,
    rating: 4.7,
    reviewCount: 245,
    badge: "Best Seller",
    emoji: "🎁",
    gradient: "from-emerald-400 to-teal-600",
    isFlashSale: true,
    description:
      "Ultimate birthday combo: balloon kit + LED board + chocolate box + greeting card + party popper.",
  },
  {
    id: 32,
    name: "Couple Anniversary Bundle",
    category: "combos",
    ageGroup: "adults",
    price: 2199,
    originalPrice: 3499,
    discount: 37,
    rating: 4.8,
    reviewCount: 178,
    badge: "New",
    emoji: "💑",
    gradient: "from-emerald-400 to-teal-600",
    description:
      "Perfect anniversary bundle: rose box + couple photo frame + infinity lamp + personalized greeting.",
  },
  {
    id: 33,
    name: "Kids Festive Gift Set",
    category: "combos",
    ageGroup: "6-12",
    price: 1499,
    originalPrice: 2299,
    discount: 35,
    rating: 4.7,
    reviewCount: 134,
    badge: "Sale",
    emoji: "🌈",
    gradient: "from-emerald-400 to-teal-600",
    description:
      "Bumper kids gift set: building blocks + art kit + unicorn plush + chocolates + birthday balloons.",
  },
  {
    id: 34,
    name: "Corporate Welcome Kit",
    category: "combos",
    ageGroup: "adults",
    price: 1999,
    originalPrice: 3299,
    discount: 39,
    rating: 4.6,
    reviewCount: 67,
    badge: null,
    emoji: "🤝",
    gradient: "from-emerald-400 to-teal-600",
    description:
      "New employee welcome kit: planner + pen + mug + desk plant + company-branded tote. Custom options available.",
  },
];

export const flashSaleProducts = products.filter((p) => p.isFlashSale);

export const getProductsByCategory = (category: string) =>
  products.filter((p) => p.category === category);

export const getProductsByAgeGroup = (ageGroup: string) =>
  products.filter((p) => p.ageGroup === ageGroup || p.ageGroup === "all");
