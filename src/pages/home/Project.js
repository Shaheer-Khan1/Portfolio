import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";
function Project() {
  const [selectedItemIndex, setSetlectedItemIndex] = useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const { projects } = portfolioData;
  return (
    <div>
      <SectionTitle title="Projects" />

      <div className="flex py-10 gap-20 sm:flex-col ">
        <div className="flex flex-col gap-10 border-l-2 border-[#20716184] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full ">
          {projects.map((project, index) => (
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
                {project.title}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-10 sm:flex-col">
          <img
            src={projects[selectedItemIndex].image}
            alt="you image does not show it "
            className="h-60 w-72 "
          />
          <div className="flex flex-col gap-5">
            <h1 className="text-secondary text-2xl">
              {projects[selectedItemIndex].title}
            </h1>
            <p className="text-white">
              {projects[selectedItemIndex].description}
            </p>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              illum deleniti pariatur quas tempore! Aliquam voluptatum tempore
              aut exercitationem fugit vel nihil eveniet, sequi quo non delectus
              esse beatae similique.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
