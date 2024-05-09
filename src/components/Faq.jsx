import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

import Union from "../assets/union.png";

const faqTitles = [
  {
    title: "Do you offer freelancers?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, ipsum?",
  },
  {
    title:
      "Whats the guarantee that I will be satisfied with the hired talent?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, ipsum?",
  },
  {
    title: "Can I hire multiple talents at once?",
    answer:
      "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
  },
  {
    title: "Why should I not go to an agency directly?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, ipsum?",
  },
  {
    title: "Who can help me pick a right skillset and duration for me?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, ipsum?",
  },
];

const Faq = () => {
  const [id, setId] = useState();
  return (
    <section className="]">
      <div className="bg-[#E8EEE7] mx-4 flex items-end rounded-[40px] h-[749px]">
        <div className="relative">
          <div className="flex flex-col justify-center items-start gap-5 absolute w-[405px] h-[111px] top-[-180px] left-[94.5px]">
            <p className="w-[215px] h-[25px] not-italic font-normal text-[32px] leading-[110%] flex items-center tracking-[-0.02em] text-[#9E9D9D] flex-none order-none grow-0 font-covered">
              {" "}
              Whats on Your mind
            </p>
            <p className="w-[405px] h-[66px] not-italic font-semibold text-6xl leading-[110%] flex items-center tracking-[-0.01em] text-[#1C1C1C] flex-none order-1 grow-0 font-manrope">
              Ask Questions
            </p>
          </div>
          <img
            src={Union}
            alt="Union Logo"
            className="hover:rotate-3 transition-all"
          />
        </div>
        <div className="flex flex-col items-start gap-9 relative w-[581px]  p-0 left-48 my-auto font-manrope">
          {faqTitles.map((que, i) => {
            return (
              <div key={i} className="w-[581px] flex flex-col justify-between">
                <div className="flex flex-row justify-between items-center border border-solid border-b-[#D7D7D7] pb-4 ">
                  <h3 className="w-[411px] h-14 not-italic font-semibold text-xl leading-[140%] flex items-center text-[#1C1C1C] flex-none order-none grow-0  my-0 font-manrope">
                    {que.title}
                  </h3>
                  <button onClick={() => setId(i === id ? undefined : i)}>
                    {i === id ? (
                      <FaMinus className="h-[14px] w-[14px] hover:rotate-180 transition-all" />
                    ) : (
                      <FaPlus className="h-[14px] w-[14px] hover:rotate-90 transition-all" />
                    )}
                  </button>
                </div>
                {i === id && (
                  <p className=" not-italic relative font-normal text-[15px] leading-[160%] text-[#617275] flex-none order-1 self-stretch grow-0 font-manrope">
                    {que.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
