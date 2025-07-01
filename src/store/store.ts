import { configureStore } from "@reduxjs/toolkit";
import productReducer from "@/store/Slices/productSlice";
import singleProductReducer from "@/store/Slices/singleProductSlice";
import cartReducer from "@/store/Slices/cartSlice";
export const store = configureStore({
  reducer: {
    products: productReducer,
    singleProduct: singleProductReducer,
    cart: cartReducer,
  },
});

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
