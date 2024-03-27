import BreadCrumbs from "../Breadcrumbs";
import CartTable from "./CartTable";

const Cart = () => {
  return (
    <div className="w-full px-20 my-10">
      <div className="mb-5">
        <BreadCrumbs />
      </div>
      <div className="overflow-x-auto my-5">
        <CartTable/>
      </div>
      <div className="my-10 grid grid-cols-2">
        <div className="py-5 px-16 flex justify-center gap-5">
          <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
          <button className="btn btn-primary">Apply Coupon</button>
        </div>
        <div>
          <div className="border-2 border-neutral rounded-lg py-5 px-10 w-2/3 mx-auto">
            <h1 className="font-bold text-lg mb-5">Cart total</h1>
            <div className="flex justify-between">
              <h2 className="font-semibold">Subtotal:</h2>
              <p className="poppins">1750$</p>
            </div>
            <div className="divider !my-2"></div>
            <div className="flex justify-between">
              <h2 className="font-semibold">Shipping:</h2>
              <p className="poppins">FREE</p>
            </div>
            <div className="divider !my-2"></div>
            <div className="flex justify-between">
              <h2 className="font-semibold">Total:</h2>
              <p className="poppins">1750$</p>
            </div>
            <div className="mt-5 flex justify-center">
              <button className="btn btn-primary ">Apply Coupon</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
