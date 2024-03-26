import { TiPlusOutline } from "react-icons/ti";
import { TiMinusOutline } from "react-icons/ti";
import { twMerge } from "tailwind-merge";
import { ThemeState } from "../../../../types/Theme";
import { useState } from "react";


const Input = ({theme}:ThemeState) => {
  const [quantity, setQuantity] = useState<number>(0)
  return (
    <div className="flex">
      <button
        className={twMerge(
          "btn btn-outline  font-bold rounded-r-none text-xl w-5 !min-h-0 !h-10",
          theme == "dark" ? "btn-accent" : "btn-primary"
        )}
        onClick={()=>setQuantity(prev=>prev>0 ? prev-1 : 0)}
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
        value={quantity}
        onChange={(e)=>{
          const value = parseInt(e.target.value)
          setQuantity(e.target.value==""?0:!isNaN(value) && value>0 ? value:0)
        }}
      />
      <button
        className={twMerge(
          "btn btn-outline  font-bold rounded-l-none text-xl w-5 !min-h-0 !h-10",
          theme == "dark" ? "btn-accent" : "btn-primary"
        )}
        onClick={()=>setQuantity(prev=> prev+1)} //todo: check against the available stock
      >
        <p className="bg-transparent">
          <TiPlusOutline className="bg-transparent" />
        </p>
      </button>
    </div>
  );
};

export default Input;
