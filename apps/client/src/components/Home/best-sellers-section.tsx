import ItemsCarousel from "./items-carousel";
import SectionHeader from "./section-header";

const BestSellersSecion = () => {
  return (
    <div className="flex flex-col justify-between mb-4 px-4 md:px-8 my-20">
      <SectionHeader title="This Month" />
      <div className="flex flex-row items-center justify-between pr-7">
        <h2 className="text-4xl font-bold my-8">Best Selling Products</h2>
        <button className="btn btn-wide self-center bg-red-500 border-none text-white">
          View All
        </button>
      </div>
      <ItemsCarousel />
    </div>
  );
};

export default BestSellersSecion;
