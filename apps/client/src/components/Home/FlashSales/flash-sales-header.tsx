import { useEffect, useState } from "react";
import SectionHeader from "../Common/section-header";
import { Countdown } from "../../../types/Countdown";


const calculateTimeLeft = (endDate: Date): Countdown => {
  const difference = +endDate - +new Date();
  let timeLeft: Countdown = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const flashEndDate = new Date("2024-3-31");

const FlashSalesHeader: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<Countdown>(
    calculateTimeLeft(flashEndDate)
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(flashEndDate));
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="pt-8">
      <div className="flex flex-col justify-between mb-4 px-4 md:px-8">
        <SectionHeader title="Today's" />

        <div className="flex flex-row items-center">
          <h2 className="text-4xl font-bold mt-7">Flash Sales</h2>
          <div className="flex items-center mt-2 space-x-4">
            {Object.entries(timeLeft).map(([interval, value], index, array) => {
              const isLast = index === array.length - 1;
              return (
                <div
                  key={interval}
                  className="flex items-center justify-center flex-row ml-40"
                >
                  <div className="flex items-center flex-col">
                    <span className="text-base font-light capitalize">
                      {interval}
                    </span>
                    <span className=" px-2 py-1 text-4xl font-semibold rounded ml-2 mr-2">
                      {String(value).padStart(2, "0")}
                    </span>
                  </div>
                  {!isLast && (
                    <span className="text-4xl mt-4 ml-1 font-semibold text-red-600">
                      :
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSalesHeader;
