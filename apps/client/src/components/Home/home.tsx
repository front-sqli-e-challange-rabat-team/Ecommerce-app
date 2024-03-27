import { FaApple } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import CategoriesSection from "./categories-section";
import FlashSalesSection from "./flash-sales-section";
import BestSellersSecion from "./best-sellers-section";
import Banner from "./banner";
import ProductsExplore from "./poducts-explore-section";
import NewArrivalSection from "./new-arrival-section";
import TopSection from "./top-section";
import DeliveryBanner from "./delivery-banner";
import BannerSection from "./banner-section";

const Home = () => {
  return (
    <div className="divide-y divide-slate-300">
      <div className="">
        <TopSection />
        <FlashSalesSection />
      </div>
      <div className="mt-20">
        <CategoriesSection />
      </div>
      <div className="mt-20">
        <BestSellersSecion />
        <div className="mt-24">
          <BannerSection />
        </div>
        <ProductsExplore />
      </div>
      <div className="mt-20">
        <NewArrivalSection />
      </div>
      <div className="mt-20">
        <DeliveryBanner />
      </div>
    </div>
  );
};

export default Home;
