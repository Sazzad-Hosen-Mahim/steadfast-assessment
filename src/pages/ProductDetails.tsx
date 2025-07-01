import { Star, Heart, Share2, Minus, Plus, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import {
  setSelectedImage,
  setSelectedAttribute,
  incrementQuantity,
  decrementQuantity,
  selectAllImages,
  selectUniqueAttributes,
  selectCurrentPrice,
  selectAvailableStock,
  fetchSingleProduct,
} from "@/store/Slices/singleProductSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import SellerCard from "@/components/SellerCard/SellerCard";
import { sampleSeller } from "@/lib/data/SellerCardData";
import DetailsCard from "@/components/DetailsCard/DetailsCard";
import CommonWrapper from "@/common/CommonWrapper";
import { addToCart } from "@/store/Slices/cartSlice";

export default function ProductDetailsContent() {
  const { slug } = useParams<{ slug: string }>();

  const dispatch = useAppDispatch();
  const {
    selectedImageIndex,
    selectedAttributes,
    selectedVariation,
    quantity,
    singleProduct: product,
    loading,
    error,
  } = useAppSelector((state) => state.singleProduct);

  const allImages = useAppSelector(selectAllImages);
  const uniqueAttributes = useAppSelector(selectUniqueAttributes);
  const currentPrice = useAppSelector(selectCurrentPrice);
  const availableStock = useAppSelector(selectAvailableStock);

  useEffect(() => {
    if (slug) {
      dispatch(fetchSingleProduct(slug));
    }
  }, [dispatch, slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">Loading...</div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-96 text-red-500">
        Error: {error}
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center h-96">
        No product data
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!product || !selectedVariation) return;
    dispatch(
      addToCart({
        productId: product.id,
        variationId: selectedVariation.id,
        name: product.name,
        thumbnail: product.thumbnail,
        price: currentPrice.current,
        quantity,
        attributes: selectedAttributes,
      })
    );

    toast.success("Product added to cart successfully!");
  };

  const getColorValue = (colorName: string): string => {
    const colorMap: Record<string, string> = {
      Blue: "#0000FF",
      Green: "#008000",
      Black: "#000000",
      Red: "#FF0000",
      White: "#FFFFFF",
      Gray: "#808080",
      Yellow: "#FFFF00",
    };
    return colorMap[colorName] || "#CCCCCC";
  };

  const calculateDiscount = () => {
    if (currentPrice.original > currentPrice.current) {
      return Math.round(
        ((currentPrice.original - currentPrice.current) /
          currentPrice.original) *
          100
      );
    }
    return 0;
  };

  return (
    <div className="mx-auto px-4">
      <CommonWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10 mt-5">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={allImages[selectedImageIndex] || product.thumbnail}
                alt={product?.name}
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {allImages?.map((image, index) => (
                <button
                  key={index}
                  onClick={() => dispatch(setSelectedImage(index))}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImageIndex === index
                      ? "border-blue-500"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Product view ${index + 1}`}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 mb-3">
                {product?.name}
              </h1>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  <span className="text-lg font-medium mr-1">
                    {product?.rating_avg || 0}
                  </span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product?.rating_avg || 0)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600 ml-2">
                    {product?.rating_count || 0}
                  </span>
                </div>
                <div className="flex gap-2 ml-auto">
                  <Button variant="ghost" size="sm">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl font-bold text-teal-600">
                  ৳{currentPrice?.current.toFixed(2)}
                </span>
                {currentPrice.original > currentPrice.current && (
                  <>
                    <span className="text-lg text-gray-500 line-through">
                      ৳{currentPrice?.original.toFixed(2)}
                    </span>
                    <Badge
                      variant="destructive"
                      className="bg-red-500 text-white"
                    >
                      -{calculateDiscount()}%
                    </Badge>
                  </>
                )}
              </div>

              {selectedVariation && (
                <div className="mb-4">
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-800"
                  >
                    Stock: {selectedVariation.total_stock_qty} available
                  </Badge>
                </div>
              )}
            </div>

            {/* Attributes */}
            {product?.is_variant &&
              Object.entries(uniqueAttributes).map(
                ([attributeName, values]) => (
                  <div key={attributeName}>
                    <h3 className="font-medium mb-3">
                      Select {attributeName}:
                      <span className="text-gray-600 ml-1">
                        {selectedAttributes[attributeName] || "None selected"}
                      </span>
                    </h3>
                    <div className="flex gap-2 flex-wrap">
                      {values?.map((value) => {
                        const isSelected =
                          selectedAttributes[attributeName] === value;

                        if (attributeName.toLowerCase() === "color") {
                          return (
                            <button
                              key={value}
                              onClick={() =>
                                dispatch(
                                  setSelectedAttribute({ attributeName, value })
                                )
                              }
                              className={`w-12 h-12 rounded-lg border-2 overflow-hidden transition-colors relative ${
                                isSelected
                                  ? "border-teal-500"
                                  : "border-gray-200 hover:border-gray-300"
                              }`}
                              title={value}
                            >
                              <div
                                className="w-full h-full"
                                style={{
                                  backgroundColor: getColorValue(value),
                                }}
                              />
                              {isSelected && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <CheckCircle className="w-4 h-4 text-white drop-shadow-lg" />
                                </div>
                              )}
                            </button>
                          );
                        }

                        return (
                          <button
                            key={value}
                            onClick={() =>
                              dispatch(
                                setSelectedAttribute({ attributeName, value })
                              )
                            }
                            className={`px-4 py-2 border rounded-lg transition-colors ${
                              isSelected
                                ? "border-teal-500 bg-teal-50 text-teal-700"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                          >
                            {value}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )
              )}

            <div>
              <h3 className="font-medium mb-3">Quantity</h3>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => dispatch(decrementQuantity())}
                  disabled={quantity <= 1}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="text-lg font-medium w-12 text-center">
                  {quantity.toString().padStart(2, "0")}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => dispatch(incrementQuantity())}
                  disabled={quantity >= availableStock}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Maximum {availableStock} items available
              </p>
            </div>

            <Button
              onClick={handleAddToCart}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 text-lg"
              disabled={!selectedVariation || availableStock === 0}
            >
              {availableStock === 0 ? "Out of Stock" : "Add to Cart"}
            </Button>
          </div>

          {/* Delivery Options */}
          <div className="space-y-6">
            <Card className="border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4 text-gray-500">
                  Delivery Options
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 ">
                    <img src="/package.png" alt="" />
                    <div className="flex-1">
                      <div className="font-medium">Regular</div>
                      <div className="text-sm text-gray-600">
                        Delivery within 2-3 days
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 ">
                    <img src="/package-moving.png" alt="" />
                    <div className="flex-1">
                      <div className="font-medium text-gray-300">
                        Express
                        <span className="text-red-500 ml-2 text-sm font-semibold">
                          Not available
                        </span>
                      </div>
                      <div className="text-sm text-gray-300">
                        Delivery within 2-3 days
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <SellerCard
              seller={sampleSeller}
              // onChatNow={handleChatNow}
              // onViewShop={handleViewShop}
            />
          </div>
        </div>
      </CommonWrapper>
      <div className="bg-website-color-gray">
        <DetailsCard />
      </div>
    </div>
  );
}
