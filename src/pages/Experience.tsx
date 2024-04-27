import { useLayoutEffect, useRef } from "react";
import nomura from "../images/Nomura-Logo.png";
import td from "../images/td.jpg";
import ubs from "../images/UBS_Logo.png";
import neu from "../images/Northeastern-University-Logo.png";
import sandbox from "../images/sandbox-logo.png";
import downArrow from "../images/icons/down-arrow.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type experienceObject = {
  image: any;
  company: string;
  jobTitle: string;
  description: string;
  date: string;
  skills: string[];
  extraImgStyles?: string;
};

const experienceObjects: experienceObject[] = [
  {
    image: nomura,
    company: "Nomura Holdings",
    jobTitle: "Risk Management Co-op",
    description:
      "Incoming Risk Management [Model Validation] Co-op at Nomura at the New York City office",
    date: "Aug 2024 - Dec 2024",
    skills: ["Statistics", "Python"],
    extraImgStyles: "pl-2",
  },
  {
    image: td,
    company: "TD Securities",
    jobTitle: "Software Engineering Intern",
    description:
      "Incoming SWE Intern at TD Securities at the New York City office",
    date: "Jun 2024 - Aug 2024",
    skills: ["Software Development"],
    extraImgStyles: "p-8",
  },
  {
    image: ubs,
    company: "UBS",
    jobTitle: "Quantitative Developer Co-op",
    description:
      "Work to develop in-house software to implement investment strategies, visualize data, and optimize portfolios",
    date: "Dec 2022 - August 2023",
    skills: ["MIP", "Linear Algebra", "Full Stack"],
    extraImgStyles: "p-8",
  },
  {
    image: neu,
    company: "Northeastern University",
    jobTitle: "Teaching Assistant",
    description:
      "Instruct students on algorithm and programming coursework; Provide individualized feedback on homework and lab assignments",
    date: "Aug 2022 - Present",
    skills: ["Algorithms", "Data", "Teaching"],
  },
  {
    image: sandbox,
    company: "Sandbox",
    jobTitle: "Head of Developer Experience",
    description:
      "Work to onboard developers; Develop software for researchers and clients",
    date: "Aug 2022 - Present",
    skills: ["React", "SQL", "Python", "Flask"],
  },
];

export const Experience = (): JSX.Element => {
  const titleRef = useRef<any>();

  const experienceComponents: JSX.Element[] = experienceObjects.map(
    (experienceObject) => {
      const image = (
        <div className="rounded-md md:w-[40vw] bg-gradient-to-r from-my-dark-blue via-my-blue to-my-pink p-1 mb-4 md:mb-0">
          <img
            src={experienceObject.image}
            alt={experienceObject.company + " Company Image"}
            className={
              "md:w-[40vw] bg-white " + experienceObject.extraImgStyles
            }
          />
        </div>
      );
      const info = (
        <div className="md:ml-4 flex flex-col justify-between text-white">
          <div>
            <h2 className="font-bold text-2xl">{experienceObject.jobTitle}</h2>
            <p className="font-semibold italic">{experienceObject.date}</p>
            <p>{experienceObject.description}</p>
          </div>
          <div>
            {experienceObject.skills.map((skill, i) => {
              return (
                <span
                  className={`my-1 ${
                    i > 0 ? "mx-1" : " mr-1"
                  } bg-white text-gray-800 font-bold rounded-full border border-my-dark-blue py-2 px-4`}
                >
                  {skill}
                </span>
              );
            })}
          </div>
        </div>
      );
      return (
        <div
          key={experienceObject.jobTitle}
          className="container px-5 mt-24 grid grid-cols-1 md:grid-cols-2"
        >
          {image}
          {info}
        </div>
      );
    }
  );

  useLayoutEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { y: -100, opacity: 0 },
      { duration: 1.5, y: 0, opacity: 1 }
    );
  }, []);

  return (
    <div
      className="text-my-dark-blue bg-white"
      style={{
        background:
          "linear-gradient(160deg, rgb(28, 28, 65) 30%, rgb(7, 152, 249) 100%)",
      }}
    >
      <div className="flex flex-col h-[85vh] items-center justify-between mx-auto">
        <div></div>
        <h2
          className="text-[4rem] md:text-[5rem] lg:text-[8rem] bg-gradient-to-b from-my-pink to-my-blue bg-clip-text text-transparent text-center"
          ref={titleRef}
        >
          My Experience
        </h2>
        <img src={downArrow} alt="down arrow" className="h-10" />
      </div>
      <div className="container mx-auto flex flex-col py-24 items-center justify-center">
        {experienceComponents}
      </div>
    </div>
  );
};
