import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="flex justify-between items-center gap-2.5 flex-none order-1 grow-0 p-[60px] rounded-[40px] bg-[#f5f5f5] mx-4 mb-6">
        <p className=" not-italic font-medium text-lg leading-[110%] flex items-center text-[#1C1C1C] flex-none  grow-0 font-manrope justify-center">
          <span>
            <FaRegCopyright className="h-[20px] w-[20px] text-[#1c1c1c] mr-2" />
          </span>
          Talup 2023. All rights reserved
        </p>
        <div className="flex gap-[52px]">
          <p className="font-manrope w-[162px] h-5 not-italic font-normal text-lg leading-[110%] flex items-center underline text-[#1C1C1C] flex-none order-none grow-0">
            Terms & Conditions
          </p>
          <p className="font-manrope w-[162px] h-5 not-italic font-normal text-lg leading-[110%] flex items-center underline text-[#1C1C1C] flex-none order-none grow-0">
            Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
