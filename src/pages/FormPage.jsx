import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Navbar from "../components/Navbar";

const FormPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [isValid, setIsValid] = useState({
    isValidName: false,
    isValidEmail: false,
  });
  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
    setIsValid({
      ...isValid,
      isValidEmail: emailRegex.test(formData.email),
      isValidName: formData.name.trim().length > 0,
    });
  };

  const isBtnDisabled = !isValid.isValidEmail || !isValid.isValidName;
  return (
    <section>
      <Navbar btnAvailable={false} btnDisabled={false} />
      <div className="flex flex-col items-center gap-[62px] absolute w-[588px] h-[538.22px] p-0 left-[426px] top-[141px]">
        <div className="flex flex-col justify-center items-center gap-4 w-[588px] h-[178px] flex-none order-none grow-0 p-0">
          <p className="w-[231px] h-7 not-italic font-normal text-4xl leading-[110%] flex items-center tracking-[-0.02em] text-[#2DA950] flex-none order-none grow-0 font-covered">
            Registration Form
          </p>
          <p className="not-italic font-semibold text-[56px] leading-[120%] flex items-center text-center tracking-[-0.02em] text-[#1C1C1C] flex-none order-1 grow-0 font-manrope">
            Start Your success journey here
          </p>
        </div>
        <div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-start gap-[47px] w-[417px] h-[298.22px] flex-none order-1 grow-0 p-0"
          >
            <input
              type="text"
              placeholder="Enter Your name"
              name="name"
              value={formData.name}
              className="box-border flex flex-col items-start gap-2.5 w-[417px] h-[75px] border flex-none order-none grow-0 px-9 py-6 rounded-[64px] border-solid border-[rgba(0,0,0,0.02)] bg-[#EFEFEF] not-italic font-medium text-xl leading-[27px] text-left text-[#827A7A] font-manrope"
              onChange={handleChange}
            />
            {isValid.isValidName === false && formData.name.length > 0 && (
              <p className="w-[198px] h-[22px] not-italic font-medium text-base leading-[22px] text-center text-[#FF0808]">
                Enter a valid Name
              </p>
            )}
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              value={formData.email}
              className="box-border flex flex-col items-start gap-2.5 w-[417px] h-[75px] border flex-none order-none grow-0 px-9 py-6 rounded-[64px] border-solid border-[rgba(0,0,0,0.02)] bg-[#EFEFEF]  not-italic font-medium text-xl leading-[27px] text-left text-[#827A7A] font-manrope "
              onChange={handleChange}
            />
            {isValid.isValidEmail === false && formData.email.length > 0 && (
              <p className="w-[198px] h-[22px] not-italic font-medium text-base leading-[22px] text-center text-[#FF0808]">
                Enter a valid email adress
              </p>
            )}

            {isBtnDisabled ? (
              <button
                type="submit"
                className="flex flex-row justify-center items-center gap-[15.67px] w-full h-[77.22px] pl-[41.7778px] pr-[49.6111px] py-[26.1111px] rounded-[107.056px] bg-[#C9C9C9]  font-manrope text-white leading-[24.59px] font-medium capitalize text-[18px] text-center text-nowrap transition-all"
              >
                Submit
              </button>
            ) : (
              <button
                type="submit"
                onClick={() => navigate("/success")}
                className="flex flex-row justify-center items-center gap-[15.67px] w-full h-[77.22px] pl-[41.7778px] pr-[49.6111px] py-[26.1111px] rounded-[107.056px] hover:bg-[#4E4E4E] bg-[#1c1c1c] font-manrope text-white leading-[24.59px] font-medium capitalize text-[18px] text-center text-nowrap transition-all"
              >
                Submit
              </button>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormPage;
