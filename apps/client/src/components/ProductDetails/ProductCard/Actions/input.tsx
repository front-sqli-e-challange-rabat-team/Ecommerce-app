import { TiPlusOutline } from "react-icons/ti";
import { TiMinusOutline } from "react-icons/ti";
import { twMerge } from "tailwind-merge";
import { ThemeState } from "../../../../types/Theme";


const Input = ({theme}:ThemeState) => {
  return (
    <div className="flex">
      <button
        className={twMerge(
          "btn btn-outline  font-bold rounded-r-none text-xl w-5 !min-h-0 !h-10",
          theme == "dark" ? "btn-accent" : "btn-primary"
        )}
      >
        <p className="bg-transparent">
          <TiMinusOutline className="bg-transparent" />
        </p>
      </button>
      <input
        type="text"
        className={twMerge(
          "input input-bordered w-20 h-10 rounded-none text-center font-bold focus:outline-none",
          theme == "dark"
            ? "input-accent text-accent "
            : "input-primary text-primary "
        )}
        defaultValue={0}
      />
      <button
        className={twMerge(
          "btn btn-outline  font-bold rounded-l-none text-xl w-5 !min-h-0 !h-10",
          theme == "dark" ? "btn-accent" : "btn-primary"
        )}
      >
        <p className="bg-transparent">
          <TiPlusOutline className="bg-transparent" />
        </p>
      </button>
    </div>
  );
};

export default Input;
