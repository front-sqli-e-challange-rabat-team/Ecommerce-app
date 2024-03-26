
interface BannerProps {
    imgUrl: string;
}

const Banner: React.FC<BannerProps> = ({ imgUrl }) => {
    return (
        <div className="mt-20 px-48 flex items-center justify-center">
            <img src={imgUrl} alt="banner" className="w-full rounded-lg"/>
        </div>
    );
}

export default Banner;