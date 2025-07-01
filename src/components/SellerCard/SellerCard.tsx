import React from "react";
import { MessageCircle, Shield } from "lucide-react";

interface SellerCardProps {
  seller: {
    id: string;
    name: string;
    logo: string;
    verified: boolean;
    isRisingStar: boolean;
    shipOnTime: number;
    chatResponse: number;
    shopRating: number;
    chatNow: boolean;
  };
  onChatNow?: (sellerId: string) => void;
  onViewShop?: (sellerId: string) => void;
}

const SellerCard: React.FC<SellerCardProps> = ({
  seller,
  onChatNow,
  onViewShop,
}) => {
  return (
    <div className="bg-white border-2 border-gray-200 rounded-xl p-4 h-64">
      {/* Sold by text */}
      <div className="text-xs text-gray-500 mb-3">Sold by</div>

      {/* Seller info with logo and name */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
          <span className="text-white font-bold text-sm">P&G</span>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-1">
            <span className="font-medium text-gray-900 text-sm">
              {seller.name}
            </span>
            {seller.verified && (
              <Shield className="w-4 h-4 text-blue-500 fill-current" />
            )}
          </div>
          {seller.isRisingStar && (
            <div className="flex items-center mt-1">
              <div className="bg-gradient-to-r from-orange-400 to-purple-600 text-white text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
                <span className="text-xs">⭐</span>
                <span className="font-medium">Rising Star</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => onChatNow?.(seller.id)}
          className="flex-1 bg-teal-500 hover:bg-teal-600 text-white text-sm font-medium py-2 px-3 rounded-md flex items-center justify-center gap-1 transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          Chat Now
        </button>
        <button
          onClick={() => onViewShop?.(seller.id)}
          className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium py-2 px-3 rounded-md transition-colors"
        >
          View Shop
        </button>
      </div>

      {/* Stats labels */}
      <div className="grid grid-cols-3 gap-2 text-xs text-gray-600 mb-1">
        <div className="text-center">Ship on Time</div>
        <div className="text-center">Chat Response</div>
        <div className="text-center">Shop Rating</div>
      </div>

      {/* Stats values */}
      <div className="grid grid-cols-3 gap-2">
        <div className="text-center">
          <span className="text-2xl font-bold text-gray-900">
            {seller.shipOnTime}%
          </span>
        </div>
        <div className="text-center">
          <span className="text-2xl font-bold text-gray-900">
            {seller.chatResponse}%
          </span>
        </div>
        <div className="text-center">
          <span className="text-2xl font-bold text-gray-900">
            {seller.shopRating}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default SellerCard;
