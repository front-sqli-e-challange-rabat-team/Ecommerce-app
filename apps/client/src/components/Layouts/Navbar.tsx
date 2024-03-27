import ThemeSwitch from "./ThemeSwitch";
import Profile from "../../assets/profile.svg";
import Cart from "../../assets/cart.svg";
import Logout from "../../assets/logout.svg";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [menuVisibility, setMenuVisibility] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const closeMenu = (event: MouseEvent) => {
    if (ref && ref.current && !ref.current.contains(event.target as Node)) {
      setMenuVisibility(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", closeMenu);

    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  }, []);

  return (
    <nav className="border-b-2 py-4 w-full flex justify-between items-center pl-20 pr-5">
      <h1 className="capitalize font-black text-2xl h-fit">exclusive</h1>
      <ul className="flex justify-center items-center gap-10">
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
      <div className="flex gap-3 relative" ref={ref}>
        <label className="input input-bordered flex items-center gap-2 input-sm">
          <input type="text" className="grow" placeholder="Search" />
          <IoSearchOutline />
        </label>
        <button
          onClick={() => setMenuVisibility((prevVisibility) => !prevVisibility)}
        >
          P
        </button>
        {menuVisibility && (
          <ul className="menu bg-base-200 w-56 rounded-box absolute top-[100%]">
            <li>
              <Link
                to="/"
                onClick={() =>
                  setMenuVisibility((prevVisibility) => !prevVisibility)
                }
              >
                <img className="w-8" src={Profile} alt="profile" />
                Item 2
              </Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={() =>
                  setMenuVisibility((prevVisibility) => !prevVisibility)
                }
              >
                <img className="w-8" src={Cart} alt="profile" />
                Item 1
              </Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={() =>
                  setMenuVisibility((prevVisibility) => !prevVisibility)
                }
              >
                <img className="w-8" src={Logout} alt="profile" />
                Item 3
              </Link>
            </li>
          </ul>
        )}
        <ThemeSwitch />
      </div>
    </nav>
  );
};

export default Navbar;
