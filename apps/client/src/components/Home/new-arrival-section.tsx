import Banner from "./banner";
import SectionHeader from "./section-header";

const NewArrivalSection = () => {
  return (
    <div className="flex flex-col justify-between mb-4 px-4 md:px-8 my-20">
      <SectionHeader title="New Arrival"/>

      <div className="items-center w-full py-10 px-20 justify-items-center mx-auto place-content-center">
        <Banner imgUrl="nike-shoes.jpg" />
      </div>
    </div>
  );
};

export default NewArrivalSection;
