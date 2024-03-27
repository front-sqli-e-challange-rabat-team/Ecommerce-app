import FlashSalesHeader from "./flash-sales-header";
import ItemsCarousel from "./items-carousel";

const FlashSalesSection = () => {
  return (
    <div className="flex flex-col justify-between mb-4 px-4 md:px-8 my-20">
      <FlashSalesHeader />
      <div className="p-4 ">
        <ItemsCarousel />
        <div className="flex justify-center mt-5">
          <button className="btn btn-wide self-center bg-red-500 border-none text-white hover:bg-error">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlashSalesSection;
