import React from "react";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import StarRoundedIcon from "@mui/icons-material/StarRounded";

interface ProductCardProps {
  imageUrl: string;
  name: string;
  originalPrice: number;
  discountRate: number | undefined;
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
  // Calculate the width of the filled stars based on the rating
  const filledStarsWidth = (rating / 5) * 100;

  return (
    // <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
    //     <div className="relative">
    //         <img className="rounded-t-lg p-8" src={imageUrl} alt={name} />
    //         <div className="absolute top-0 right-0 p-2">
    //             <button className="text-gray-500 hover:text-gray-700">
    //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //                     <ShoppingCartIcon />
    //                 </svg>
    //             </button>
    //             <button className="text-gray-500 hover:text-gray-700 ml-2">
    //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //                     <FavoriteIcon />
    //                 </svg>
    //             </button>
    //         </div>
    //     </div>
    //     <div className="p-5 bg">
    //         <h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
    //         <p className="text-gray-600 text-sm line-through">${originalPrice}</p>
    //         <p className="text-gray-900 text-lg font-semibold">${currentPrice}</p>
    //         <div className="flex items-center mt-2.5 mb-5">
    //             <div className="flex items-center">
    //                 <div className="relative w-full bg-gray-200 rounded h-1.5">
    //                     <div className="absolute top-0 h-1.5 rounded" style={{ width: `${filledStarsWidth}%` }}><StarRoundedIcon className='rounded-lg fill-yellow-500 overflow-hidden' /></div>
    //                 </div>
    //             </div>
    //             <span className="text-gray-600 text-sm ml-3">({reviewCount})</span>
    //         </div>
    //     </div>
    // </div>
    <div className="card w-96 bg-base-100 shadow-xl rounded-lg">
      <figure className="relative">
        {discountRate && (
          <div className="badge border-none bg-red-500 z-20 absolute top-4 left-4">
            <span className="text-gray-200 font-semibold">-{discountRate}%</span>
          </div>
        )}
        <img src={imageUrl} alt="Shoes" />
      </figure>
      <div className="card-body rounded-lg" data-theme="nord">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          {
            discountRate &&
            <span className="text-lg font-bold text-red-500 mr-3">
              ${Math.floor(originalPrice*discountRate/100)}
            </span>
          }
          <span className={`text-gray-600 text-lg ${ discountRate ? "line-through" : ""} start-1`}>
            ${originalPrice}
          </span>
        </p>
        <div className="flex items-center">
          <div className="relative w-full bg-gray-200 rounded h-1.5">
            <div
              className="absolute top-0 h-1.5 rounded"
              style={{ width: `${filledStarsWidth}%` }}
            ></div>
          </div>
        </div>
        {/* <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div> */}
      </div>
    </div>
  );
};

export default ProductCard;
