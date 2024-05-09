import { FaCircle } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

import Sparkle from "../assets/sparkle.png";
import Rocket from "../assets/rocket.png";

export const Hero = () => {
  return (
    <>
      <div className="mx-4 mt-10">
        <div className="flex flex-col justify-center items-center">
          <p className="font-covered h-7 not-italic font-normal text-4xl leading-[110%] flex items-center tracking-[-0.02em] text-[#2DA950]">
            Success Stories
          </p>
          <p className="w-[588px] h-[134px] not-italic font-semibold text-[56px] leading-[120%] flex items-center text-center tracking-[-0.02em] text-[#1C1C1C] font-manrope">
            Every success journey weve encountered.
          </p>
        </div>
        <div className="flex w-[1233px] mt-10 mx-4">
          <div>
            <ClientDetails />
          </div>
          <div>
            <HeroCarousel />
          </div>
        </div>
      </div>
    </>
  );
};

const HeroCarousel = () => {
  return (
    <>
      <div>
        <div>
          <p className="absolute w-[398px] h-48 not-italic font-semibold text-[40px] leading-[120%] flex items-center tracking-[-0.02em] text-[#1C1C1C] left-[897px] top-[440px] font-manrope">
            Enhance fortune 50 companys insights team&apos;s research
            capabilities
          </p>
          <div className="flex flex-row items-start gap-3 absolute w-[56.25px] h-[10.75px] p-0 left-[897px] top-[687px]">
            <FaCircle className="w-[10.75px] h-[10.75px] flex-none order-none grow-0 text-[#2DA950] hover:w-[9px] hover:h-[9px] transition-all" />
            <FaCircle className="w-[10.75px] h-[10.75px] flex-none order-none grow-0 text-[#E4E3E3] hover:w-[9px] hover:h-[9px] transition-all" />
            <FaCircle className="w-[10.75px] h-[10.75px] flex-none order-none grow-0 text-[#E4E3E3] hover:w-[9px] hover:h-[9px] transition-all" />
          </div>
        </div>
        <button className="flex flex-row justify-center items-center gap-[15.67px] w-[223.39px] h-[77.22px] pl-[41.7778px] pr-[49.6111px] py-[26.1111px] rounded-[107.056px] hover:bg-[#4E4E4E] bg-[#1c1c1c] font-manrope text-white leading-[24.59px] font-medium capitalize text-[18px] text-center text-nowrap absolute left-[897px] top-[828px] transition-all">
          Explore More{" "}
          <span>
            <FaArrowRight className="w-[24px] h-[24px]" />
          </span>
        </button>
      </div>
    </>
  );
};

const ClientDetails = () => {
  return (
    <>
      <div className=" w-[727.49px] h-[596px] flex flex-col">
        <div className=" w-[506.98px] h-[546.27px] absolute left-[197.81px] ">
          <img
            src="https://s3-alpha-sig.figma.com/img/c086/323e/b8fae54c91face434e9ea448a875ea3e?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CPPJu~LH5jYqxc8GcYbYi8GpYZgu3j-AFGk6P5AmeOJnOVh~MFFvaY-W2zLzP1Z-nbTnsFqaK9IwMhqY17hc~mTOe-T65fjKPsSLz2IuGlJPXLjCD0Nft~wq1uZntYN3HhCA5uVhv~0Et663QLCcv3lOLUCpuJFYrd1zDpR94UWGVhMmI-PnyW1EWDkGgfPIdMIBlyMQ5X9F7n2nNNI55Hp56B3F~tOPgUcBN9jDOTv2kKq1BuNYd-QxrPNSlQ~iJKerpafsOWRN14nu-xFnt8KbvT-IrBC3BatAs~MMcHy5IJBnBrAol9VY6q2kPz1p1ifSVXMX3tnrb9N4L74Zpg__"
            alt="Expression of Excitement of a Lady"
            className=" object-cover w-[506.98px] h-[546.27px] rounded-[50.6978px] object-top"
          />
        </div>
        <div className="flex flex-col items-start gap-2.5 isolate absolute w-[267.82px] h-[239px] p-[30px] rounded-[27.107px] left-[62px] top-[483px] bg-[#ffffff] shadow-white-shadow hover:left[60px] hover:top-[475px] transition-all">
          <img
            src={Sparkle}
            alt="Sparkle Img"
            className="absolute w-[79.17px] h-[78.48px] flex-none order-2 grow-0 z-[2] left-2.5 top-[-0.30rem]"
          />
          <p className="w-[121px] h-[77px] not-italic font-medium text-[64px] leading-[120%] tracking-[-0.03em] text-[#1C1C1C] flex-none order-none grow-0 z-0 font-switzer">
            40%
          </p>
          <p className="w-[207.82px] h-[92px] not-italic font-medium text-lg leading-[130%] flex items-center text-[#828282] flex-none order-1 grow-0 z-[1] font-manrope">
            Achieved reduction in project execution time by optimising team
            availability
          </p>
        </div>
        <div className="flex flex-row items-center gap-3.5 absolute w-[245px] h-[88px] shadow-staff-shadow pl-4 pr-8 py-4 rounded-[111.535px] left-[148.19px] top-[781.71px] bg-[#ffffff]  hover:top-[775px] transition-all">
          <div>
            <img src={Rocket} alt="" />
          </div>
          <div>
            <p className="w-[92px] h-[33px] not-italic font-bold text-2xl leading-[33px] uppercase text-[#1C1C1C] flex-none order-none grow-0 font-manrope">
              10 Days
            </p>
            <p className="w-[131px] h-[21px] not-italic font-medium text-base leading-[130%] flex items-center text-[#828282] flex-none order-1 grow-0">
              Staff deployment
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start gap-5 absolute w-[290.49px] h-[239px] shadow-green-shadow pl-9 pr-[30px] pt-[34px] pb-10 rounded-[28.3564px] left-[499px] top-[726px] bg-[#002e18] text-white hover:top-[720px] hover:left[490px] transition-all">
          <div className="flex items-baseline justify-center gap-2">
            <p className="w-[119px] h-[76px] not-italic font-medium text-[63.3723px] leading-[120%] tracking-[-0.03em] text-white flex-none order-none grow-0 font-switzer">
              $0.5
            </p>
            <p className="w-[91px] h-8 not-italic font-medium text-[22.814px] leading-[140%] tracking-[0.01em] uppercase text-[#A6A3A0] flex-none order-1 grow-0 font-switzer">
              Million
            </p>
          </div>
          <p className="w-[224.49px] h-[69px] not-italic font-medium text-lg leading-[130%] flex items-center text-[#CCCCCC] flex-none order-1 grow-0 font-manrope">
            Reduced client expenses by saving on hiring and employee costs.
          </p>
        </div>
      </div>
    </>
  );
};
