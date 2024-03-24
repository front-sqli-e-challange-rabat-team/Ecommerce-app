import { useEffect } from "react";
import { useAppSelector } from "../../hooks/redux";
import { twMerge } from "tailwind-merge";

export enum btnTypes {
  wide,
  fit,
}

type Props = {
  disabled?: boolean;
  type: btnTypes;
  text: string;
  shouldSubmit?: boolean;
  onclickFct?: () => void;
};
const Button = ({ disabled, text, type, shouldSubmit, onclickFct }: Props) => {
  const { theme } = useAppSelector((state) => state.general);
  const buttonType = shouldSubmit ? "submit" : "button";

  useEffect(() => {
    console.log(text + " " + buttonType);
  }, []);
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
      onClick={onclickFct}
    >
      {text}
    </button>
  );
};

export default Button;
