import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const SuccessPage = () => {
  const [timeLeft, setTimeLeft] = useState(5);
  useEffect(() => {
    if (timeLeft === 0) {
      console.log("Time left, 0");
      setTimeLeft(null);
    }
    if (!timeLeft) return;
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);
  return (
    <section>
      <Navbar />
      <div>
        <p>Success Submitted</p>
        <p>Congratulations</p>
        <p>
          Your request has been successfully submitted to us. We will validate
          your information and reach out to your shortly with updates
        </p>
      </div>
      <div className="flex">
        <h1>Redirecting you to Homepage in {timeLeft} Seconds</h1>
      </div>
    </section>
  );
};

export default SuccessPage;
