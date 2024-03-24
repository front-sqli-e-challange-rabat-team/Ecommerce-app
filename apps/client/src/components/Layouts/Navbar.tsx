import ThemeSwitch from "./ThemeSwitch";

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <ThemeSwitch />
      </div>
    </nav>
  );
};

export default Navbar;
