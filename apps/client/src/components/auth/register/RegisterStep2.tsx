import Input from "@repo/ui/src/auth/input";
import { FormProvider, useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import useAuth from "../../../hooks/auth";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthButton, btnTypes } from "@repo/ui";
import { useAppDispatch } from "../../../hooks/redux";
import { changeStep, setData } from "../../../stores/register.slice";
import { ThemeState } from "../../../types/Theme";

type Props= {
  currentStep: number,
  theme: ThemeState["theme"]
}

const RegisterStep2 = ({currentStep ,theme}:Props) => {
  const dispatch = useAppDispatch()
  const { registerSchemaStep2 } = useAuth();
  const methods = useForm<z.infer<typeof registerSchemaStep2>>({
    resolver: zodResolver(registerSchemaStep2),
  });

  const confirm = (data: z.infer<typeof registerSchemaStep2>) => {
    console.log(data);
    
    dispatch(setData({
      data:{
        email: data?.email,
        password:data?.password,
      }
    }))

    currentStep<2 && dispatch(changeStep(currentStep+1))
  };

  const previous = () => {
    currentStep> 1 && dispatch(changeStep(currentStep-1))
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(confirm)}
        className="flex flex-col gap-5"
      >
        <label className="form-control w-full flex flex_col justify-center items-center ">
          <div className="label !justify-center">
            <span
              className={twMerge(
                "label-text font-bold text-lg",
                methods.formState.errors.email
                  ? "!text-xs !text-error mb-3"
                  : ""
              )}
            >
              {methods.formState.errors.email?.message
                ? methods.formState.errors.email?.message.toString()
                : "Email address"}
            </span>
          </div>
          <Input registerName="email" />
        </label>
        <div className="flex justify-evenly gap-5">
          <label className="form-control w-full max-w-xs">
            <div className="label !justify-center !pt-0">
              <span
                className={twMerge(
                  "label-text font-bold text-lg",
                  methods.formState.errors.password
                    ? "!text-xs !text-error mb-3"
                    : ""
                )}
              >
                {methods.formState.errors.password?.message
                  ? methods.formState.errors.password?.message.toString()
                  : "Password"}
              </span>
            </div>
            <Input registerName="password" type={"password"} />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label !justify-center !pt-0">
              <span
                className={twMerge(
                  "label-text font-bold text-lg",
                  methods.formState.errors.confirm_password
                    ? "!text-xs !text-error mb-3"
                    : ""
                )}
              >
                {methods.formState.errors.confirm_password?.message
                  ? methods.formState.errors.confirm_password?.message.toString()
                  : "Confirm password"}
              </span>
            </div>
            <Input registerName="confirm_password" type={"password"} />
          </label>
        </div>
        <div className="flex justify-evenly">
          <AuthButton text="Previous" theme={theme} type={btnTypes.fit} disabled={currentStep == 2} onclickFct={previous} shouldSubmit={false}/>
          <AuthButton text="Confirm" theme={theme} type={btnTypes.fit} shouldSubmit={true}/>
      </div>
      </form>
    </FormProvider>
  );
};

export default RegisterStep2;
