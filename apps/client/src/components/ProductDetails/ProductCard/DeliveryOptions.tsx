import { TbTruckDelivery } from "react-icons/tb";
import { GrPowerCycle } from "react-icons/gr";
const DeliveryOptions = () => {
    return ( 
        <div className="w-full grid grid-cols-1 border-2 border-black/50">
            <section className="flex gap-5 items-center border-b border-black/50 py-5 px-5">
                <TbTruckDelivery className="size-10"/>
                <div className="poppins font-medium flex flex-col gap-1">
                    <p className="text-base">Free Delivery</p>
                    <p className="text-xs hover:underline hover:cursor-pointer">Enter your postal code for Delivery Availability</p>
                </div>
            </section>
            <section className="flex gap-5 items-center border-t border-black/50 py-5 px-5">
                <GrPowerCycle className="size-10"/>
                <div className="poppins font-medium flex flex-col gap-1">
                    <p className="text-base">Return Delivery</p>
                    <p className="text-xs">Free 30 Days Delivery Returns. <span className="hover:underline hover:cursor-pointer">Details</span></p>
                </div>
            </section>
        </div>
     );
}
 
export default DeliveryOptions;