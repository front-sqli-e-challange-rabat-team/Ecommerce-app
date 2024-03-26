import { FaApple } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
const TopSection = () => {
    return (
        <section className="grid grid-cols-3 px-16">
        <div className=" mx-10 border-r-2 py-10 px-10">
          <ul className="menu w-full rounded-box poppins font-normal text-base">
            <li>
              <a>Woman's Fashion</a>
            </li>
            <li>
              <a>Men's Fashion</a>
            </li>
            <li>
              <a>Electronics</a>
            </li>
            <li>
              <a>Home & Lifestyle</a>
            </li>
            <li>
              <a>Medicine</a>
            </li>
            <li>
              <a>Sports & Outdoor</a>
            </li>
            <li>
              <a>Baby's & Toys</a>
            </li>
            <li>
              <a>Groceries & Pets</a>
            </li>
            <li>
              <a>Health & Beauty</a>
            </li>
          </ul>
        </div>
        <div className="col-span-2 w-full flex py-10">
          <div className="bg-black w-full h-full grid grid-cols-1 content-center gap-5 text-white px-10">
            <div className="flex  items-center">
              <FaApple className="size-12" />
              <p className="text-xs">Iphone 14 series</p>
            </div>
            <p className="text-5xl font-semibold leading-snug xl:pr-5 2xl:pr-10">
              Up to 10% off Voucher
            </p>
            <a href="" className="hover:underline">
              shop now <FaArrowRightLong className="inline" />
            </a>
          </div>
          <img src="hero_frame.png" alt="" />
        </div>
      </section>
     );
}
 
export default TopSection;