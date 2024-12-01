import { useLayoutEffect, useRef } from "react";
import nomura from "../images/Nomura-Logo.png";
import td from "../images/td.jpg";
import ubs from "../images/UBS_Logo.png";
import neu from "../images/Northeastern-University-Logo.png";
import sandbox from "../images/sandbox-logo.png";
import downArrow from "../images/icons/down-arrow.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GradientText from "../components/GradientText";

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
    jobTitle: "Risk Analyst Co-op",
    description:
      "Research and implement risk management methedologies while collaborating with colleagues and stakeholders",
    date: "Aug 2024 - Dec 2024",
    skills: ["Statistics", "Python", "Big Data", "Machine Learning"],
    extraImgStyles: "pl-2",
  },
  {
    image: td,
    company: "TD Securities",
    jobTitle: "Software Engineering Intern",
    description:
      "Develop software solutions for corporate investment banking operations in an agile enviornment",
    date: "Jun 2024 - Aug 2024",
    skills: ["Software Development", "Full Stack"],
    extraImgStyles: "p-8",
  },
  {
    image: ubs,
    company: "UBS",
    jobTitle: "Quantitative Developer Co-op",
    description:
      "Work to develop in-house software to implement investment strategies, visualize data, and optimize portfolios",
    date: "January 2023 - July 2023",
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

const Experience = (): JSX.Element => {
  const titleRef = useRef<any>();
  const experienceRefs = useRef<any[]>([]);

  const experienceComponents: JSX.Element[] = experienceObjects.map(
    (experienceObject) => {
      const image = (
        <div className="rounded-2xl lg:w-[40vw] bg-gradient-to-r from-my-teal via-my-green to-my-dark-green p-1 mb-4 lg:mb-0">
          <img
            src={experienceObject.image}
            alt={experienceObject.company + " Company Image"}
            className={
              "lg:w-[40vw] bg-white rounded-2xl " +
              experienceObject.extraImgStyles
            }
          />
        </div>
      );
      const info = (
        <div className="lg:ml-4 flex flex-col justify-between text-white">
          <div>
            <h2 className="font-bold text-2xl">{experienceObject.jobTitle}</h2>
            <p className="font-semibold italic">{experienceObject.date}</p>
            <p>{experienceObject.description}</p>
          </div>
          <div className="mt-4 lg:mt-0">
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
          className="container px-5 mt-24 grid grid-cols-1 lg:grid-cols-2 min-h-[15vh]"
          ref={(elem) => experienceRefs.current.push(elem)}
        >
          <div className="flex items-center">{image}</div>
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

    experienceRefs.current.forEach((ref, i) => {
      gsap.fromTo(
        ref,
        {
          opacity: 0,
          y: -50,
        },
        {
          scrollTrigger: {
            trigger: ref,
            toggleActions: "restart none none none",
            start: "200px 80%",
            end: "50px 60%",
            once: true,
          },
          opacity: 1,
          y: 0,
          duration: 2,
        }
      );
    });
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
        <div />
        <h2 ref={titleRef}>
          <GradientText className="bg-gradient-to-t">
            My Experience
          </GradientText>
        </h2>
        <img src={downArrow} alt="down arrow" className="h-10" />
      </div>
      <div className="container mx-auto flex flex-col py-24 items-center justify-center">
        {experienceComponents}
      </div>
    </div>
  );
};

export default Experience;
