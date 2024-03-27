import BreadCrumbs from "../Breadcrumbs";
import Showcase from "./Showcase";
import Card from "./Card";

const ProductDetails = () => {
  return (
    <div className="w-3/4 mx-auto py-5">
      <BreadCrumbs />
      <div className="w-full grid grid-cols-3 my-5 ">
        <Showcase/>
        <Card/>
      </div>
    </div>
  );
};

export default ProductDetails;
