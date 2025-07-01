import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Slices/productSlice";
import singleProductReducer from "./Slices/singleProductSlice";
export const store = configureStore({
  reducer: {
    products: productReducer,
    singleProduct: singleProductReducer,
  },
});

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
