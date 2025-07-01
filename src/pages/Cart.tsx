import { useAppSelector, useAppDispatch } from "@/hooks/useRedux";
import {
  selectCartItems,
  removeFromCart,
  updateCartQuantity,
  clearCart,
} from "@/store/Slices/cartSlice";
import { useMemo, useState } from "react";

const Cart = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);
  const [selectAll, setSelectAll] = useState(false);

  // For demonstration, all items are from the same shop
  const shopName = "BD FASHION HOUSE";

  // Calculate total price and item count
  const total = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems]
  );
  const itemCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems]
  );

  const handleQuantityChange = (
    item: (typeof cartItems)[0],
    newQuantity: number
  ) => {
    if (newQuantity < 1) return;
    dispatch(
      updateCartQuantity({
        productId: item.productId,
        variationId: item.variationId,
        attributes: item.attributes,
        quantity: newQuantity,
      })
    );
  };

  const handleRemove = (item: (typeof cartItems)[0]) => {
    dispatch(
      removeFromCart({
        productId: item.productId,
        variationId: item.variationId,
        attributes: item.attributes,
      })
    );
  };

  const handleClearAll = () => {
    dispatch(clearCart());
  };

  return (
    <div className="bg-[#f4f7fa] min-h-screen py-8 px-2 md:px-0">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
        {/* Cart List */}
        <div className="flex-1 bg-white rounded-xl shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-3xl font-bold">My Cart ({itemCount})</h2>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={() => setSelectAll((v) => !v)}
                  className="accent-green-500"
                />
                <span className="text-gray-600">Select All</span>
              </label>
              <button
                className="text-gray-500 hover:underline"
                onClick={handleClearAll}
              >
                Clear All
              </button>
            </div>
          </div>
          <hr className="mb-4 text-gray-200" />
          {cartItems.length === 0 ? (
            <div className="text-center text-gray-400 py-16">
              Your cart is empty.
            </div>
          ) : (
            cartItems.map((item, idx) => (
              <div
                key={item.productId + "-" + idx}
                className="mb-6 rounded-lg p-4 bg-[#f9fbfc]"
              >
                <div className="flex items-center gap-3 mb-2">
                  <input type="checkbox" className="accent-green-500" />
                  <div className="flex items-center gap-2 text-gray-700 font-semibold">
                    <span className="inline-block bg-gray-100 rounded-full p-1">
                      <svg width="20" height="20" fill="none">
                        <rect width="20" height="20" rx="4" fill="#E5E7EB" />
                        <path
                          d="M6 10h8M6 10l2.5 2.5M6 10l2.5-2.5"
                          stroke="#6B7280"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {shopName} <span className="text-gray-400">{">"}</span>
                  </div>
                </div>
                <div className="lg:flex items-center gap-4">
                  <img
                    src={item.thumbnail}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg "
                  />
                  <div className="flex-1">
                    <div className="font-semibold text-lg mb-1">
                      {item.name}
                    </div>
                    <div className="text-gray-500 text-sm mb-2">
                      {Object.entries(item.attributes)
                        .map(([k, v]) => `${k}: ${v}`)
                        .join("; ")}
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        className="w-8 h-8 rounded-full bg-gray-200 text-lg font-bold flex items-center justify-center"
                        onClick={() =>
                          handleQuantityChange(item, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <span className="w-10 text-center font-semibold text-lg">
                        {String(item.quantity).padStart(2, "0")}
                      </span>
                      <button
                        className="w-8 h-8 rounded-full bg-gray-200 text-lg font-bold flex items-center justify-center"
                        onClick={() =>
                          handleQuantityChange(item, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                      <button
                        className="ml-3 text-gray-400 hover:text-red-500"
                        onClick={() => handleRemove(item)}
                        title="Remove"
                      >
                        <svg
                          width="20"
                          height="20"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M7.5 7.5l5 5m0-5l-5 5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end min-w-[90px]">
                    <span className="font-bold text-lg text-gray-800">
                      ৳{item.price}
                    </span>
                    <span className="text-gray-400 line-through text-sm">
                      ৳1539
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        {/* Order Summary */}
        <div className="w-full md:w-[350px]">
          <div className="bg-white rounded-xl shadow p-6 sticky top-8">
            <h3 className="text-2xl font-semibold mb-4">Order summary</h3>
            <div className="flex justify-between mb-2 text-gray-600">
              <span>
                Price ({itemCount} item{itemCount !== 1 ? "s" : ""})
              </span>
              <span>৳{total}</span>
            </div>
            <div className="flex justify-between mb-2 text-gray-600">
              <span>Shipping fee</span>
              <span className="text-blue-500 cursor-pointer text-sm">
                To be added
              </span>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <input
                type="text"
                placeholder="Store / Falcon coupon"
                className="border rounded px-2 py-1 flex-1"
              />
              <button className="bg-teal-500 text-white px-4 py-1 rounded">
                Apply
              </button>
            </div>
            <hr className="mb-4" />
            <div className="flex justify-between font-bold text-lg mb-4">
              <span>Sub Total</span>
              <span>৳{total}</span>
            </div>
            <button className="w-full bg-teal-500 text-white py-3 rounded-lg font-semibold text-lg hover:bg-teal-600 transition">
              Proceed to Checkout
            </button>
            <div className="mt-4 flex items-start gap-2 text-sm">
              <input
                type="checkbox"
                checked
                readOnly
                className="accent-green-500 mt-1"
              />
              <span>
                I have read and agree to the Terms and Conditions, Privacy
                Policy and Refund and Return Policy
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
