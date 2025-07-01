import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartProduct {
  productId: number;
  variationId?: number;
  name: string;
  thumbnail: string;
  price: number;
  quantity: number;
  attributes: Record<string, string>;
}

interface CartState {
  items: CartProduct[];
}

// Load cart from localStorage
const fetchCartItems = (): CartProduct[] => {
  try {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const saveCart = (items: CartProduct[]) => {
  localStorage.setItem("cart", JSON.stringify(items));
};

const initialState: CartState = {
  items: fetchCartItems(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartProduct>) => {
      const { productId, variationId, attributes } = action.payload;
      const existingIndex = state.items.findIndex(
        (item) =>
          item.productId === productId &&
          item.variationId === variationId &&
          JSON.stringify(item.attributes) === JSON.stringify(attributes)
      );
      if (existingIndex !== -1) {
        state.items[existingIndex].quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      saveCart(state.items);
    },
    removeFromCart: (
      state,
      action: PayloadAction<{
        productId: number;
        variationId?: number;
        attributes: Record<string, string>;
      }>
    ) => {
      state.items = state.items.filter(
        (item) =>
          !(
            item.productId === action.payload.productId &&
            item.variationId === action.payload.variationId &&
            JSON.stringify(item.attributes) ===
              JSON.stringify(action.payload.attributes)
          )
      );
      saveCart(state.items);
    },
    updateCartQuantity: (
      state,
      action: PayloadAction<{
        productId: number;
        variationId?: number;
        attributes: Record<string, string>;
        quantity: number;
      }>
    ) => {
      const { productId, variationId, attributes, quantity } = action.payload;
      const existing = state.items.find(
        (item) =>
          item.productId === productId &&
          item.variationId === variationId &&
          JSON.stringify(item.attributes) === JSON.stringify(attributes)
      );
      if (existing) {
        existing.quantity = quantity;
      }
      saveCart(state.items);
    },
    clearCart: (state) => {
      state.items = [];
      saveCart(state.items);
    },
    loadCartFromStorage: (state) => {
      state.items = fetchCartItems();
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateCartQuantity,
  clearCart,
  loadCartFromStorage,
} = cartSlice.actions;
export const selectCartItems = (state: { cart: CartState }) => state.cart.items;
export default cartSlice.reducer;
