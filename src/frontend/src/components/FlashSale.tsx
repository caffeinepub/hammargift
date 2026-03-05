import { Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { products } from "../data/products";
import { useStore } from "../store/useStore";
import { ProductCard } from "./ProductCard";

function useCountdown(durationMs: number) {
  const endTimeRef = useRef<number>(Date.now() + durationMs);
  const [remaining, setRemaining] = useState<number>(durationMs);

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, endTimeRef.current - Date.now());
      setRemaining(diff);
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const hours = Math.floor(remaining / (1000 * 60 * 60));
  const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

  return {
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
    isExpired: remaining === 0,
  };
}

export function FlashSale() {
  const { hours, minutes, seconds, isExpired } = useCountdown(
    2 * 60 * 60 * 1000,
  );
  const { addToCart, toggleWishlist, wishlistIds, setQuickViewProduct } =
    useStore();
  const flashProducts = products.filter((p) => p.isFlashSale);

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
    <section className="py-10 md:py-14 bg-gradient-to-r from-rose-50 via-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="flex items-center gap-2">
            <Zap size={22} className="text-rose-600 fill-rose-600" />
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-rose-600">
              Flash Sale
            </h2>
          </div>

          {!isExpired ? (
            <div className="flex items-center gap-2 bg-gray-900 text-white px-4 py-1.5 rounded-full text-sm">
              <span className="text-gray-300">Ends in:</span>
              <div className="flex items-center gap-1 font-mono font-bold">
                <span className="bg-rose-600 px-2 py-0.5 rounded text-white">
                  {hours}
                </span>
                <span className="text-rose-400">:</span>
                <span className="bg-rose-600 px-2 py-0.5 rounded text-white">
                  {minutes}
                </span>
                <span className="text-rose-400">:</span>
                <span className="bg-rose-600 px-2 py-0.5 rounded text-white">
                  {seconds}
                </span>
              </div>
            </div>
          ) : (
            <span className="text-gray-500 text-sm bg-gray-100 px-3 py-1.5 rounded-full">
              Sale ended
            </span>
          )}

          <div className="ml-auto">
            <span className="text-rose-600 text-sm font-medium hover:underline cursor-pointer">
              View All →
            </span>
          </div>
        </div>

        {/* Flash products horizontal scroll */}
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 -mx-1 px-1">
          {flashProducts.map((product, idx) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-[200px] md:w-[220px]"
            >
              <ProductCard
                product={product}
                index={idx + 1}
                onAddToCart={handleAddToCart}
                onToggleWishlist={handleToggleWishlist}
                isWishlisted={wishlistIds.has(product.id)}
                onQuickView={setQuickViewProduct}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
