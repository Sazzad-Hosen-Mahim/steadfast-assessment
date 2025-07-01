import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ExpandableCardProps {
  title: string;
  children: React.ReactNode;
  previewContent?: React.ReactNode;
  className?: string;
}

const ExpandableCard: React.FC<ExpandableCardProps> = ({
  title,
  children,
  previewContent,
  className = "",
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`bg-white border border-gray-200 rounded-lg p-6 ${className}`}
    >
      <h2 className="text-lg font-semibold text-gray-900 mb-4">{title}</h2>

      <div className="space-y-4">
        {/* Preview content when collapsed */}
        {!isExpanded && previewContent && (
          <div className="text-gray-700 text-sm leading-relaxed">
            {previewContent}
          </div>
        )}

        {/* Full content when expanded */}
        {isExpanded && (
          <div className="text-gray-700 text-sm leading-relaxed">
            {children}
          </div>
        )}

        {/* See More / See Less button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center mx-auto gap-1 text-gray-800 hover:text-gray-900 font-semibold text-sm transition-colors"
        >
          <span>{isExpanded ? "See Less" : "See More"}</span>
          {isExpanded ? (
            <ChevronUp className="w-4 h-4 " />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>
      </div>
    </div>
  );
};

export default ExpandableCard;
