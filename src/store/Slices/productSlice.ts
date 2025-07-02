import { Product, ProductApiResponse } from "@/types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch products with pagination
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (
    url: string | undefined = `${import.meta.env.VITE_BASE_URL}/shop/products`,
    thunkAPI
  ) => {
    try {
      const response = await axios.get(url);

      const data = response.data.data.map((product: Product) => ({
        ...product,
        thumbnail: product.thumbnail.startsWith("http")
          ? product.thumbnail
          : `${import.meta.env.VITE_BASE_URL}${product.thumbnail}`,
      }));

      return {
        ...response.data,
        data,
      } as ProductApiResponse;
    } catch (error) {
      let errorMessage = "Failed to fetch products";
      if (axios.isAxiosError(error) && error.response?.data?.message) {
        errorMessage = error.response.data.message;
      }
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

// Initial state
const initialState: {
  products: Product[];
  loading: boolean;
  error: string | null;
  nextPageUrl: string | null;
} = {
  products: [],
  loading: false,
  error: null,
  nextPageUrl: null,
};

// Slice
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        // If this is the first page, replace; if next page, append
        if (
          action.meta.arg &&
          action.meta.arg !== `${import.meta.env.BASE_URL}/shop/products`
        ) {
          state.products = [...state.products, ...action.payload.data];
        } else {
          state.products = action.payload.data;
        }
        state.nextPageUrl = action.payload.next_page_url;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string | null;
      });
  },
});

export default productSlice.reducer;
