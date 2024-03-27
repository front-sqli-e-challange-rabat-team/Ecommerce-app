import { useAppSelector } from "../../../hooks/redux";
import RegisterStep1 from "./RegisterStep1";
import RegisterStep2 from "./RegisterStep2";

const Register = () => {
  const { step } = useAppSelector((state) => state.register);
  const {theme} = useAppSelector(state=> state.general)
  return (
    <section className="flex justify-center items-center h-full">
      <div className="card lg:card-side bg-base-300 shadow-xl ">
        <div className="flex justify-center items-center rounded-lg ">
          <img
            src="testCover.jpeg"
            className="rounded-l-lg h-full w-80 2xl:w-96"
          />
        </div>
        <div className="card-body justify-center items-center text-center">
          <h1 className="font-bold text-xl">Create Your Account</h1>
          {step == 1 ? <RegisterStep1 currentStep={step} theme={theme}/> : <RegisterStep2 theme={theme} currentStep={step}/>}
        </div>
      </div>
    </section>
  );
};

export default Register;
