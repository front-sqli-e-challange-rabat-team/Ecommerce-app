import { MdPhone, MdComputer, MdWatch, MdPhotoCamera, MdHeadset, MdGames } from 'react-icons/md'; // Import icons you need
import CategoryCard from './category-card';
import {v4 as uuidv4} from "uuid";
// Define your categories and corresponding icons
const categories = [
  { label: 'Phones', Icon: MdPhone },
  { label: 'Computers', Icon: MdComputer },
  { label: 'SmartWatch', Icon: MdWatch },
  { label: 'Camera', Icon: MdPhotoCamera },
  { label: 'Headphones', Icon: MdHeadset },
  { label: 'Gaming', Icon: MdGames },
];

const CategoriesCarousel: React.FC = () => {
  return (
    <div className="flex justify-around scale-125">
      {categories.map((category) => (
        <div className="mx-4" key={uuidv4()}>
          <CategoryCard label={category.label} Icon={category.Icon}/>
        </div>
      ))}
    </div>
  );
};

export default CategoriesCarousel;
