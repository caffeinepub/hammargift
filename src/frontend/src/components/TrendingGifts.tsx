import { toast } from "sonner";
import { products } from "../data/products";
import { useStore } from "../store/useStore";
import { ProductCard } from "./ProductCard";

const CATEGORY_MAP: Record<string, string> = {
  Birthday: "birthday",
  Anniversary: "anniversary",
  "Party Decor": "party-decor",
  Kids: "kids",
  Teens: "teens",
  Men: "men",
  Women: "women",
  Seniors: "seniors",
  Corporate: "corporate",
  Combos: "combos",
};

export function TrendingGifts() {
  const {
    addToCart,
    toggleWishlist,
    wishlistIds,
    setQuickViewProduct,
    searchQuery,
    activeCategory,
  } = useStore();

  const categoryKey = CATEGORY_MAP[activeCategory] ?? null;

  const filtered = products.filter((p) => {
    const matchesSearch =
      searchQuery.trim() === "" ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.includes(searchQuery.toLowerCase());
    const matchesCategory = !categoryKey || p.category === categoryKey;
    return matchesSearch && matchesCategory;
  });

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
    <section className="py-10 md:py-14 bg-white" id="trending">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-gray-800">
              🔥 Trending Gifts
            </h2>
            {(searchQuery || categoryKey) && (
              <p className="text-sm text-gray-500 mt-1">
                {filtered.length} result{filtered.length !== 1 ? "s" : ""}
                {searchQuery ? ` for "${searchQuery}"` : ""}
                {categoryKey ? ` in ${activeCategory}` : ""}
              </p>
            )}
          </div>
          {(searchQuery || (categoryKey && activeCategory !== "All Gifts")) && (
            <button
              type="button"
              onClick={() => {
                useStore.getState().setSearchQuery("");
                useStore.getState().setActiveCategory("All Gifts");
              }}
              className="text-rose-600 text-sm font-medium hover:underline"
            >
              Clear filters
            </button>
          )}
        </div>

        {filtered.length === 0 ? (
          <div
            data-ocid="trending.empty_state"
            className="text-center py-16 text-gray-400"
          >
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-lg font-medium text-gray-500">No gifts found</p>
            <p className="text-sm mt-1">
              Try a different search term or category
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
