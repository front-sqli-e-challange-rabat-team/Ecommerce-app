import { FiSend } from "react-icons/fi";
import { FaGooglePlay } from "react-icons/fa6";
import { useAppSelector } from "../../hooks/redux";
import { twMerge } from "tailwind-merge";
import { BsApple } from "react-icons/bs";

const Footer = () => {
  const { theme } = useAppSelector((state) => state.general);

  return (
    <footer className="footer xl:p-5 2xl:p-10 bg-base-200 text-base-content justify-evenly border-t-2">
      <section>
        <p className="capitalize font-black text-2xl h-fit">exclusive</p>
        <p>subscribe for 10% off at your first purchase</p>
        <label className="input input-bordered flex items-center gap-2 relative">
          <input
            type="text"
            className=" placeholder:text-sm "
            placeholder="Enter your email"
          />
          <button
            className={twMerge(
              "btn !min-h-0 !h-fit !w-fit !px-2 py-2 rounded-lg absolute right-2",
              theme == "dark" ? "btn-accent" : "btn-primary"
            )}
          >
            <FiSend
              className={twMerge(
                "size-5",
                theme == "dark" ? "text-black" : "text-white"
              )}
            />
          </button>
        </label>
      </section>
      <section>
        <p className="capitalize font-semibold text-lg">support</p>
        <p>SQLi Rabat</p>
        <p>khorafi@gmail.com</p>
        <p>+0123-45-6789</p>
      </section>
      <nav>
        <p className="capitalize font-semibold text-lg">Account</p>
        <a href="" className="capitalize hover:underline">
          my account
        </a>
        <a href="" className="capitalize hover:underline">
          wishlist
        </a>
        <a href="" className="capitalize hover:underline">
          cart
        </a>
        <a href="" className="capitalize hover:underline">
          shop
        </a>
      </nav>
      <nav>
        <p className="capitalize font-semibold text-lg">Quick links</p>
        <a href="" className="capitalize hover:underline">
          Privacy Policy
        </a>
        <a href="" className="capitalize hover:underline">
          Terms of use
        </a>
        <a href="" className="capitalize hover:underline">
          Contact
        </a>
        <a href="" className="capitalize hover:underline">
          FAQ
        </a>
      </nav>
      <section>
        <p className="capitalize font-semibold text-lg xl:text-center 2xl:text-left w-full">
          Download App
        </p>
        <div className="flex justify-center items-center gap-2">
          <img src="/qrCode.svg" alt="" className="size-24 hidden 2xl:block" />
          <div className="mx-5 flex flex-col gap-3">
            <button
              type="button"
              className={twMerge(
                "inline-flex items-center justify-center border-2 rounded-full py-2.5 px-6 text-center text-white no-underline outline-none transition-all duration-200 hover:bg-transparent",
                theme == "nord"
                  ? "border-black bg-black text-white  hover:text-black"
                  : "border-white bg-white text-black  hover:text-white"
              )}
            >
              <div className="mr-3">
              <FaGooglePlay className="size-7"/>
              </div>
              <div>
                <div className="text-xs">GET IT ON</div>
                <div className="-mt-1 font-sans text-xl font-semibold">
                  Google Play
                </div>
              </div>
            </button>

            <a
              href="#"
              className={twMerge(
                "inline-flex items-center justify-center border-2 rounded-full py-2.5 px-6 text-center text-white no-underline outline-none transition-all duration-200 hover:bg-transparent",
                theme == "nord"
                  ? "border-black bg-black text-white  hover:text-black"
                  : "border-white bg-white text-black  hover:text-white"
              )}
            >
              <BsApple className="size-8" />
              <span className="texts ml-4 flex flex-col items-start">
                <span className="text-1 mb-1 text-xs leading-4">
                  Download form
                </span>
                <span className="text-2 font-semibold">App store</span>
              </span>
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
