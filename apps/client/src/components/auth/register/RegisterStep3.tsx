import VerificationInput from "react-verification-input";
import { ThemeState } from "../../../types/Theme";
import { twMerge } from "tailwind-merge";
import { useAppDispatch } from "../../../hooks/redux";
import { setData } from "../../../stores/register.slice";
import useAuth from "../../../hooks/auth";
import { useEffect, useState } from "react";

type Props = {
  theme: ThemeState["theme"];
};

const RegisterStep3 = ({ theme }: Props) => {
  const dispatch = useAppDispatch();
  const { Register } = useAuth();
  const [verificationError, setVerificationError] = useState<boolean>(false);

  const getValue = (value: string) => {
    console.log(value);

    const isValid = true; //TODO:  Check if the code is valid

    if (isValid) {
      dispatch(
        setData({
          data: {
            emailVerified: true,
          },
        })
      );
      Register();
    } else setVerificationError(true);
  };

  useEffect(() => {
    let timer:undefined|number;

    if (verificationError == true) {
        timer = setTimeout(() => {
        setVerificationError(false);
      }, 500);
    }

    return () => clearTimeout(timer);
  }, [verificationError]);

  return (
    <div className="my-7 flex flex-col gap-5 items-center">
      <div className="poppins text-base">
        <p>We just sent an email to the address</p>
        <p className="font-bold">diamobachar06@gmail.com</p>
        <p>Please consult it and write the code down here</p>
      </div>
      <VerificationInput
        validChars="0-9"
        placeholder="_"
        passwordMode
        autoFocus
        classNames={{
          characterSelected: twMerge(
            theme == "nord" ? "outline-slate-400" : "outline-white"
          ),
          character: twMerge(
            "rounded-lg border-2 border-primary",
            verificationError && "border-error"
          ),
          characterFilled: twMerge(
            theme == "nord" ? " text-secondary" : "text-accent",
            verificationError && "text-error"
          ),
          container: twMerge(verificationError && "shake"),
        }}
        onComplete={(value) => getValue(value)}
      />
      <p className="inter text-sm hover:underline hover:cursor-pointer">
        Didn't receive the code?
      </p>
    </div>
  );
};

export default RegisterStep3;
