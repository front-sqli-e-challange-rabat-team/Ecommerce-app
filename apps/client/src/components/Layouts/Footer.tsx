import { FiSend } from "react-icons/fi";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { GrAppleAppStore } from "react-icons/gr";
import { useAppSelector } from "../../hooks/redux";
import { twMerge } from "tailwind-merge";

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
              'btn !min-h-0 !h-fit !w-fit !px-2 py-2 rounded-lg absolute right-2',
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
        <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
        <p>exclusive@gmail.com</p>
        <p>+88015-88888-9999</p>
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
              className={twMerge(
                "w-full flex btn btn-outline border-2 justify-between",
                theme == "dark" ? "btn-accent" : "btn-primary"
              )}
            >
              <IoLogoGooglePlaystore className="size-7" />
              <div>
                <p className="uppercase text-sm font-bold">get it on</p>
                <p className="font-bold text-base uppercase">google play</p>
              </div>
            </button>
            <button
              className={twMerge(
                "w-full flex btn btn-outline border-2 justify-between",
                theme == "dark" ? "btn-accent" : "btn-primary"
              )}
            >
              <GrAppleAppStore className="size-7" />
              <div>
                <p className="uppercase text-sm font-bold">get it on</p>
                <p className="font-bold text-base uppercase">apple store</p>
              </div>
            </button>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
