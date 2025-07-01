import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
// import type { productDetails, ApiResponse } from "../types/product-api";
import type {
  productDetails,
  singleProductDetails,
} from "@/types/productDetails";
import axios from "axios";
// import { productDetails } from './../../types/productDetails';

interface SelectedAttributes {
  [attributeName: string]: string;
}

interface ProductState {
  selectedImageIndex: number;
  selectedAttributes: SelectedAttributes;
  selectedVariation: productDetails["variations"][number] | null;
  quantity: number;
  singleProduct: productDetails | null;
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  selectedImageIndex: 0,
  selectedAttributes: {},
  selectedVariation: null,
  quantity: 1,
  singleProduct: null,
  loading: false,
  error: null,
};

// AsyncThunk for fetching product data
export const fetchSingleProduct = createAsyncThunk(
  "product/fetchProduct",
  async (slug: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://157.230.240.97:9999/api/v1/product/${slug}`
      );

      const data: singleProductDetails = response.data;
      return data.data;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : "Failed to fetch product"
      );
    }
  }
);

// Helper functions
const findMatchingVariation = (
  variations: productDetails["variations"],
  selectedAttributes: SelectedAttributes
) => {
  return (
    variations.find((variation) => {
      return variation.variation_attributes.every(
        (attr: {
          attribute: { name: string };
          attribute_option: { attribute_value: string };
        }) => {
          const attributeName = attr.attribute.name;
          const attributeValue = attr.attribute_option.attribute_value;
          return selectedAttributes[attributeName] === attributeValue;
        }
      );
    }) || null
  );
};

const getAllImages = (product: productDetails): string[] => {
  const images: string[] = [];

  // Add main product images
  Object.values(product.image).forEach((img) => {
    images.push(img.url);
  });

  // Add variation images
  product.variations.forEach((variation) => {
    if (variation.image && !images.includes(variation.image)) {
      images.push(variation.image);
    }
  });

  return images;
};

const singleProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSelectedImage: (state, action: PayloadAction<number>) => {
      state.selectedImageIndex = action.payload;
    },

    setSelectedAttribute: (
      state,
      action: PayloadAction<{ attributeName: string; value: string }>
    ) => {
      const { attributeName, value } = action.payload;
      state.selectedAttributes[attributeName] = value;

      // Find matching variation
      if (state.singleProduct) {
        const matchingVariation = findMatchingVariation(
          state.singleProduct.variations,
          state.selectedAttributes
        );
        state.selectedVariation = matchingVariation;

        // Update selected image to show variation image if available
        if (matchingVariation?.image) {
          const allImages = getAllImages(state.singleProduct);
          const imageIndex = allImages.findIndex(
            (img) => img === matchingVariation.image
          );
          if (imageIndex !== -1) {
            state.selectedImageIndex = imageIndex;
          }
        }
      }
    },

    setQuantity: (state, action: PayloadAction<number>) => {
      if (action.payload > 0) {
        state.quantity = action.payload;
      }
    },

    incrementQuantity: (state) => {
      const maxStock = state.selectedVariation?.total_stock_qty || 0;
      if (state.quantity < maxStock) {
        state.quantity += 1;
      }
    },

    decrementQuantity: (state) => {
      if (state.quantity > 1) {
        state.quantity -= 1;
      }
    },

    resetProduct: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.singleProduct = action.payload;

        // Initialize with first variation if available
        if (action.payload.variations.length > 0) {
          const firstVariation = action.payload.variations[0];
          state.selectedVariation = firstVariation;

          // Set initial selected attributes based on first variation
          const initialAttributes: SelectedAttributes = {};
          firstVariation.variation_attributes.forEach(
            (attr: {
              attribute: { name: string };
              attribute_option: { attribute_value: string };
            }) => {
              initialAttributes[attr.attribute.name] =
                attr.attribute_option.attribute_value;
            }
          );
          state.selectedAttributes = initialAttributes;
        } else {
          // no variations, use product_detail as fallback
          state.selectedVariation = {
            id: action.payload.product_detail.id,
            product_id: action.payload.id,
            sku: "",
            barcode: "",
            purchase_price: "",
            regular_price: action.payload.product_detail.regular_price,
            discount_price: action.payload.product_detail.discount_price,
            e_price: "",
            e_discount_price: "",
            wholesale_price: "",
            minimum_qty: 0,
            total_stock_qty: action.payload.total_stock_qty,
            status: 1,
            id_delivery_fee: action.payload.shop_product.id_delivery_fee,
            od_delivery_fee: action.payload.shop_product.od_delivery_fee,
            ed_delivery_fee: action.payload.shop_product.ed_delivery_fee,
            created_at: "",
            updated_at: "",
            image: action.payload.thumbnail || "",
            variation_attributes: [],
          };
        }
      })
      .addCase(fetchSingleProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.singleProduct = null;
      });
  },
});

export const {
  setSelectedImage,
  setSelectedAttribute,
  setQuantity,
  incrementQuantity,
  decrementQuantity,
  resetProduct,
} = singleProductSlice.actions;

// Selectors
export const selectAllImages = (state: { singleProduct: ProductState }) => {
  if (!state.singleProduct.singleProduct) return [];
  return getAllImages(state.singleProduct.singleProduct);
};

export const selectUniqueAttributes = (state: {
  singleProduct: ProductState;
}) => {
  if (!state.singleProduct.singleProduct) return {};

  const attributeMap: Record<string, Set<string>> = {};

  state.singleProduct.singleProduct.variations.forEach((variation) => {
    variation.variation_attributes.forEach(
      (attr: {
        attribute: { name: string };
        attribute_option: { attribute_value: string };
      }) => {
        const attributeName = attr.attribute.name;
        const attributeValue = attr.attribute_option.attribute_value;

        if (!attributeMap[attributeName]) {
          attributeMap[attributeName] = new Set();
        }
        attributeMap[attributeName].add(attributeValue);
      }
    );
  });

  const result: Record<string, string[]> = {};
  Object.keys(attributeMap).forEach((key) => {
    result[key] = Array.from(attributeMap[key]);
  });

  return result;
};

export const selectCurrentPrice = (state: { singleProduct: ProductState }) => {
  const variation = state.singleProduct.selectedVariation;
  if (!variation) return { current: 0, original: 0 };

  return {
    current: Number.parseFloat(
      variation.discount_price || variation.regular_price
    ),
    original: Number.parseFloat(variation.regular_price),
  };
};

export const selectAvailableStock = (state: {
  singleProduct: ProductState;
}) => {
  return state.singleProduct.selectedVariation?.total_stock_qty || 0;
};

export default singleProductSlice.reducer;
