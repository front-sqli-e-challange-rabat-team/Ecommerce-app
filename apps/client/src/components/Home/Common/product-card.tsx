import StarRating from "./star-rating";
import { Product } from "../../../types/Product";
import { twMerge } from "tailwind-merge";
import { useAppSelector } from "../../../hooks/redux";
import { FaRegHeart } from "react-icons/fa6";

const ProductCard: React.FC<Product> = ({
  imageUrl,
  name,
  discountRate,
  originalPrice,
  rating,
  reviewCount,
}) => {
  const { theme } = useAppSelector((state) => state.general);
  return (
    <div className="card w-72 rounded-lg hover:cursor-pointer hover:scale-[1.01] transition-all duration-75" >
      <figure className="relative rounded-lg group">
        {discountRate && (
          <div className="badge px-4 py-4 border-none bg-primary z-20 absolute top-4 left-4">
            <span className="text-gray-200 font-semibold">
              -{discountRate}%
            </span>
          </div>
        )}
        <img src={imageUrl} alt="Product" />
        <div className="absolute bottom-0 left-0 right-0 justify-center z-10 hidden group-hover:flex">
          <button
            className={twMerge(
              "w-full py-2 !rounded-t-lg !rounded-b-none flex items-center justify-center text-white text-md font-bold",
              theme == "dark" ? "bg-base-100" : "bg-black"
            )}
          >
            Add to Cart
          </button>
        </div>
        <div className=" absolute top-2 right-2  rounded-full p-1 bg-white">
          <FaRegHeart className="size-4  hover:cursor-pointer text-black hover:fill-red-500" />
        </div>
      </figure>
      <div className="grid rounded-b-lg gap-2 mt-5">
        <h2 className="card-title justify-between px-5">
          {name.length >= 17 ? name.slice(0, 13) + "..." : name}
          <div
            className={twMerge(
              "badge badge-md text-xs",
              theme == "dark"
                ? "badge-error text-white"
                : "badge-primary text-white"
            )}
          >
            NEW
          </div>
        </h2>
        <div className="flex px-5">
          <div>
            {discountRate && (
              <span className="text-lg font-bold text-red-500 mr-3">
                $
                {Math.floor(
                  originalPrice - (originalPrice * discountRate) / 100
                )}
              </span>
            )}
            <span
              className={twMerge(
                `text-gray-600 text-lg`,
                discountRate ? "line-through" : "font-semibold",
                theme == "dark" ? "text-white" : ""
              )}
            >
              ${originalPrice}
            </span>
          </div>
        </div>
        <div className="flex justify-end items-center px-5">
          <StarRating rating={rating} />
          <span className="text-sm text-gray-500 ml-2">({reviewCount})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
