import React from "react";
import StarRating from "./star-rating";

interface ProductCardProps {
  imageUrl: string;
  name: string;
  originalPrice: number;
  discountRate?: number; // discountRate can be optional
  rating: number;
  reviewCount: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  name,
  discountRate,
  originalPrice,
  rating,
  reviewCount,
}) => {
  return (
    <div className="group card w-96 bg-base-100 shadow-xl rounded-lg">
      <figure className="relative">
        {discountRate && (
          <div className="badge border-none bg-red-500 z-20 absolute top-4 left-4">
            <span className="text-gray-200 font-semibold">-{discountRate}%</span>
          </div>
        )}
        <img src={imageUrl} alt="Product" />
        <div className="add-to-cart-button absolute bottom-0 left-0 right-0 justify-center z-10 hidden group-hover:flex">
          <button className="w-full text-white bg-black py-2 rounded-t-lg flex items-center justify-center text-md font-bold">
            Add to Cart
          </button>
        </div>
      </figure>
      <div className="card-body rounded-b-lg">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          {discountRate && (
            <span className="text-lg font-bold text-red-500 mr-3">
              ${Math.floor(originalPrice - (originalPrice * discountRate / 100))}
            </span>
          )}
          <span className={`text-gray-600 text-lg ${discountRate ? "line-through" : ""}`}>
            ${originalPrice}
          </span>
        </p>
        <div className="flex items-center mb-4 p-0">
          <StarRating rating={rating} />
          <span className="text-sm text-gray-500 ml-2">({reviewCount})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
