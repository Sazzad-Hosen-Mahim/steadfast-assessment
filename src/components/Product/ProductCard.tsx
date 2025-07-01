import { Product } from "@/types";
import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const handleCart = () => {
    toast("Product added to cart successfully!");
  };
  return (
    <div className="bg-white border lg:flex lg:flex-col justify-between gap-10 border-gray-100 rounded-lg p-3 shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div>
        <img
          src={product.thumbnail}
          alt={product.name}
          className="w-full h-64 object-contain rounded-md mb-2"
        />
        <h3 className="text-sm font-medium text-gray-900 truncate">
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-base font-semibold text-red-600">
            ৳{product.discount_price}
          </span>
          {product.discount_price !== product.regular_price && (
            <span className="text-xs text-gray-400 line-through">
              ৳{product.regular_price}
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2 px-2">
        <Button
          className="bg-red-500 text-white w-1/2 hover:bg-red-700"
          onClick={handleCart}
        >
          + Add To Cart
        </Button>
        <Link className="w-1/2" to={`/product-details/${product.slug}`}>
          <Button className="w-full border-2 border-gray-500 hover:border-website-color-layout text-gray-600 hover:bg-website-color-layout hover:text-white">
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
