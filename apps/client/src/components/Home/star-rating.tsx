// StarRating.tsx
import React from 'react';
import StarIcon from './star-icon';

interface StarRatingProps {
    rating: number;
  }
  
  const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, index) => {
          const filled = index + 1 <= Math.floor(rating);
          const half = index + 1 === Math.ceil(rating) && rating % 1 >= 0.5;
          return <StarIcon key={index} filled={filled} half={half} />;
        })}
      </div>
    );
  };
  

export default StarRating;
