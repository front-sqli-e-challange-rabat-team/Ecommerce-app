import { BiSupport } from "react-icons/bi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";

const DeliveryBanner = () => {
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="flex items-center gap-4 flex-col px-16 py-16">
        <div className="relative">
          <div className="rounded-full border-2 border-gray-700 p-3">
            <div className="rounded-full bg-black w-16 h-16 flex items-center justify-center">
              <div>
                <TbTruckDelivery className="text-white size-8" />
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

      <div className="flex items-center gap-4 flex-col px-16 py-16">
        <div className="relative">
          <div className="rounded-full border-2 border-gray-700 p-3">
            <div className="rounded-full bg-black w-16 h-16 flex items-center justify-center">
              <div>
                  <BiSupport className="text-white size-8" />
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

      <div className="flex items-center gap-4 flex-col px-16 py-16">
        <div className="relative">
          <div className="rounded-full border-2 border-gray-700 p-3">
            <div className="rounded-full bg-black w-16 h-16 flex items-center justify-center">
              <div>
                <IoShieldCheckmarkOutline className="text-white size-8" />
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
