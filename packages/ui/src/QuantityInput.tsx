import { TiPlusOutline } from "react-icons/ti";
import { TiMinusOutline } from "react-icons/ti";
import { twMerge } from "tailwind-merge";
import { ThemeState } from "../../../apps/client/src/types/Theme";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type Props = ThemeState & {
  unifiedCustomTheme?: {
    dark: string,
    light:string,
    universal?:string
  };
  setter: Dispatch<SetStateAction<number>>
};

export const Input = ({ theme, unifiedCustomTheme, setter }: Props) => {
  const [quantity, setQuantity] = useState<number>(0);
  const [btnThemeClasses, setBtnThemeClasses] = useState<string>("");
  const [inputThemeClasses, setInputThemeClasses] = useState<string>("");

  useEffect(() => {
    if (!unifiedCustomTheme) {
      setBtnThemeClasses(() =>
        theme == "dark" ? "btn-accent" : "btn-primary"
      );
      setInputThemeClasses(() =>
        theme == "dark"
          ? "!input-accent text-accent "
          : "input-primary text-primary "
      );
    }
    else{
      
      setBtnThemeClasses(() =>
        !unifiedCustomTheme.universal ? (theme == "dark" ? unifiedCustomTheme.dark : unifiedCustomTheme.light) : (unifiedCustomTheme.universal)
      );
      setInputThemeClasses(() =>
        !unifiedCustomTheme.universal ? (theme == "dark" ? unifiedCustomTheme.dark : unifiedCustomTheme.light) : (unifiedCustomTheme.universal)
      );
    }
  }, [theme]);


  useEffect(()=>{
    setter(quantity);
  },[quantity])

  return (
    <div className="flex w-fit">
      <button
        className={twMerge(
          "btn btn-outline  font-bold rounded-r-none text-xl w-5 !min-h-0 !h-10",
          btnThemeClasses
        )}
        onClick={() => setQuantity((prev) => (prev > 0 ? prev - 1 : 0))}
      >
        <p className="bg-transparent">
          <TiMinusOutline className="bg-transparent" />
        </p>
      </button>
      <input
        type="text"
        className={twMerge(
          "input input-bordered w-20 h-10 rounded-none text-center font-bold focus:outline-none",
          inputThemeClasses
        )}
        value={quantity}
        onChange={(e) => {
          const value = parseInt(e.target.value);
          setQuantity(e.target.value == "" ? 0 : !isNaN(value) && value > 0 ? value : 0)
        }}
      />
      <button
        className={twMerge(
          "btn btn-outline  font-bold rounded-l-none text-xl w-5 !min-h-0 !h-10",
          btnThemeClasses
        )}
        onClick={() => setQuantity((prev) => prev + 1)} //todo: check against the available stock
      >
        <p className="bg-transparent">
          <TiPlusOutline className="bg-transparent" />
        </p>
      </button>
    </div>
  );
};

