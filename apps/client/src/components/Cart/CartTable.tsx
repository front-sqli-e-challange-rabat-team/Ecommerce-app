import CartItem from "./CartItem";
import {mockProducts} from "../../mock-data"
const CartTable = () => {
  
  return (
    <table className="table border-b-2 text-center">
      {/* head */}
      <thead>
        <tr className="bg-base-200 border-2 border-base-300">
          <th>Product</th>
          <th>Unit Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          mockProducts.map((prod)=>(
            <CartItem key={prod.id} product={prod}/>
          ))
        }
      </tbody>
    </table>
  );
};

export default CartTable;
