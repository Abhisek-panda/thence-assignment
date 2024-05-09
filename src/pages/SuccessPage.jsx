import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import SuccessGreen from "../assets/success-green.png";
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(5);
  useEffect(() => {
    if (timeLeft === 0) {
      console.log("Time left, 0");
      setTimeLeft(null);
      navigate("/");
    }
    if (!timeLeft) return;
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);
  return (
    <section>
      <Navbar btnAvailable={false} btnDisabled={true} />
      <div className="flex flex-col items-center gap-[41px] absolute w-[718px] h-[357px] left-[calc(50%_-_718px/2)] top-[calc(50%_-_357px/2_-_0.5px)] p-0">
        <div>
          <img
            className="hover:scale-50 animate-bounce"
            src={SuccessGreen}
            alt="Success Green"
          />
        </div>
        <div className="flex flex-col items-center gap-4 w-[718px] h-[236px] flex-none order-1 self-stretch grow-0 p-0">
          <p className="w-[237px] h-7 not-italic font-normal text-4xl leading-[110%] flex items-center tracking-[-0.02em] text-[#2DA950] flex-none order-none grow-0 font-covered">
            Success Submitted
          </p>
          <p className="w-[423px] h-[67px] not-italic font-semibold text-[56px] leading-[120%] flex items-center text-center tracking-[-0.02em] text-[#1C1C1C] flex-none order-none grow-0 font-manrope">
            Congratulations
          </p>
          <p className="w-[718px] h-[105px] not-italic font-medium text-[27px] leading-[130%] flex items-center text-center text-[#727272] flex-none order-1 self-stretch grow-0 font-manrope">
            Your request has been successfully submitted to us. We will validate
            your information and reach out to your shortly with updates
          </p>
        </div>
      </div>
      <div className="flex">
        <h1 className="absolute w-[718px] h-[26px] left-[calc(50%_-_718px/2)] not-italic font-normal text-xl leading-[130%] flex items-center justify-center text-center text-[#727272] top-[732px]">
          Redirecting you to Homepage in
          <span className="bold ml-1 text-[#1c1c1c] font-[500]">
            {" "}
            {timeLeft} Seconds
          </span>
        </h1>
      </div>
    </section>
  );
};

export default SuccessPage;
