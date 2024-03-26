import React from "react";

interface ProductCardProps {
  id: number;
  imageUrl: string;
  name: string;
  currentPrice: number;
  originalPrice: number;
  rating: number;
  reviewCount: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  imageUrl,
  name,
  currentPrice,
  originalPrice,
  rating,
  reviewCount,
}) => {
  // Calculate the width of the filled stars based on the rating
  const filledStarsWidth = (rating / 5) * 100;

  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
      <div className="relative">
        <img className="rounded-t-lg p-8" src={imageUrl} alt={name} />
        <div className="absolute top-0 right-0 p-2">
          <button className="text-gray-500 hover:text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {/* Shopping cart icon */}
            </svg>
          </button>
          <button className="text-gray-500 hover:text-gray-700 ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {/* Heart icon */}
            </svg>
          </button>
        </div>
      </div>
      <div className="p-5">
        <h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
        <p className="text-gray-600 text-sm line-through">${originalPrice}</p>
        <p className="text-gray-900 text-lg font-semibold">${currentPrice}</p>
        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center">
            <div className="relative w-full bg-gray-200 rounded h-1.5">
              <div
                className="absolute top-0 h-1.5 rounded bg-yellow-400"
                style={{ width: `${filledStarsWidth}%` }}
              ></div>
            </div>
          </div>
          <span className="text-gray-600 text-sm ml-3">({reviewCount})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
