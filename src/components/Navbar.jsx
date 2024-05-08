import BrunelLogo from "../assets/brunel.png";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar mx-4 mt-4">
        <div>
          <img
            src={BrunelLogo}
            alt="brunel logo"
            className="w-[121px] h-[30.5px]"
          />
        </div>
        <div className="flex gap-[16px]">
          <button className="hover:bg-[#F1F1F1] flex flex-row justify-center items-center gap-[5.22px] w-[189.56px] h-[77.22px] px-[41.7778px] py-[26.1111px] rounded-[107.056px] border-[1.30556px] border-solid border-[#EAEAEA] font-manrope leading-[24.59px] font-medium capitalize text-[18px] text-center text-nowrap">
            Get Projects
          </button>
          <button className="flex flex-row justify-center items-center gap-[15.67px] w-[223.39px] h-[77.22px] pl-[41.7778px] pr-[49.6111px] py-[26.1111px] rounded-[107.056px] hover:bg-[#4E4E4E] bg-[#1c1c1c] font-manrope text-white leading-[24.59px] font-medium capitalize text-[18px] text-center text-nowrap">
            Onboard Talent
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
