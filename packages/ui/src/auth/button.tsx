import { Dispatch, SetStateAction, useEffect } from "react";
import { twMerge } from "tailwind-merge";

export enum btnTypes {
  wide,
  fit,
}

type Props = {
  theme: "dark"|"nord"
  disabled?: boolean;
  type: btnTypes;
  text: string;
  shouldSubmit?: boolean;
  onclickFct?: () => void;
};
export const AuthButton = ({ theme, disabled, text, type, shouldSubmit, onclickFct }: Props) => {
  const buttonType = shouldSubmit ? "submit" : "button";

  return (
    <button
      type={buttonType}
      className={twMerge(
        "btn capitalize btn-wide !rounded-full btn-outline",
        theme == "nord" ? "btn-primary" : "btn-accent",
        type == btnTypes.wide ? "btn-wide" : "",
        type == btnTypes.fit ? "!w-32" : ""
      )}
      disabled={disabled}
      onClick={()=>{onclickFct && onclickFct();}}
    >
      {text}
    </button>
  );
};
