import { toast } from "sonner";
import { products } from "../data/products";
import { useStore } from "../store/useStore";
import { ProductCard } from "./ProductCard";

export function AnniversaryPartySection() {
  const { addToCart, toggleWishlist, wishlistIds, setQuickViewProduct } =
    useStore();

  const anniversaryProducts = products
    .filter((p) => p.category === "anniversary")
    .slice(0, 6);
  const partyProducts = products
    .filter((p) => p.category === "party-decor")
    .slice(0, 6);

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
    <section className="py-10 md:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Anniversary Gifts */}
          <div>
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="font-display font-extrabold text-xl md:text-2xl text-gray-800">
                  💍 Anniversary Gifts
                </h2>
                <p className="text-gray-500 text-sm mt-0.5">
                  Celebrate love with timeless surprises
                </p>
              </div>
              <span className="text-rose-600 text-sm font-medium hover:underline cursor-pointer">
                View All →
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {anniversaryProducts.map((product, idx) => (
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
          </div>

          {/* Party Decoration */}
          <div>
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="font-display font-extrabold text-xl md:text-2xl text-gray-800">
                  🎉 Party Decoration
                </h2>
                <p className="text-gray-500 text-sm mt-0.5">
                  Transform every space into a celebration
                </p>
              </div>
              <span className="text-rose-600 text-sm font-medium hover:underline cursor-pointer">
                View All →
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {partyProducts.map((product, idx) => (
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
          </div>
        </div>
      </div>
    </section>
  );
}
