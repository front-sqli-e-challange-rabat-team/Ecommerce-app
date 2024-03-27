import Rating from "./ProductCard/Rating";

import Sizes from "./ProductCard/sizes/Sizes";
import Actions from "./ProductCard/Actions";
import Colors from "./ProductCard/Colors";
import DeliveryOptions from "./ProductCard/DeliveryOptions";
import { useAppSelector } from "../../hooks/redux";

const Card = () => {
  const {theme} = useAppSelector(state=> state.general);
  return (
    <section>
      <section className="flex flex-col gap-2">
        <h1 className="text-lg font-bold">Havic HV G-92 Gamepad</h1>
        <Rating />
        <p className="poppins text-lg font-semibold">$192.00</p>
        <p className="poppins font-base text-sm">
          PlayStation 5 Controller Skin High quality vinyl with air channel
          adhesive for easy bubble free install & mess free removal Pressure
          sensitive.
        </p>
      </section>
      <div className="divider !my-3"></div>
      <section className="flex flex-col gap-5">
        <Colors />
        <Sizes />
        <Actions theme={theme} />
      </section>
      <section className="mt-5">
        <DeliveryOptions />
      </section>
    </section>
  );
};

export default Card;
