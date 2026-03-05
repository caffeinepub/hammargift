import { Heart, Minus, Plus, ShoppingBag, Star, X } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useStore } from "../store/useStore";

export function QuickViewModal() {
  const {
    quickViewProduct: product,
    setQuickViewProduct,
    addToCart,
    toggleWishlist,
    wishlistIds,
  } = useStore();

  const [qty, setQty] = useState(1);

  if (!product) return null;

  const isWishlisted = wishlistIds.has(product.id);

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) {
      addToCart(product);
    }
    toast.success(`🛒 ${product.name} (×${qty}) added to cart!`);
    setQuickViewProduct(null);
  };

  const handleToggleWishlist = () => {
    const wasWishlisted = wishlistIds.has(product.id);
    toggleWishlist(product.id);
    toast.success(
      wasWishlisted ? "💔 Removed from wishlist" : "❤️ Added to wishlist!",
    );
  };

  const badgeColor =
    product.badge === "Best Seller"
      ? "bg-rose-600 text-white"
      : product.badge === "New"
        ? "bg-amber-500 text-white"
        : product.badge === "Sale"
          ? "bg-emerald-600 text-white"
          : "";

  return (
    <>
      {/* Backdrop */}
      <button
        type="button"
        className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm cursor-default w-full"
        onClick={() => setQuickViewProduct(null)}
        aria-label="Close modal"
      />

      {/* Modal */}
      <div
        data-ocid="quickview.modal"
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        style={{ maxWidth: "min(calc(100vw - 2rem), 32rem)" }}
      >
        {/* Close button */}
        <button
          type="button"
          data-ocid="quickview.close_button"
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/80 hover:bg-white shadow flex items-center justify-center transition-colors"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {/* Image area */}
        <div
          className={`w-full h-56 bg-gradient-to-br ${product.gradient} flex items-center justify-center relative`}
        >
          <span className="text-8xl drop-shadow-lg">{product.emoji}</span>
          {product.badge && (
            <div
              className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold shadow ${badgeColor}`}
            >
              {product.badge}
            </div>
          )}
          {product.isFlashSale && (
            <div className="absolute top-3 right-12 bg-rose-600 text-white px-2 py-1 rounded-full text-xs font-bold shadow">
              ⚡ Flash Sale
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5 md:p-6">
          <h2 className="font-display font-bold text-xl text-gray-800 leading-tight mb-2">
            {product.name}
          </h2>

          {/* Rating */}
          <div className="flex items-center gap-1.5 mb-3">
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={15}
                  className={
                    star <= Math.floor(product.rating)
                      ? "fill-amber-400 text-amber-400"
                      : "fill-gray-200 text-gray-200"
                  }
                />
              ))}
            </div>
            <span className="text-amber-600 font-semibold text-sm">
              {product.rating}
            </span>
            <span className="text-gray-400 text-sm">
              ({product.reviewCount} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3 mb-4">
            <span className="font-bold text-2xl text-rose-600">
              ₹{product.price.toLocaleString("en-IN")}
            </span>
            <span className="text-gray-400 line-through text-sm">
              ₹{product.originalPrice.toLocaleString("en-IN")}
            </span>
            <span className="bg-emerald-100 text-emerald-700 text-sm font-bold px-2 py-0.5 rounded-lg">
              -{product.discount}% off
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed mb-5">
            {product.description}
          </p>

          {/* Quantity selector */}
          <div className="flex items-center gap-3 mb-5">
            <span className="text-sm font-medium text-gray-700">Quantity:</span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-rose-100 flex items-center justify-center transition-colors"
              >
                <Minus size={14} />
              </button>
              <span className="w-8 text-center font-bold">{qty}</span>
              <button
                type="button"
                onClick={() => setQty((q) => q + 1)}
                className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-rose-100 flex items-center justify-center transition-colors"
              >
                <Plus size={14} />
              </button>
            </div>
            <span className="text-gray-500 text-sm ml-auto">
              Total:{" "}
              <strong className="text-rose-600">
                ₹{(product.price * qty).toLocaleString("en-IN")}
              </strong>
            </span>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              type="button"
              data-ocid="quickview.add_to_cart_button"
              onClick={handleAddToCart}
              className="flex-1 bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors"
            >
              <ShoppingBag size={18} />
              Add to Cart
            </button>
            <button
              type="button"
              data-ocid="quickview.wishlist_button"
              onClick={handleToggleWishlist}
              className={`w-12 h-12 rounded-xl border-2 flex items-center justify-center transition-all ${
                isWishlisted
                  ? "border-rose-600 bg-rose-600 text-white"
                  : "border-gray-200 hover:border-rose-400 text-gray-400 hover:text-rose-500"
              }`}
              aria-label={
                isWishlisted ? "Remove from wishlist" : "Add to wishlist"
              }
            >
              <Heart size={20} className={isWishlisted ? "fill-current" : ""} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
