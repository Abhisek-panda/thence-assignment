import { useNavigate } from "react-router-dom";

import BrunelLogo from "../assets/brunel.png";
import Close from "../assets/close.png";

// eslint-disable-next-line react/prop-types
const Navbar = ({ btnAvailable, btnDisabled }) => {
  const navigate = useNavigate();
  return (
    <nav>
      <div
        className={`flex flex-row justify-between items-center w-[1392px] h-[111.17px]  backdrop-blur-[15.6667px] pl-[52.2222px] pr-[20.8889px] py-[16.9722px] rounded-[65.2778px] ${
          btnAvailable === true && `border-solid border-[#EAEAEA] border`
        } bg-[rgba(255, 255, 255, 0.8)] mx-4 mt-4`}
      >
        <div>
          <img
            src={BrunelLogo}
            alt="brunel logo"
            className="w-[121px] h-[30.5px]"
          />
        </div>
        {btnAvailable ? (
          <div className="flex gap-[16px]">
            <button
              onClick={() => navigate("/form")}
              className="hover:bg-[#F1F1F1] flex flex-row justify-center items-center gap-[5.22px] w-[189.56px] h-[77.22px] px-[41.7778px] py-[26.1111px] rounded-[107.056px] border-[1.30556px] border-solid border-[#EAEAEA] font-manrope leading-[24.59px] font-medium capitalize text-[18px] text-center text-nowrap transition-all"
            >
              Get Projects
            </button>
            <button className="flex flex-row justify-center items-center gap-[15.67px] w-[223.39px] h-[77.22px] pl-[41.7778px] pr-[49.6111px] py-[26.1111px] rounded-[107.056px] hover:bg-[#4E4E4E] bg-[#1c1c1c] font-manrope text-white leading-[24.59px] font-medium capitalize text-[18px] text-center text-nowrap transition-all">
              Onboard Talent
            </button>
          </div>
        ) : !btnDisabled ? (
          <div onClick={() => navigate("/")}>
            <img
              src={Close}
              alt="close-btn"
              className="cursor-pointer transition-all"
            />
          </div>
        ) : undefined}
      </div>
    </nav>
  );
};

export default Navbar;
