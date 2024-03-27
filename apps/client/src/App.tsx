import { BiRightArrow } from "react-icons/bi";
import { useAppSelector } from "./hooks/redux";
import { Outlet } from "react-router-dom";

import Navbar from "./components/Layouts/Navbar";
import Footer from "./components/Layouts/Footer";

const App = () => {
  const { theme } = useAppSelector((state) => state.general);

  return (
    <div className="h-dvh w-full flex flex-col" data-theme={theme}>
      <div
        data-theme={theme === "dark" ? "nord" : "dark"}
        className="w-full bg-base-100 text-base-content flex justify-center py-2 px-20 border-b-2"
      >
        <p className="ml-auto flex justify-center items-center">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <BiRightArrow className="mx-2" />
          <a className="font-bold hover:underline" href="">
            ShopNow
          </a>
        </p>
        <p className="justify-self-end ml-auto">English</p>
      </div>
      <Navbar />
      <div className="flex-1 px-20 py-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
