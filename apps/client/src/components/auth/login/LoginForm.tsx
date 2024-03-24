import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useAuth from "../../../hooks/auth";
import Button, { btnTypes } from "../../../ui/auth/button";
import Input from "../../../ui/auth/input";
import { twMerge } from "tailwind-merge";

const LoginForm = () => {
  const { loginSchema, login } = useAuth();
  const methods = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
  });

  return (
    <FormProvider {...methods}>
      <form
        className="w-full flex flex-col justify-center items-center mx-5"
        onSubmit={methods.handleSubmit(login)}
      >
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span
              className={twMerge(
                "label-text",
                methods.formState.errors.email ? "!text-error" : ""
              )}
            >
              {methods.formState.errors.email?.message || "Email Address"}
            </span>
          </div>
          <Input registerName="email" />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span
              className={twMerge(
                "label-text",
                methods.formState.errors.email ? "!text-error" : ""
              )}
            >
              {methods.formState.errors.password?.message || "Password"}
            </span>
          </div>
          <Input registerName="password" />
        </label>
        <a
          href=""
          className="my-2 capitalize hover:underline ml-auto text-xs 2xl:text-sm"
        >
          forgot password?
        </a>
        <div className="w-full mt-2">
          <Button text="login" shouldSubmit={true} type={btnTypes.wide} />
          <a href="" className="block mt-3 hover:underline text-xs 2xl:text-sm">
            First time here? Create an account
          </a>
        </div>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
