import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { toast } from "sonner";
import { useStore } from "../store/useStore";

export function CartDrawer() {
  const {
    isCartOpen,
    setCartOpen,
    cartItems,
    removeFromCart,
    updateQuantity,
    cartTotal,
    cartCount,
  } = useStore();

  const total = cartTotal();
  const count = cartCount();

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    toast.info("🛒 Checkout coming soon!", {
      description: "We're working on it. Stay tuned!",
    });
  };

  return (
    <>
      {/* Backdrop */}
      {isCartOpen && (
        <button
          type="button"
          className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm cursor-default"
          onClick={() => setCartOpen(false)}
          aria-label="Close cart"
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-50 flex flex-col shadow-2xl transition-transform duration-300 ease-in-out ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} className="text-rose-600" />
            <h2 className="font-display font-bold text-lg text-gray-800">
              Your Cart 🛒
            </h2>
            {count > 0 && (
              <span className="bg-rose-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {count > 9 ? "9+" : count}
              </span>
            )}
          </div>
          <button
            type="button"
            data-ocid="cart.close_button"
            onClick={() => setCartOpen(false)}
            className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
            aria-label="Close cart"
          >
            <X size={18} />
          </button>
        </div>

        {/* Cart items */}
        {cartItems.length === 0 ? (
          <div
            data-ocid="cart.empty_state"
            className="flex-1 flex flex-col items-center justify-center gap-4 text-gray-400 px-6"
          >
            <div className="text-7xl">🛒</div>
            <div className="text-center">
              <p className="font-semibold text-gray-600 text-lg">
                Your cart is empty
              </p>
              <p className="text-sm mt-1 text-gray-400">
                Add some gifts to get started!
              </p>
            </div>
            <button
              type="button"
              onClick={() => setCartOpen(false)}
              className="mt-2 bg-rose-600 hover:bg-rose-700 text-white font-semibold px-6 py-2.5 rounded-xl transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-2">
              {cartItems.map((item, idx) => (
                <div
                  key={item.product.id}
                  data-ocid={`cart.item.${idx + 1}`}
                  className="flex items-start gap-3 px-5 py-4 border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                >
                  {/* Emoji image */}
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.product.gradient} flex items-center justify-center flex-shrink-0`}
                  >
                    <span className="text-2xl">{item.product.emoji}</span>
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-800 text-sm line-clamp-1">
                      {item.product.name}
                    </p>
                    <p className="text-rose-600 font-bold text-sm mt-0.5">
                      ₹{item.product.price.toLocaleString("en-IN")}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
                        className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-rose-100 flex items-center justify-center transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={13} />
                      </button>
                      <span className="w-7 text-center font-semibold text-sm">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                        className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-rose-100 flex items-center justify-center transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={13} />
                      </button>
                    </div>
                  </div>

                  {/* Total + Remove */}
                  <div className="flex flex-col items-end gap-2 flex-shrink-0">
                    <p className="font-bold text-gray-800 text-sm">
                      ₹
                      {(item.product.price * item.quantity).toLocaleString(
                        "en-IN",
                      )}
                    </p>
                    <button
                      type="button"
                      data-ocid={`cart.remove_button.${idx + 1}`}
                      onClick={() => removeFromCart(item.product.id)}
                      className="w-7 h-7 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-500 flex items-center justify-center transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-gray-100 px-5 py-4 bg-gray-50/80">
              <div className="flex items-center justify-between mb-1">
                <span className="text-gray-500 text-sm">
                  Subtotal ({count} items)
                </span>
                <span className="font-bold text-gray-800 text-base">
                  ₹{total.toLocaleString("en-IN")}
                </span>
              </div>
              {total < 499 && (
                <p className="text-xs text-amber-600 mb-3">
                  Add ₹{(499 - total).toLocaleString("en-IN")} more for free
                  delivery 🚚
                </p>
              )}
              {total >= 499 && (
                <p className="text-xs text-emerald-600 mb-3">
                  🎉 You qualify for free delivery!
                </p>
              )}
              <button
                type="button"
                data-ocid="cart.checkout_button"
                onClick={handleCheckout}
                disabled={cartItems.length === 0}
                className="w-full bg-rose-600 hover:bg-rose-700 disabled:bg-gray-300 text-white font-bold py-3 rounded-xl transition-colors duration-200"
              >
                Proceed to Checkout →
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
