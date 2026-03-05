import { create } from "zustand";
import type { Product } from "../data/products";

interface CartItem {
  product: Product;
  quantity: number;
}

interface StoreState {
  // Cart
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, qty: number) => void;
  cartTotal: () => number;
  cartCount: () => number;

  // Wishlist
  wishlistIds: Set<number>;
  toggleWishlist: (id: number) => void;
  wishlistCount: () => number;

  // UI state
  isCartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  quickViewProduct: Product | null;
  setQuickViewProduct: (p: Product | null) => void;

  // Filters
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
  activeBirthdayAge: string;
  setActiveBirthdayAge: (age: string) => void;
}

export const useStore = create<StoreState>((set, get) => ({
  // Cart
  cartItems: [],

  addToCart: (product: Product) => {
    set((state) => {
      const existing = state.cartItems.find(
        (item) => item.product.id === product.id,
      );
      if (existing) {
        return {
          cartItems: state.cartItems.map((item) =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }
      return { cartItems: [...state.cartItems, { product, quantity: 1 }] };
    });
  },

  removeFromCart: (id: number) => {
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.product.id !== id),
    }));
  },

  updateQuantity: (id: number, qty: number) => {
    if (qty < 1) {
      get().removeFromCart(id);
      return;
    }
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.product.id === id ? { ...item, quantity: qty } : item,
      ),
    }));
  },

  cartTotal: () => {
    return get().cartItems.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0,
    );
  },

  cartCount: () => {
    return get().cartItems.reduce((sum, item) => sum + item.quantity, 0);
  },

  // Wishlist
  wishlistIds: new Set<number>(),

  toggleWishlist: (id: number) => {
    set((state) => {
      const next = new Set(state.wishlistIds);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return { wishlistIds: next };
    });
  },

  wishlistCount: () => {
    return get().wishlistIds.size;
  },

  // UI state
  isCartOpen: false,
  setCartOpen: (open: boolean) => set({ isCartOpen: open }),

  quickViewProduct: null,
  setQuickViewProduct: (p: Product | null) => set({ quickViewProduct: p }),

  // Filters
  searchQuery: "",
  setSearchQuery: (q: string) => set({ searchQuery: q }),

  activeCategory: "All Gifts",
  setActiveCategory: (cat: string) => set({ activeCategory: cat }),

  activeBirthdayAge: "All",
  setActiveBirthdayAge: (age: string) => set({ activeBirthdayAge: age }),
}));
