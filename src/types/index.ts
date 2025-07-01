// Define a type for your user (example)
export interface ProductBadge {
  id: number;
  name: string;
  type: number;
  type_label: string;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  regular_price: string;
  discount_price: string;
  is_variant: boolean;
  thumbnail: string;
  rating_avg: number;
  rating_count: number;
  available_stock: number;
  badges: ProductBadge[];
  badgeProductVariationsExclude: unknown[];
}

export interface ProductApiResponse {
  data: Product[];
  total: number;
  last_page: number;
  current_page: number;
  next_page_url: string | null;
}
