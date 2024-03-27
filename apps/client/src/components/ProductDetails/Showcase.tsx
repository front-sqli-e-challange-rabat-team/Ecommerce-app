import { useState } from "react";
import { useAppSelector } from "../../hooks/redux";
import Banner from "./showcaseElements/Banner";

const Showcase = () => {
  //TODO: enhance the image switch functionality to replace the removed image from the middle and insert it into the left side. play with sizes too
    
  const {theme} = useAppSelector(state=>state.general);

  const [selectedImage, setSelectedImage] = useState('/products/Havic HV G-92 Gamepad/1.png'); // Initial image
  const imageUrls = [
    '/products/Havic HV G-92 Gamepad/1.png',
    '/products/Havic HV G-92 Gamepad/2.png',
    '/products/Havic HV G-92 Gamepad/3.png',
    '/products/Havic HV G-92 Gamepad/4.png',
    '/products/Havic HV G-92 Gamepad/5.png',
  ];

  const handleImageClick = (imageUrl:string) => {
    setSelectedImage(imageUrl);
  };
  return (
    <section className="col-span-2 flex justify-center gap-5 max-h-full">
      <div className="flex flex-col gap-3 justify-evenly">
      {imageUrls.slice(1).map((imageUrl) => (
          <Banner key={imageUrl} theme={theme} url={imageUrl} onClick={() => handleImageClick(imageUrl)} />
        ))}
      </div>
      <div className=" w-fit max-h-[550px] overflow-hidden border-2 border-base-300 shadow-lg rounded-xl">
        <img
          src={selectedImage}
          className="object-fit rounded-xl"
          alt=""
        /> 
      </div>
    </section>
  );
};

export default Showcase;
