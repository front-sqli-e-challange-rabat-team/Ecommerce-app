import {v4 as uuidv4} from "uuid";
interface Props {
  rating: number;
}

const StarRating= ({ rating }:Props) => {
  return (
    <div className="rating rating-md">
      {
        [...Array(5)].map((_, index)=>(
          index+1<=Math.floor(rating)?
          (
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            key={uuidv4()}
          />)  :
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-slate-400"
            key={uuidv4()}
          />    
        ))
      }
    </div>
  );
};

export default StarRating;
