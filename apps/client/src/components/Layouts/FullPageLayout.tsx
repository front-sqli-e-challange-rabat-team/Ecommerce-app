import { BiRightArrow } from "react-icons/bi";
import { useAppSelector } from "../../hooks/redux";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import { twMerge } from "tailwind-merge";
import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
    have_DVH_height?: boolean
}

const FullPageLayout: React.FC<LayoutProps> = ({have_DVH_height}:LayoutProps) => {
    const { theme } = useAppSelector((state) => state.general);

  return (
    <div 
      className={twMerge("w-full flex flex-col", have_DVH_height? "h-dvh": "")} 
      data-theme={theme}
    >
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
      <Outlet />
      <Footer />
    </div>
  );
};

export default FullPageLayout;
