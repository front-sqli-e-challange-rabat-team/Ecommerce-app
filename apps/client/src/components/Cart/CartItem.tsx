import {Input} from "@repo/ui/src/QuantityInput";
import { MdCancel } from "react-icons/md";
import { useAppSelector } from "../../hooks/redux";
import { useState } from "react";

type Props = {
  product:{
    id:number,
    imageUrl:string,
    name:string,
    discountRate:number|null,
    originalPrice: number,
    rating: number,
    reviewCount: number
  }
}

const CartItem = ({product}:Props) => {
    const {theme} = useAppSelector(state=>state.general)
    const [quantity, setQuantity] = useState<number>(0);
    return ( 
        <tr className="border-b-2 border-base-300">
          <td className="grid grid-cols-2 justify-items-center place-items-center gap-5">
            <img
              src={product.imageUrl}
              alt=""
              className="size-20 ml-auto border-2 rounded-lg border-base-300"
            />
            <p className="font-bold mr-auto poppins">{product.name}</p>
          </td>
          <td className="text-center">
            <p className="font-bold">${product.originalPrice}</p>
          </td>
          <td>
            <div className="flex flex-col items-center justify-center">
              <Input theme={theme} unifiedCustomTheme={
                {
                    dark:  "!border-white text-white ",
                    light: "!border-neutral"
                }
              }
              setter={setQuantity}
              />
            </div>
          </td>
          <td className="text-center">
            <p className="font-bold">${(product.originalPrice * quantity).toFixed(2)}</p>
          </td>
          <td className="text-center">
            <div className="flex flex-col justify-center items-center">
              <MdCancel className="size-8 hover:text-red-500 hover:cursor-pointer" />
            </div>
          </td>
        </tr>
     );
}
 
export default CartItem;