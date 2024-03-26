import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodType, z } from "zod";

type UserData = {
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  currentPassword?: string;
  newPassword?: string;
  confirmedPassword?: string;
};

const Profile = () => {
  const schema: ZodType<UserData> = z.object({
    firstName: z.string().min(3),
    lastName: z.string().min(3),
    address: z.string(),
    email: z.string().email(),
    currentPassword: z.string(),
    newPassword: z.string(),
    confirmedPassword: z.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm<UserData>({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data: UserData) => {
    console.log(data);
  };
  return (
    <div>
      <h2 className="text-lg font-semibold">Edit profile</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="">First name</label>
            <input
              className="p-1 bg-gray-300 rounded-md"
              type="text"
              {...register("firstName")}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Last name</label>
            <input
              className="p-1 bg-gray-300 rounded-md"
              type="text"
              {...register("lastName")}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Email</label>
            <input
              className="p-1 bg-gray-300 rounded-md"
              type="email"
              {...register("email")}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Address</label>
            <input
              className="p-1 bg-gray-300 rounded-md"
              type="text"
              {...register("address")}
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h2>Password change</h2>
          <input
            className="p-1 bg-gray-300 rounded-md"
            type="password"
            placeholder="Old password"
          />
          <input
            className="p-1 bg-gray-300 rounded-md"
            type="password"
            placeholder="New password"
          />
          <input
            className="p-1 bg-gray-300 rounded-md"
            type="password"
            placeholder="Confirm password"
          />
        </div>
        <div>
          <button className="border border-gray-600 p-2 px-5 rounded-sm">
            Cancel
          </button>
          <input
            className="cursor-pointer bg-red-600 text-white p-2 px-5 rounded-sm"
            type="submit"
            value="Save changes"
            disabled={!isValid || !isDirty}
          />
        </div>
      </form>
    </div>
  );
};

export default Profile;
