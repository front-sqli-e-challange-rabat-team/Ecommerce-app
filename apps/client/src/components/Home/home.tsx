import CategoriesSection from "./categories-section";
import FlashSalesSection from "./flash-sales-section";
import BestSellersSecion from "./best-sellers-section";
import Banner from "./banner";
import ProductsExplore from "./poducts-explore-section";
import NewArrivalSection from "./new-arrival-section";
import TopSection from "./TopSection";

const Home = () => {
  return (
    <div className="divide-y divide-slate-300">
      <TopSection/>
      <FlashSalesSection />
      <div className="mt-20">
        <CategoriesSection />
      </div>
      <div className="mt-20">
        <BestSellersSecion />
        <Banner imgUrl="banner.jpg" />
        <ProductsExplore />
      </div>
      <div className="mt-20">
        <NewArrivalSection />
      </div>
    </div>
  );
};

export default Home;
