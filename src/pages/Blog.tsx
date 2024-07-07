import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Blog = (): JSX.Element => {
  const constructionRefs = useRef<any[]>([]);

  const constructionComponents: JSX.Element[] = [
    <h2
      className="font-bold text-3xl text-white"
      ref={(elem) => constructionRefs.current.push(elem)}
    >
      🚧 Page Under Construction 🚧
    </h2>,
    <h3
      className="font-bold text-2xl text-white hover:underline"
      ref={(elem) => constructionRefs.current.push(elem)}
    >
      <Link to="/">Back Home</Link>
    </h3>,
  ];

  // gsap animations
  useLayoutEffect(() => {
    constructionRefs.current.forEach((ref, i) => {
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
      className="text-white bg-my-blue min-h-[91vh] flex flex-col justify-center items-center gap-4"
      style={{
        background:
          "linear-gradient(190deg, rgb(28, 28, 65) 30%, rgb(7, 152, 249) 100%)",
      }}
    >
      {constructionComponents}
    </div>
  );
};

export default Blog;
