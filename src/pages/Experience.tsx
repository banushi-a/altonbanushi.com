import { useLayoutEffect, useRef } from "react";
import downArrow from "../images/icons/down-arrow.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Experience = (): JSX.Element => {
  const titleRef = useRef<any>();

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
      <div className="flex py-24 justify-center bg-white"></div>
    </div>
  );
};
