import { twMerge } from "tailwind-merge"
import { useAppSelector } from "../../../../hooks/redux"

type Props = {
    label:string
}
const Size = ({label}:Props) => {
    const {theme} = useAppSelector((state)=> state.general)
    return ( 
        <input
          className={twMerge(
            "join-item btn border-2 w-10 !rounded-lg !h-5 checked:!bg-accent ",
            theme=="dark"?"!border-white bg-base-100 checked:!border-white":"!border-black bg-white checked:!border-black"
          )}
          type="radio"
          name="options"
          aria-label={label}
        />
     );
}
 
export default Size;