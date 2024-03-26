import ItemsCarousel from "./items-carousel";
import SectionHeader from "./section-header";

const ProductsExplore = () => {
  return (
    <div className="flex flex-col justify-between mb-4 px-4 md:px-8 my-20">
      <SectionHeader title="Our Products" />
      <div className="flex flex-row items-center">
        <h2 className="text-4xl font-bold mt-7">Explore Our Products</h2>
      </div>
      <div className="p-4">
        <ItemsCarousel />
        <ItemsCarousel />
        <div className="flex justify-center">
          <button className="btn btn-wide self-center bg-red-500 border-none text-white">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsExplore;
