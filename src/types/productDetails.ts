export interface AttributeOption {
  id: number;
  merchant_id: number;
  attribute_id: number;
  attribute_value: string;
  slug: string;
  status: string;
  added_by: number;
  created_at: string;
  updated_at: string;
}

export interface Attribute {
  id: number;
  name: string;
  merchant_id: number;
  slug: string;
  status: string;
  added_by: number;
  created_at: string | null;
  updated_at: string | null;
}

export interface VariationAttribute {
  id: number;
  attribute_option_id: number;
  product_variation_id: number;
  product_id: number;
  attribute_id: number;
  created_at: string;
  updated_at: string;
  attribute: Attribute;
  attribute_option: AttributeOption;
}

export interface ProductVariation {
  id: number;
  product_id: number;
  sku: string;
  barcode: string;
  purchase_price: string;
  regular_price: string;
  discount_price: string;
  e_price: string;
  e_discount_price: string;
  wholesale_price: string;
  minimum_qty: number;
  total_stock_qty: number;
  status: number;
  id_delivery_fee: string;
  od_delivery_fee: string;
  ed_delivery_fee: string;
  created_at: string;
  updated_at: string;
  image: string;
  variation_attributes: VariationAttribute[];
}

export interface ProductDetail {
  id: number;
  product_id: number;
  regular_price: string;
  discount_price: string;
}

export interface Brand {
  id: number;
  merchant_id: number | null;
  name: string;
  slug: string;
  status: string;
  created_at: string;
  updated_at: string;
  image: string;
  media: unknown[];
}

export interface Merchant {
  id: number;
  shop_name: string;
}

export interface ShopProduct {
  id: number;
  merchant_id: number;
  product_id: number;
  active_status: number;
  status: string;
  product_type: number;
  regular_price: string | null;
  e_price: string;
  e_discount_price: string;
  packly_commission: string;
  id_delivery_fee: string;
  od_delivery_fee: string;
  ed_delivery_fee: string;
  created_at: string;
  updated_at: string;
  status_label: string;
  status_color: string;
}

export interface productDetails {
  id: number;
  name: string;
  category_id: number;
  sku: string;
  barcode: string;
  product_type_id: number;
  sub_category_id: number | null;
  sub_category_child_id: number | null;
  brand_id: number;
  slug: string;
  description: string;
  merchant_id: number;
  total_stock_qty: number;
  image: Record<string, { url: string }>;
  is_variant: boolean;
  thumbnail: string;
  rating_avg: number;
  rating_count: number;
  product_detail: ProductDetail;
  variations: ProductVariation[];
  merchant: Merchant;
  brand: Brand;
  shop_product: ShopProduct;
}

export interface singleProductDetails {
  message: string;
  data: productDetails;
}
