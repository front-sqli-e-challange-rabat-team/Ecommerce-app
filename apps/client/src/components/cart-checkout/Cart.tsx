import { ChangeEvent, useState } from "react";

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

const Cart = () => {
  const [total, setTotal] = useState<number>(0);
  return (
    <div className="w-full h-full flex flex-col gap-10">
      <table className="text-start w-full flex flex-col gap-5">
        <thead className="shadow-sm shadow-gray-500">
          <tr className="grid grid-cols-4">
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody className="flex flex-col gap-5">
          {products.map((product) => (
            <tr
              className="grid grid-cols-4 shadow-sm shadow-gray-200"
              key={product.id}
            >
              <td className="flex items-center justify-start gap-2">
                <img className="w-14" src={product.imageUrl} alt="" />
                <span>{product.name}</span>
              </td>
              <td>{product.rating}</td>
              <td>
                <form>
                  <input
                    className="border border-gray-600 w-20"
                    type="number"
                    placeholder="0"
                    min={0}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                      setTotal(() => parseInt(event.target.value) * 5 || 0)
                    }
                  />
                </form>
              </td>
              <td>{total}$</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="flex justify-between">
            <button className="px-5 p-2 border border-black">
              Return to Shop
            </button>
            <button className="px-5 p-2  border border-black">
              Update Cart
            </button>
          </tr>
        </tfoot>
      </table>
      <div className="flex gap-10">
        <form className="flex flex-1 gap-2 h-fit">
          <input className="p-2 border border-gray-600 w-[70%]" type="text" />
          <input
            className="cursor-pointer bg-red-600 text-white p-2 px-5 rounded-sm"
            type="submit"
            value="apply coupon"
          />
        </form>
        <div className="flex flex-1 flex-col gap-2 p-3 border border-black shadow-md shadow-gray-500">
          <h2>Cart total</h2>
          <span className="border-b border-gray-600">subtotal:</span>
          <span className="border-b border-gray-600">shipping:</span>
          <span>total:</span>
          <button className="cursor-pointer bg-red-600 text-white p-2 rounded-sm">
            Process to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
