import { Eye, Heart, ShoppingBag, Star } from "lucide-react";
import type { Product } from "../data/products";

interface ProductCardProps {
  product: Product;
  index: number;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (id: number) => void;
  isWishlisted: boolean;
  onQuickView: (product: Product) => void;
}

const badgeStyles: Record<string, string> = {
  "Best Seller": "bg-rose-600 text-white",
  New: "bg-amber-400 text-amber-950",
  Sale: "bg-emerald-500 text-white",
};

export function ProductCard({
  product,
  index,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
  onQuickView,
}: ProductCardProps) {
  return (
    <div
      data-ocid={`product.card.${index}`}
      className="group bg-white rounded-2xl overflow-hidden flex flex-col border border-gray-100 transition-all duration-300 hover:-translate-y-1.5"
      style={{
        boxShadow:
          "0 2px 8px -2px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.03)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 16px 40px -8px rgba(225,29,72,0.18), 0 4px 12px rgba(0,0,0,0.06)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 2px 8px -2px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.03)";
      }}
    >
      {/* Image area */}
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: "1 / 1" }}
      >
        {/* Gradient bg */}
        <div
          className={`w-full h-full bg-gradient-to-br ${product.gradient} flex items-center justify-center`}
        >
          {/* Radial highlight for depth */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 35% 30%, rgba(255,255,255,0.28) 0%, transparent 65%)",
            }}
          />
          {/* Bottom shadow vignette */}
          <div
            className="absolute inset-x-0 bottom-0 h-14 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.12) 0%, transparent 100%)",
            }}
          />
          <span className="relative z-10 text-6xl select-none drop-shadow-lg transition-transform duration-300 group-hover:scale-115">
            {product.emoji}
          </span>
        </div>

        {/* Badge */}
        {product.badge && (
          <div
            className={`absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wide shadow-sm ${badgeStyles[product.badge] ?? ""}`}
          >
            {product.badge}
          </div>
        )}

        {/* Flash sale badge */}
        {product.isFlashSale && !product.badge && (
          <div className="absolute top-2 left-2 bg-rose-600 text-white px-1.5 py-0.5 rounded-full text-[10px] font-bold shadow-sm">
            ⚡ SALE
          </div>
        )}

        {/* Wishlist */}
        <button
          type="button"
          data-ocid={`product.wishlist_toggle.${index}`}
          onClick={() => onToggleWishlist(product.id)}
          className={`absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center shadow-md transition-all duration-200 ${
            isWishlisted
              ? "bg-rose-600 text-white scale-110"
              : "bg-white/90 text-gray-400 hover:text-rose-500 hover:bg-white hover:scale-110"
          }`}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart size={15} className={isWishlisted ? "fill-current" : ""} />
        </button>

        {/* Quick View overlay */}
        <button
          type="button"
          onClick={() => onQuickView(product)}
          className="absolute inset-x-0 bottom-0 bg-black/65 backdrop-blur-[1px] text-white text-[11px] font-semibold py-2.5 flex items-center justify-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-200 tracking-wider"
        >
          <Eye size={13} />
          QUICK VIEW
        </button>
      </div>

      {/* Content */}
      <div className="p-3 flex flex-col gap-1.5 flex-1">
        <h3 className="font-display font-semibold text-[13px] text-gray-800 line-clamp-2 leading-snug">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 text-xs">
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={10}
                className={
                  star <= Math.floor(product.rating)
                    ? "fill-amber-400 text-amber-400"
                    : star - 0.5 <= product.rating
                      ? "fill-amber-300 text-amber-300"
                      : "fill-gray-200 text-gray-200"
                }
              />
            ))}
          </div>
          <span className="text-amber-600 font-semibold text-[11px]">
            {product.rating}
          </span>
          <span className="text-gray-400 text-[11px]">
            ({product.reviewCount})
          </span>
        </div>

        {/* Price row */}
        <div className="flex items-baseline gap-1.5 flex-wrap mt-0.5">
          <span className="font-extrabold text-rose-600 text-[15px] font-display">
            ₹{product.price.toLocaleString("en-IN")}
          </span>
          <span className="text-gray-400 line-through text-[11px]">
            ₹{product.originalPrice.toLocaleString("en-IN")}
          </span>
          <span className="text-emerald-600 text-[10px] font-bold bg-emerald-50 px-1.5 py-0.5 rounded-md">
            {product.discount}% OFF
          </span>
        </div>

        {/* Add to Cart — amber accent on hover for contrast */}
        <button
          type="button"
          data-ocid={`product.add_to_cart_button.${index}`}
          onClick={() => onAddToCart(product)}
          className="mt-1.5 w-full bg-rose-600 hover:bg-amber-500 active:bg-amber-600 text-white text-[12px] font-bold py-2 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-all duration-200 tracking-wide shadow-sm hover:shadow-md"
        >
          <ShoppingBag size={13} />
          ADD TO CART
        </button>
      </div>
    </div>
  );
}
