import { configureStore } from "@reduxjs/toolkit";
import productReducer from "@/store/Slices/productSlice";
import singleProductReducer from "@/store/Slices/singleProductSlice";
import cartReducer from "@/store/Slices/cartSlice";
import categoryReducer from "@/store/Slices/categorySlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    products: productReducer,
    singleProduct: singleProductReducer,
    cart: cartReducer,
  },
});

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
