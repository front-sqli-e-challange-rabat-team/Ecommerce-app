import { FaRegCheckCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
const RegistrationSummary = () => {
  const [countdownValue, setCountdownValue] = useState<number>(3);
  const [redirect, setRedirect] = useState<boolean>(false);
  useEffect(() => {
    if (countdownValue !== 0) {
      setTimeout(() => {
        setCountdownValue(countdownValue - 1);
      }, 1000);
    }
    else
    {
        let timer:undefined|number;
        timer = setTimeout(()=>{
            setRedirect(true)
        },100)
        return ()=>clearTimeout(timer)
    }
  }, [countdownValue]);

  return (
    <div className="flex flex-col justify-center items-center mb-5">
      <div className="flex justify-center items-center gap-6 rounded-xl bg-white p-10 mb-10">
        <FaRegCheckCircle className="w-24 h-24 text-emerald-400" />
        <div>
          <p className="text-base">
            <span className="font-bold">Congratulations!</span> You have successfully made your account.
          </p>
          <p className="text-base">
            We wish you a happy shopping.
          </p>
        </div>
      </div>
      <div
        className={`flex flex-col items-center p-2 bg-base-100 rounded-box text-base-content my-5 ${
          countdownValue === 0 ? "bg-success text-base-100" : ""
        }`}
      >
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": countdownValue }}></span>
        </span>
        seconds
      </div>
      {redirect ? <Navigate to={"/home"} /> : null}
    </div>
  );
};

export default RegistrationSummary;
