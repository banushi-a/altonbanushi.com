import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Logo from "../images/logo.png";
import GradientText from "../components/GradientText";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Blog = (): JSX.Element => {
  const blogLinkRefs = useRef<any[]>([]);

  const blogLinks: JSX.Element[] = [
    <h2
      className="font-bold text-3xl text-white"
      ref={(elem) => blogLinkRefs.current.push(elem)}
    >
      🚧 Page Under Construction 🚧
    </h2>,
    <h3
      className="font-bold text-2xl text-white hover:underline"
      ref={(elem) => blogLinkRefs.current.push(elem)}
    >
      <Link to="/">Back Home</Link>
    </h3>,
  ];

  // gsap animations
  useLayoutEffect(() => {
    blogLinkRefs.current.forEach((ref, i) => {
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
            start: "50px 80%",
            end: "50px 60%",
            once: true,
          },
          opacity: 1,
          y: 0,
          duration: 2,
          delay: i / 2,
        }
      );
    });
  }, []);

  return (
    <div
      className="grid grid-cols-5"
      style={{
        background:
          "linear-gradient(190deg, rgb(28, 28, 65) 30%, rgb(7, 152, 249) 100%)",
      }}
    >
      <div className="flex flex-col p-8 col-span-5 md:col-span-1 text-white border border-green-600">
        <div className="flex items-center h-14 gap-4">
          <img src={Logo} alt="Logo" className="h-12" />
          <h2 className="text-4xl font-bold bg-gradient-to-r from-my-pink to-my-blue bg-clip-text text-transparent">
            AB
          </h2>
        </div>

        <h2 className="font-semibold italic">
          Exploring the place where comptuer science, mathematics, and
          curiousity live
        </h2>
      </div>
      <div className="text-white min-h-[95dvh] p-8 flex flex-col justify-start items-center gap-4 col-span-5 md:col-span-4 border border-red-300">
        {blogLinks}
      </div>
    </div>
  );
};

export default Blog;
