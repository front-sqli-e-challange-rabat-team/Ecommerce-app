import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodType, z } from "zod";
const products = [
  {
    id: 1,
    imageUrl:
      "https://img.freepik.com/free-photo/new-pair-white-sneakers-isolated-white_93675-130969.jpg",
    name: "White Sneakers",
    discountRate: 50,
    originalPrice: 1160,
    rating: 3,
    reviewCount: 65,
  },
  {
    id: 2,
    imageUrl:
      "https://img.freepik.com/free-photo/handbag-isolated_1203-7955.jpg",
    name: "Elegant Handbag",
    discountRate: 30,
    originalPrice: 249.99,
    rating: 4.5,
    reviewCount: 89,
  },
  {
    id: 3,
    imageUrl:
      "https://img.freepik.com/free-photo/blue-jeans-isolated_1203-7954.jpg",
    name: "Classic Blue Jeans",
    discountRate: null,
    originalPrice: 79.99,
    rating: 4,
    reviewCount: 34,
  },
  {
    id: 4,
    imageUrl:
      "https://img.freepik.com/free-photo/black-leather-boots-isolated_1203-7967.jpg",
    name: "Leather Boots",
    discountRate: 20,
    originalPrice: 150,
    rating: 4.8,
    reviewCount: 78,
  },
  {
    id: 5,
    imageUrl:
      "https://img.freepik.com/free-photo/sunglasses-isolated_1203-7696.jpg",
    name: "Aviator Sunglasses",
    discountRate: 15,
    originalPrice: 85,
    rating: 3.5,
    reviewCount: 43,
  },
];

type BillingData = {
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  phoneNumber: number;
  email: string;
};
const Checkout = () => {
  const schema: ZodType<BillingData> = z.object({
    firstName: z.string().min(3),
    lastName: z.string().min(3),
    street: z.string().min(3),
    city: z.string().min(3),
    phoneNumber: z.number().min(10).max(10),
    email: z.string().email(),
  });

  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm<BillingData>({
    resolver: zodResolver(schema),
  });
  const submitData = (data: BillingData) => {
    console.log(data);
  };
  return (
    <>
      <h2 className="py-3 text-lg font-semibold">Billing details</h2>
      <div className="grid grid-cols-2 gap-20">
        <div className="flex flex-col gap-2">
          <form
            className="flex flex-col gap-3"
            onSubmit={handleSubmit(submitData)}
          >
            <div className="flex flex-col">
              <label htmlFor="firstName">First Name: </label>
              <input
                className="p-1 bg-gray-300 rounded-md"
                type="text"
                {...register("firstName")}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName">Last Name:</label>
              <input
                className="p-1 bg-gray-300 rounded-md"
                type="text"
                {...register("lastName")}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="street">Street address:</label>
              <input
                className="p-1 bg-gray-300 rounded-md"
                type="text"
                {...register("street")}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="city">Town/city:</label>
              <input
                className="p-1 bg-gray-300 rounded-md"
                type="text"
                {...register("city")}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phoneNumber">Phone number:</label>
              <input
                className="p-1 bg-gray-300 rounded-md"
                type="number"
                {...register("phoneNumber")}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email address</label>
              <input
                className="p-1 bg-gray-300 rounded-md"
                type="email"
                {...register("email")}
              />
            </div>
            <div className="flex gap-2">
              <input
                className="p-1 bg-gray-300 rounded-md"
                type="checkbox"
                name="check"
              />
              <label htmlFor="next-checkout">
                safe this information for faster check-out next time
              </label>
            </div>
            <input
              className="cursor-pointer bg-red-600 text-white w-[50%] p-2 rounded-md self-center"
              type="submit"
              value="Place order"
              disabled={!isDirty || !isValid}
            />
          </form>
        </div>
        <div className="flex flex-col gap-5">
          <ul className="flex flex-col gap-2">
            {products.map((product) => (
              <li
                className="grid grid-cols-4 shadow-sm shadow-gray-200"
                key={product.id}
              >
                <img className="w-14" src={product.imageUrl} alt="" />
                <span>{product.name}</span>
                <span>{}$</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2">
            <span className="border-b border-gray-500">subtotal: </span>
            <span className="border-b border-gray-500">shipping: </span>
            <span>total: </span>
          </div>
          <form className="flex gap-2">
            <input className="p-2 border border-gray-600 w-[70%]" type="text" />
            <input
              className="cursor-pointer bg-red-600 text-white p-2 px-5 rounded-sm"
              type="submit"
              value="apply coupon"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Checkout;
