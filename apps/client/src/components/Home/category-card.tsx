import React from 'react';
import { IconType } from 'react-icons'; // This imports the type for icons

interface CategoryCardProps {
  label: string;
  Icon: IconType; // Use the IconType for the icon component
}

const CategoryCard: React.FC<CategoryCardProps> = ({ label, Icon }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 border rounded shadow w-32 h-32 btn btn-outline">
      <Icon className="mb-2 text-xl" /> {/* Style as needed */}
      <span>{label}</span>
    </div>
  );
};

export default CategoryCard;
