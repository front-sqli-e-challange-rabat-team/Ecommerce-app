import Size from "./size";

const Sizes = () => {
  return (
    <div className="inter flex items-center gap-2">
      <p className="text-base font-semibold">Sizes: </p>
      <div className="join gap-3">
        <Size label="XS"/>
        <Size label="S"/>
        <Size label="M"/>
        <Size label="L"/>
        <Size label="XL"/>
        <Size label="XXL"/>
      </div>
    </div>
  );
};

export default Sizes;
