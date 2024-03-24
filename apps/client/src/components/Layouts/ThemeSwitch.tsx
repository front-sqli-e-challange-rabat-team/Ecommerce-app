import { useAppDispatch } from "../../hooks/redux";
import { swapTheme } from "../../stores/general.slice";
import { CiCloudSun, CiCloudMoon } from "react-icons/ci";

const ThemeSwitch = () => {
  const dispatcher = useAppDispatch();

  return (
    <label className="swap swap-rotate">
      {/* this hidden checkbox controls the state */}
      <input type="checkbox" onChange={()=>{dispatcher(swapTheme())}}/>

      {/* sun icon */}
      <CiCloudSun className="swap-off fill-current size-7"/>

      {/* moon icon */}
      <CiCloudMoon className="swap-on fill-current size-7"/>
    </label>
  );
};

export default ThemeSwitch;
