import React from 'react';
import { FiSmartphone } from "react-icons/fi";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { CgAppleWatch } from "react-icons/cg";
import { PiCamera } from "react-icons/pi";
import { PiHeadphones } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";
import CategoryCard from './category-card';

const categories = [
  { label: 'Phones', Icon: FiSmartphone },
  { label: 'Computers', Icon: HiOutlineComputerDesktop },
  { label: 'SmartWatch', Icon: CgAppleWatch },
  { label: 'Camera', Icon: PiCamera },
  { label: 'Headphones', Icon: PiHeadphones },
  { label: 'Gaming', Icon: IoGameControllerOutline },
];

const CategoriesCarousel: React.FC = () => {
  return (
    <div className="flex justify-around">
      {categories.map((category, index) => (
        <div className="mx-4">
          <CategoryCard key={index} label={category.label} Icon={category.Icon} />
        </div>
      ))}
    </div>
  );
};

export default CategoriesCarousel;
