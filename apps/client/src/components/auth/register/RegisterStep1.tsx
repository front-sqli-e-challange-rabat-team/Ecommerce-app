import Input from "@repo/ui/src/auth/input";
import { FormProvider, useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { useAppDispatch } from "../../../hooks/redux";
import useAuth from "../../../hooks/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AuthButton, btnTypes } from "@repo/ui";
import { changeStep, setData } from "../../../stores/register.slice";
import { Gender } from "../../../types/Register";
import { ThemeState } from "../../../types/Theme";

type Props = {
  currentStep: number,
  theme: ThemeState["theme"]
}

const RegisterStep1 = ({currentStep, theme}:Props) => {
  const dispatch = useAppDispatch()
  const {registerSchemaStep1} = useAuth();
  
  const methods = useForm<z.infer<typeof registerSchemaStep1>>({
    resolver: zodResolver(registerSchemaStep1)
  })

  const next = (data: z.infer<typeof registerSchemaStep1>) => {
    console.log(data);
    
    dispatch(setData({
      data:{
        firstName: data?.firstname,
        lastName:data?.lastname,
        gender: data?.gender == "male" ? Gender.male: Gender.female,
      }
    }))

    currentStep<2 && dispatch(changeStep(currentStep+1))
  }

  const previous = () => {
    currentStep> 1 && dispatch(changeStep(currentStep-1))
  }

  return (
    <FormProvider {...methods}>

    <form onSubmit={methods.handleSubmit(next)} className="flex flex-col gap-5">
      <label className="form-control w-full">
        <div className="label !justify-center">
          <span
            className={twMerge(
              "label-text font-bold text-lg",
              methods.formState.errors.gender ? "!text-xs !text-error mb-3" : ""
            )}
          >
            {methods.formState.errors.gender?.message
              ? methods.formState.errors.gender?.message.toString()
              : "Gender"}
          </span>
        </div>
        <div className="join mx-auto">
          <input
            className={twMerge(
                "join-item btn w-20 btn-outline",
                theme == "dark" ? "btn-accent checked:!text-white checked:!bg-accent checked:!border-accent" : "btn-primary"
            )}
            type="radio"
            aria-label="Male"
            value="male"
            {...methods.register("gender", {onChange: ()=>methods.clearErrors("gender")})}
          />
          <input
            className={twMerge(
                "join-item btn w-20 btn-outline",
                theme == "dark" ? "btn-accent checked:!text-white checked:!bg-accent checked:!border-accent" : "btn-primary"
            )}
            type="radio"
            aria-label="Female"
            value="female"
            {...methods.register("gender",{onChange: ()=>methods.clearErrors("gender")})}
          />
        </div>
      </label>
      <div className="flex justify-evenly gap-5">
        <label className="form-control w-full max-w-xs">
          <div className="label !justify-center !pt-0">
            <span
              className={twMerge(
                "label-text font-bold text-lg",
                methods.formState.errors.firstname ? "!text-xs !text-error mb-3" : ""
              )}
            >
              {methods.formState.errors.firstname?.message
                ? methods.formState.errors.firstname?.message.toString()
                : "First Name"}
            </span>
          </div>
          <Input registerName="firstname" />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label !justify-center !pt-0">
            <span
              className={twMerge(
                "label-text font-bold text-lg",
                methods.formState.errors.lastname ? "!text-xs !text-error mb-3" : ""
              )}
            >
              {methods.formState.errors.lastname?.message
                ? methods.formState.errors.lastname?.message.toString()
                : "Last Name"}
            </span>
          </div>
          <Input registerName="lastname" />
        </label>
      </div>
      <div className="flex justify-evenly">
          <AuthButton text="Previous" theme={theme} type={btnTypes.fit} disabled={currentStep == 2} onclickFct={previous} shouldSubmit={false}/>
          <AuthButton text="Next" theme={theme} type={btnTypes.fit} disabled={currentStep == 2} shouldSubmit={true}/>
      </div>
    </form>
    </FormProvider>
  );
};

export default RegisterStep1;
