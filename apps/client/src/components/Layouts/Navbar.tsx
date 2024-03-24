import ThemeSwitch from "./ThemeSwitch";
import { IoSearchOutline } from "react-icons/io5";
const Navbar = () => {
  return (
    <nav className="border-b-2 py-4 w-full flex justify-between items-center pl-20 pr-5">
      <h1 className="capitalize font-black text-2xl h-fit">exclusive</h1>
      <ul className="flex justify-center items-center gap-10">
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
      <div className="flex gap-3">
        <label className="input input-bordered flex items-center gap-2 input-sm">
          <input type="text" className="grow" placeholder="Search" />
          <IoSearchOutline />
        </label>
        <ThemeSwitch />
      </div>
    </nav>
  );
};

export default Navbar;
