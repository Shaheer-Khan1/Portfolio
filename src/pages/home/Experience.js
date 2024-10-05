import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";
function Experience() {
  const [selectedItemIndex, setSetlectedItemIndex] = useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const { experiences } = portfolioData;

  return (
    <div>
      <SectionTitle title="Experience" />

      <div className="flex py-10 gap-20 sm:flex-col ">
        <div className="flex flex-col gap-10 border-l-2 border-[#20716184] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full ">
          {experiences.map((experience, index) => (
            <div
              onClick={() => {
                setSetlectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-5 
                            
                            ${
                              selectedItemIndex === index
                                ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#0e74656e] py-3 "
                                : "text-white"
                            }`}
              >
                {experience.period}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-secondary text-2xl">
            {experiences[selectedItemIndex].title}
          </h1>
          <h1 className="text-tertiary text-xl">
            {experiences[selectedItemIndex].company}
          </h1>
          <h1 className="text-white">
              {experiences[selectedItemIndex].description}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Experience;
