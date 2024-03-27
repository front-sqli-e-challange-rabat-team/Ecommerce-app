import { BannerProps } from "../../../types/BannerProps";

const Banner: React.FC<BannerProps> = ({ imgUrl }) => {
    return (
        <div className="flex items-center justify-center">
            <img src={imgUrl} alt="banner" className="w-screen h-auto rounded-lg "/>
        </div>
    );
}

export default Banner;