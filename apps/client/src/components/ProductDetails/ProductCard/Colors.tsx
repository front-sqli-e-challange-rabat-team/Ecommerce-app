const Colors = () => {
    return ( 
        <div className="inter flex items-center gap-2">
        <p className="text-base font-semibold">Colors: </p>
        <input
          type="radio"
          name="radio-4"
          className="radio radio-accent"
          checked
        />
        <input type="radio" name="radio-4" className="radio radio-error" />
      </div>
     );
}
 
export default Colors;