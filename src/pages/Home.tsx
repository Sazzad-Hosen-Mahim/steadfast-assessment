import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import CommonWrapper from "../common/CommonWrapper";
import { useEffect } from "react";
import { fetchProducts } from "@/store/Slices/productSlice";
import { Product } from "@/types";
import ProductCard from "@/components/Product/ProductCard";

const Home = () => {
  const dispatch = useAppDispatch();

  const { products, loading, error, nextPageUrl } = useAppSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleNextPage = () => {
    if (nextPageUrl) {
      dispatch(fetchProducts(nextPageUrl));
    }
  };

  if (loading && products.length === 0) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!products) {
    return (
      <div className="flex justify-center items-center h-96">
        No product data
      </div>
    );
  }
  return (
    <div className="mt-5">
      <CommonWrapper>
        <div className=" bg-website-color-gray p-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {products.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {nextPageUrl && (
            <div className="flex justify-center my-8">
              <button
                onClick={handleNextPage}
                className="px-6 py-2 bg-website-color-layout text-white rounded hover:bg-website-color-layout/80 transition"
                disabled={loading}
              >
                {loading ? "Loading..." : "Next"}
              </button>
            </div>
          )}
        </div>
      </CommonWrapper>
    </div>
  );
};

export default Home;
