import { twMerge } from "tailwind-merge";
import { ThemeState } from "../../../types/Theme";

type Props = ThemeState & {
    url:string,
    onClick: (imgUrl: string)=>void
}

const Banner = ({theme, url, onClick}:Props) => {
    return ( 
        <img
          src={url}
          className={twMerge(
            "h-32 object-cover border-2 rounded-lg shadow-lg",
            theme == "dark" ? "border-white" : "border-base-300"
          )}
          onClick={()=>onClick(theme)}
        />
     );
}
 
export default Banner;