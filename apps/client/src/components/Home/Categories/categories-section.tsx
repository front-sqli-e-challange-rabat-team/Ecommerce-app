import CategoriesCarousel from "./categories-carousel";
import SectionHeader from "../Common/section-header";

const CategoriesSection = () => {
  return (
    <div className="flex flex-col justify-between mb-4 px-4 md:px-8 my-20">
      <SectionHeader title="Categories" />
      <div className="flex flex-row items-center">
        <h2 className="text-4xl font-bold mt-7">Browse By Category</h2>
      </div>
      <div className="flex flex-row items-center justify-center mt-20">
        <CategoriesCarousel />
      </div>
    </div>
  );
};

export default CategoriesSection;
