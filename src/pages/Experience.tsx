import { useLayoutEffect, useRef } from "react";
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
  skills: string[];
  extraImgStyles?: string;
};

const experienceObjects: experienceObject[] = [
  {
    image: ubs,
    company: "UBS",
    jobTitle: "Quantitative Developer Co-op",
    description: "",
    skills: [
      "TypeScript",
      "React",
      "Python",
      "SQL",
      "Mixed Integer Programming",
      "Linear Algebra",
      "Portfolio Optimization",
    ],
    extraImgStyles: "p-4",
  },
  {
    image: neu,
    company: "Northeastern University",
    jobTitle: "Teaching Assistant",
    description: "",
    skills: ["Algorithms", "Programming", "Teaching"],
  },
  {
    image: sandbox,
    company: "Sandbox",
    jobTitle: "Head of Developer Experience",
    description: "",
    skills: ["TypeScript", "React", "SQL", "Python", "Flask"],
  },
];

export const Experience = (): JSX.Element => {
  const titleRef = useRef<any>();

  const experienceComponents: JSX.Element[] = experienceObjects.map(
    (experienceObject, i) => {
      const image = (
        <img
          src={experienceObject.image}
          alt={experienceObject.company + " Company Image"}
          className={
            "w-[40vw] border-4 border-white rounded-lg " +
            experienceObject.extraImgStyles
          }
        />
      );
      const info = <div>{i}</div>;
      return (
        <div
          key={experienceObject.jobTitle}
          className="container px-5 mt-24 flex justify-between align-center"
        >
          {i % 2 === 0 ? (
            <>
              {image}
              {info}
            </>
          ) : (
            <>
              {info}
              {image}
            </>
          )}
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
      className="text-white bg-my-blue"
      style={{
        background:
          "linear-gradient(150deg, rgb(28, 28, 65) 50%, rgb(7, 152, 249) 100%)",
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
