import { BiSupport } from "react-icons/bi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { twMerge } from "tailwind-merge";
import { useAppSelector } from "../../../hooks/redux";

const DeliveryBanner = () => {
  const { theme } = useAppSelector((state) => state.general);

  return (
    <div className="flex flex-row items-center justify-center">
      <div className="flex items-center gap-4 flex-col px-16 py-16 transition all 0.4s hover:scale-[1.01]">
        <div className="relative">
          <div className="rounded-full border-2 border-gray-700 p-3">
            <div
              className={twMerge(
                "rounded-full w-16 h-16 flex items-center justify-center",
                theme == "dark" ? "bg-white" : "bg-black"
              )}
            >
              <div>
                <TbTruckDelivery
                  className={twMerge(
                    "size-8",
                    theme == "dark" ? "text-black" : "text-white"
                  )}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-lg font-semibold uppercase">
            Free and fast delivery
          </p>
          <p className="text-sm">Free delivery for all orders over $140</p>
        </div>
      </div>

      <div className="flex items-center gap-4 flex-col px-16 py-16 transition all 0.4s hover:scale-[1.01]">
        <div className="relative">
          <div className="rounded-full border-2 border-gray-700 p-3">
            <div
              className={twMerge(
                "rounded-full w-16 h-16 flex items-center justify-center",
                theme == "dark" ? "bg-white" : "bg-black"
              )}
            >
              <div>
                <BiSupport
                  className={twMerge(
                    "size-8",
                    theme == "dark" ? "text-black" : "text-white"
                  )}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-lg font-semibold uppercase">
            24/7 Customer Service
          </p>
          <p className="text-sm">Friendly 24/7 customer suport</p>
        </div>
      </div>

      <div className="flex items-center gap-4 flex-col px-16 py-16 transition all 0.4s hover:scale-[1.01]">
        <div className="relative">
          <div className="rounded-full border-2 border-gray-700 p-3">
            <div
              className={twMerge(
                "rounded-full w-16 h-16 flex items-center justify-center",
                theme == "dark" ? "bg-white" : "bg-black"
              )}
            >
              <div>
                <IoShieldCheckmarkOutline
                  className={twMerge(
                    "size-8",
                    theme == "dark" ? "text-black" : "text-white"
                  )}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-lg font-semibold uppercase">
            Money Back Guarantee
          </p>
          <p className="text-sm">We reurn money within 30 days</p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryBanner;
