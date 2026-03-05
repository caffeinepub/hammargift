import { toast } from "sonner";
import { products } from "../data/products";
import { useStore } from "../store/useStore";
import { ProductCard } from "./ProductCard";

const AGE_TABS = [
  { label: "All", value: "All" },
  { label: "0-5 yrs", value: "0-5" },
  { label: "6-12 yrs", value: "6-12" },
  { label: "Teens", value: "teens" },
  { label: "Adults", value: "adults" },
  { label: "Seniors", value: "seniors" },
];

export function BirthdaySection() {
  const {
    addToCart,
    toggleWishlist,
    wishlistIds,
    setQuickViewProduct,
    activeBirthdayAge,
    setActiveBirthdayAge,
  } = useStore();

  const birthdayProducts = products.filter((p) => p.category === "birthday");

  const filtered =
    activeBirthdayAge === "All"
      ? birthdayProducts
      : birthdayProducts.filter(
          (p) => p.ageGroup === activeBirthdayAge || p.ageGroup === "all",
        );

  const handleAddToCart = (product: (typeof products)[0]) => {
    addToCart(product);
    toast.success("🛒 Added to cart!");
  };

  const handleToggleWishlist = (id: number) => {
    const wasWishlisted = wishlistIds.has(id);
    toggleWishlist(id);
    toast.success(
      wasWishlisted ? "💔 Removed from wishlist" : "❤️ Added to wishlist!",
    );
  };

  return (
    <section className="py-10 md:py-14 bg-gradient-to-b from-rose-50/60 to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-6">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-gray-800">
            🎂 Birthday Gifts for All Ages
          </h2>
          <p className="text-gray-500 mt-1 text-sm md:text-base">
            Find the perfect birthday surprise for everyone on your list
          </p>
        </div>

        {/* Age filter tabs */}
        <div className="flex gap-2 flex-wrap justify-center mb-7">
          {AGE_TABS.map((tab, i) => (
            <button
              type="button"
              key={tab.value}
              data-ocid={`birthday.age_filter.tab.${i + 1}`}
              onClick={() => setActiveBirthdayAge(tab.value)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeBirthdayAge === tab.value
                  ? "bg-rose-600 text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-rose-300 hover:text-rose-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-12 text-gray-400">
            <div className="text-5xl mb-3">🎂</div>
            <p className="font-medium text-gray-500">
              No birthday gifts for this age group yet
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
            {filtered.map((product, idx) => (
              <ProductCard
                key={product.id}
                product={product}
                index={idx + 1}
                onAddToCart={handleAddToCart}
                onToggleWishlist={handleToggleWishlist}
                isWishlisted={wishlistIds.has(product.id)}
                onQuickView={setQuickViewProduct}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
