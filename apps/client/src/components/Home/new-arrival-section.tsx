import SectionHeader from "./section-header";

const NewArrivalSection = () => {
  return (
    <div className="flex flex-col justify-between mb-4 px-4 md:px-8 my-20">
      <SectionHeader title="New Arrival"/>
    <div className="flex flex-row py-10">
      
      <div className="w-full grid grid-cols-2 items-center gap-2 justify-center">
        <section className="py-5">
          <img src="DALL·EPS5.jpg" className="w-2/3 object-fit ml-auto h-full" />
        </section>
        <section className="flex flex-col gap-5 mx-4">
          <div className="w-full flex items-end text-white" style={{ backgroundColor: '#0e0e0e' }}>
            <div className="bg-green flex flex-col justify-end p-4 rounded-lg">
              <p className="font-bold text-white text-base">Women's Collections</p>
              <p className="font-base text-white text-xs">
                Featured woman collections that give you another vibe
              </p>
              <a href="text-white hover:underline font-bold">Shop Now</a>
            </div>
            <img src="woman.png" className="ml-auto w-full rounded-lg z-0" />
          </div>

          <div className="flex gap-5">
            <div className="w-full items-center justify-center flex" style={{ backgroundColor: '#0c0c0e' }}>
              <img src="DALL·ESPEAKERS.jpg" className="w-1/2 rounded-lg" />
            </div>
            <div className="w-full items-center justify-center flex" style={{ backgroundColor: '#000004' }}>
              <img src="DALL·EPERFUME.jpg" className="w-1/2 rounded-lg" />
            </div>
          </div>
        </section>
      </div>
    </div>
    </div>
  );
};

export default NewArrivalSection;
