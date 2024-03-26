interface StarIconProps {
    filled: boolean;
    half: boolean;
  }
  
  const StarIcon: React.FC<StarIconProps> = ({ filled, half }) => {
    // Determine the class to apply based on the filled and half props
    const fillColor = filled ? 'fill-yellow-500' : 'fill-gray-300';
    const clipPath = half ? 'clip-half-star' : '';
  
    return (
      <div className={`star-icon ${clipPath}`}>
        <svg className={`h-6 w-6 ${fillColor}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 .587l3.668 7.425 8.332 1.212-6.001 5.851 1.415 8.259L12 18.897l-7.414 3.437 1.415-8.259-6.001-5.851 8.332-1.212L12 .587z" />
        </svg>
      </div>
    );
  };
  

  
  export default StarIcon;