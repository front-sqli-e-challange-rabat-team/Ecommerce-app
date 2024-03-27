import Banner from "./banner";
import CountdownTimer from "./countdown-timer";

const BannerSection = () => {
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <Banner imgUrl="Frame600final.png" />
      <div className="absolute z-20 top-0 left-0 w-full">
        <div className="absolute top-32 left-32">
          <div className="category">
            <p className="text-emerald-400 font-semibold text-4xl">
              Categories
            </p>
          </div>
          <div className="banner-text mt-10">
            <p className="text-white font-semibold text-7xl">Enhanced</p>
            <p className="text-white font-semibold text-7xl mt-3">
              Music Experience
            </p>
          </div>
          <div className="my-16">
            <CountdownTimer targetDate="2024-3-31" />
          </div>
          <div className="my-16">
            <button className="btn btn-wide bg-emerald-500 border-none hover:bg-emerald-400 text-white font-semibold">Buy Now !</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
