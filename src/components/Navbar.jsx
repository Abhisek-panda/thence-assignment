import BrunelLogo from "../assets/brunel.png";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center border-[1px] rounded-[65.28px] border-[#EAEAEA] ">
        <div>
          <img src={BrunelLogo} alt="brunel logo" />
        </div>
        <div>
          <button>Get Projects</button>
          <button>Onboard Talent</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
