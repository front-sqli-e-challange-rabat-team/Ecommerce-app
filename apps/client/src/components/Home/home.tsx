import { FaApple } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import CategoriesSection from "./categories-section";
import FlashSalesSection from "./flash-sales-section";
import BestSellersSecion from "./best-sellers-section";
import Banner from "./banner";
import ProductsExplore from "./poducts-explore-section";
import NewArrivalSection from "./new-arrival-section";

const Home = () => {
  return (
    <div className="divide-y divide-slate-300">
      <div className="">
      <section className="grid grid-cols-3  2xl:w-[70%] mx-auto py-20">
        <div className=""></div>
        <div className="col-span-2 w-full flex">
          <div className="bg-black w-full h-full grid grid-cols-1 content-center gap-5 text-white px-10">
            <div className="flex  items-center">
              <FaApple className="size-12" />
              <p className="text-xs">Iphone 14 series</p>
            </div>
            <p className="text-5xl font-bold">Up to 10% off Voucher</p>
            <a href="" className="hover:underline">
              shop now <FaArrowRightLong className="inline" />
            </a>
          </div>
          <img src="hero_frame.png" alt="" />
        </div>
      </section>
        <FlashSalesSection />
      </div>
      <div className="mt-20">
        <CategoriesSection />
      </div>
      <div className="mt-20">
        <BestSellersSecion />
        <Banner imgUrl="banner.jpg"/>
        <ProductsExplore />
      </div>
      <div className="mt-20">
        <NewArrivalSection />
      </div>
    </div>
  );
};

export default Home;
