import { FaRegHeart } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import Input from "./Actions/input";
import { ThemeState } from "../../../types/Theme";
const Actions = ({theme}:ThemeState) => {
  return (
    <div className="flex gap-5">
      <Input theme={theme}/>
      <button
            className={twMerge(
                "btn !min-h-0 !h-10",
                theme == "dark" ? "btn-accent" : "btn-primary text-white"
              )}
      >
        Buy Now
      </button>
      <button
        className={twMerge(
            "btn !min-h-0 !h-10",
            theme=="dark" ? "btn-accent":"btn-primary text-white"
        )}
      >
        <FaRegHeart className="size-5" />
      </button>
    </div>
  );
};

export default Actions;
