import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useState } from "react";
import { useStore } from "../store/useStore";

const NAV_CATEGORIES = [
  "All Gifts",
  "Birthday",
  "Anniversary",
  "Party Decor",
  "Kids",
  "Men",
  "Women",
  "Seniors",
  "Corporate",
  "Combos",
  "New Arrivals",
  "Sale",
];

const SEARCH_CATEGORIES = [
  "All Categories",
  "Birthday",
  "Anniversary",
  "Party Decor",
  "Kids",
  "Men",
  "Women",
  "Seniors",
  "Corporate",
  "Combos",
];

export function Header() {
  const {
    cartCount,
    wishlistCount,
    setCartOpen,
    searchQuery,
    setSearchQuery,
    activeCategory,
    setActiveCategory,
  } = useStore();

  const [localSearch, setLocalSearch] = useState(searchQuery);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(localSearch);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalSearch(e.target.value);
    setSearchQuery(e.target.value);
  };

  const cartCountVal = cartCount();
  const wishlistCountVal = wishlistCount();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar — festive rose stripe */}
      <div className="hidden md:flex items-center justify-between bg-gradient-to-r from-rose-700 via-rose-600 to-rose-700 text-white text-[11px] px-6 md:px-10 py-1">
        <span className="flex items-center gap-1.5 font-medium tracking-wide">
          🚚 Free delivery on orders above{" "}
          <strong className="text-amber-300">₹499</strong>
        </span>
        <span className="font-medium">📞 +91 98765 43210</span>
        <div className="flex items-center gap-3 font-medium">
          <a
            href="https://hammargift.com/login"
            className="hover:text-amber-300 transition-colors"
          >
            Login
          </a>
          <span className="opacity-40">|</span>
          <a
            href="https://hammargift.com/signup"
            className="hover:text-amber-300 transition-colors"
          >
            Sign Up
          </a>
        </div>
      </div>

      {/* Main header */}
      <div className="flex items-center gap-3 md:gap-4 px-4 md:px-8 py-2.5 max-w-[1600px] mx-auto">
        {/* Logo — pill brand mark */}
        <a
          href="https://hammargift.com"
          className="flex items-center gap-2.5 flex-shrink-0 group"
        >
          <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-rose-600 flex items-center justify-center shadow-sm group-hover:bg-rose-700 transition-colors flex-shrink-0">
            <span className="text-xl leading-none select-none">🎁</span>
          </div>
          <div className="hidden sm:flex flex-col leading-none">
            <span className="font-display font-extrabold text-rose-600 text-xl tracking-tight">
              HammarGift
            </span>
            <span className="text-[9px] text-gray-400 tracking-widest uppercase font-medium">
              Gifts for Every Heart
            </span>
          </div>
        </a>

        {/* Search bar — elevated, prominent */}
        <form
          onSubmit={handleSearchSubmit}
          className="flex-1 flex items-stretch max-w-2xl mx-auto min-w-0"
        >
          <div className="flex-1 flex items-stretch border-2 border-rose-500 rounded-xl overflow-hidden shadow-sm hover:shadow-md focus-within:shadow-md focus-within:border-rose-600 transition-all duration-200">
            <select
              className="hidden md:block border-r border-rose-200 bg-rose-50 text-gray-700 text-sm px-2.5 py-0 outline-none cursor-pointer font-medium shrink-0"
              defaultValue="All Categories"
            >
              {SEARCH_CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <input
              data-ocid="header.search_input"
              type="text"
              placeholder="Search gifts, occasions, categories..."
              value={localSearch}
              onChange={handleSearchChange}
              className="flex-1 px-3 py-2.5 text-sm outline-none bg-white min-w-0 placeholder:text-gray-400"
            />
            <button
              type="submit"
              className="bg-rose-600 hover:bg-rose-700 active:bg-rose-800 text-white px-4 md:px-5 flex items-center gap-2 text-sm font-bold transition-colors"
            >
              <Search size={17} />
              <span className="hidden lg:inline tracking-wide">SEARCH</span>
            </button>
          </div>
        </form>

        {/* Right action icons — tighter, more vertical */}
        <div className="flex items-center gap-0.5 md:gap-1 flex-shrink-0">
          {/* Separator */}
          <div className="hidden md:block w-px h-8 bg-gray-200 mx-1" />

          <button
            type="button"
            data-ocid="header.wishlist_button"
            className="relative flex flex-col items-center justify-center px-2 py-1.5 rounded-xl hover:bg-rose-50 transition-colors group min-w-[44px]"
            aria-label="Wishlist"
          >
            <div className="relative">
              <Heart
                size={22}
                className="text-gray-500 group-hover:text-rose-600 transition-colors"
              />
              {wishlistCountVal > 0 && (
                <span className="absolute -top-2 -right-2 bg-rose-600 text-white text-[9px] font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-0.5 leading-none shadow-sm">
                  {wishlistCountVal > 9 ? "9+" : wishlistCountVal}
                </span>
              )}
            </div>
            <span className="text-[9px] text-gray-400 font-medium mt-0.5 hidden md:block tracking-wide">
              WISHLIST
            </span>
          </button>

          <button
            type="button"
            data-ocid="header.cart_button"
            onClick={() => setCartOpen(true)}
            className="relative flex flex-col items-center justify-center px-2 py-1.5 rounded-xl hover:bg-rose-50 transition-colors group min-w-[44px]"
            aria-label="Cart"
          >
            <div className="relative">
              <ShoppingBag
                size={22}
                className="text-gray-500 group-hover:text-rose-600 transition-colors"
              />
              {cartCountVal > 0 && (
                <span className="absolute -top-2 -right-2 bg-rose-600 text-white text-[9px] font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-0.5 leading-none shadow-sm">
                  {cartCountVal > 9 ? "9+" : cartCountVal}
                </span>
              )}
            </div>
            <span className="text-[9px] text-gray-400 font-medium mt-0.5 hidden md:block tracking-wide">
              CART
            </span>
          </button>

          <button
            type="button"
            className="flex flex-col items-center justify-center px-2 py-1.5 rounded-xl hover:bg-rose-50 transition-colors group min-w-[44px]"
          >
            <User
              size={22}
              className="text-gray-500 group-hover:text-rose-600 transition-colors"
            />
            <span className="text-[9px] text-gray-400 font-medium mt-0.5 hidden md:block tracking-wide">
              ACCOUNT
            </span>
          </button>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl hover:bg-rose-50 transition-colors ml-1"
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <X size={22} className="text-gray-600" />
            ) : (
              <Menu size={22} className="text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Navigation bar */}
      <nav className="border-t border-gray-100 bg-white">
        <div className="flex items-center gap-0 px-2 md:px-8 overflow-x-auto scrollbar-hide max-w-[1600px] mx-auto">
          {NAV_CATEGORIES.map((cat, i) => (
            <button
              type="button"
              key={cat}
              data-ocid={`header.nav.tab.${i + 1}`}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-3 md:px-4 py-2.5 text-[13px] font-semibold transition-all duration-200 border-b-2 whitespace-nowrap tracking-wide ${
                activeCategory === cat
                  ? "border-rose-600 text-rose-600"
                  : "border-transparent text-gray-500 hover:text-rose-600 hover:border-rose-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile menu panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-rose-50 border-t border-rose-100 px-4 py-3 text-sm text-rose-700">
          <p className="mb-1 font-medium">
            🚚 Free delivery on orders above ₹499
          </p>
          <p className="mb-2 text-gray-600">📞 +91 98765 43210</p>
          <div className="flex gap-4">
            <a
              href="https://hammargift.com/login"
              className="font-semibold hover:text-rose-800"
            >
              Login
            </a>
            <a
              href="https://hammargift.com/signup"
              className="font-semibold hover:text-rose-800"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
