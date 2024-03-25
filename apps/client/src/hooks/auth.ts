import { z } from "zod";

const useAuth = () => {
  const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1, "Please provide a password"),
  });

  const registerSchemaStep1 = z.object({
    gender: z
      .union([
        z.enum(["male", "female"]),
        z.literal(null),
        z.literal(undefined),
      ])
      .refine((value) => value !== null && value !== undefined, {
        message: "Please select a valid gender",
      }),
    firstname: z.string().min(1, "Please provide a first name"),
    lastname: z.string().min(1, "Please provide a last name")
  });

  const registerSchemaStep2 = z.object({
    email: z.string().email(),
    password: z.string().min(1, "Please provide a password"),
    confirm_password: z.string().min(1, "Please confirm your password"),
  }).refine(
    data => {
        return data.password === data.confirm_password;
    },
    {
        message: "Passwords must match",
        path: ["confirm_password"], // path of error
    },
);

  const login = (data: z.infer<typeof loginSchema>) => {
    console.log(data);
  };

  const Register = (data: z.infer<typeof registerSchemaStep2>) => {
    console.log(data);
  };

  return { loginSchema, registerSchemaStep1, registerSchemaStep2, Register, login };
};

export default useAuth;
