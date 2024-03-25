import { useAppSelector } from "../../hooks/redux";
import Banner from "./showcaseElements/showcaseBanners";

const Showcase = () => {
  const {theme} = useAppSelector(state=>state.general)
  return (
    <section className="col-span-2 flex justify-center gap-5 max-h-full">
      <div className="flex flex-col gap-3 justify-evenly">
        <Banner theme={theme} url="/products/Havic HV G-92 Gamepad/2.png"/>
        <Banner theme={theme} url="/products/Havic HV G-92 Gamepad/3.png"/>
        <Banner theme={theme} url="/products/Havic HV G-92 Gamepad/4.png"/>
        <Banner theme={theme} url="/products/Havic HV G-92 Gamepad/5.png"/>
      </div>
      <div className=" w-fit max-h-[550px] overflow-hidden border-2 border-base-300 shadow-lg rounded-xl">
        <img
          src="/products/Havic HV G-92 Gamepad/1.png"
          className="object-cover rounded-xl"
          alt=""
        /> 
      </div>
    </section>
  );
};

export default Showcase;
