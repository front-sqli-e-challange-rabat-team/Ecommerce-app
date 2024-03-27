
const Rating = () => {
    return ( 
        <div className="flex gap-5 poppins font-light text-sm">
            <div className="rating rating-sm">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            </div>
            <p>(150 Reviews)</p>
            <p>|</p>
            <p className="text-green-400 text-sm">In Stock</p>
        </div>
     );
}
 
export default Rating;