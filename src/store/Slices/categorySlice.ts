import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface Subchild {
  id: number;
  name: string;
  slug: string;
  image: string;
}

interface Subcategory {
  id: number;
  name: string;
  slug: string;
  image: string;
  subchilds: Subchild[];
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
  subcategories: Subcategory[];
}

interface CategoryState {
  categories: Category[];
  loading: boolean;
  error: string | null;
}

const initialState: CategoryState = {
  categories: [],
  loading: false,
  error: null,
};

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/categories`
      );
      return response.data.data as Category[];
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(
          error.response.data?.message || "Failed to fetch categories"
        );
      }
      return rejectWithValue("Failed to fetch categories");
    }
  }
);

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchCategories.fulfilled,
        (state, action: PayloadAction<Category[]>) => {
          state.loading = false;
          state.categories = action.payload;
        }
      )
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default categorySlice.reducer;
export const selectCategories = (state: { categories: CategoryState }) =>
  state.categories.categories;
export const selectCategoriesLoading = (state: { categories: CategoryState }) =>
  state.categories.loading;
export const selectCategoriesError = (state: { categories: CategoryState }) =>
  state.categories.error;
