import CategoriesSection from "./Categories/categories-section";
import FlashSalesSection from "./FlashSales/flash-sales-section";
import BestSellersSecion from "./BestSellers/best-sellers-section";
import ProductsExplore from "./ProductsExplore/poducts-explore-section";
import NewArrivalSection from "./NewArrivalSection/new-arrival-section";
import DeliveryBanner from "./Banners/delivery-banner";
import BannerSection from "./Banners/banner-section";
import TopSection from "./TopSection/TopSection";

const Home = () => {
  return (
    <div className="divide-y divide-slate-300">
      <div className="div">
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
