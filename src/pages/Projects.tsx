import floodit from "../images/floodit-screenshot.png";
import maze from "../images/maze.png";
import ipa from "../images/IPA.png";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

const projectObjects = [
  {
    image: maze,
    name: "Maze Generator and Solver",
    summary: "Tree Algorithms",
    description:
      "Implemented Kruskal's Minimum Spanning Tree algorithm to procedurally generate a solveable, no-loop maze. Utilized both breath-first and depth-first search to pathfind to the other end of the maze. Optimized maze sizes up to 200x200 without significant computational effort.",
    skills: ["Java", "Tree Algorithms"],
  },
  {
    image: floodit,
    name: "Flood It",
    summary: "Mini Game",
    description:
      "Created a game with the goal to cover the entire window with a single color, one 'Flood' at a time. Utilized graph traversal to create a waterfall effect when a new color is selected.",
    skills: ["Java", "Graph Algorithms"],
  },
  {
    image: ipa,
    name: "Image Processing Application",
    summary: "Photo Editor",
    description:
      "Developed an image processing application utilizing object oriented principles. Designed and integrated 10+ components that are easily extensible. Thoroughly documented entire codebase using JavaDoc. Implemented a histogram visuallizing the pixels' channels and values. All code available upon request.",
    skills: ["Java", "Object Oriented Programming", "Linear Algebra"],
  },
];

const Projects = (): JSX.Element => {
  const titleRef = useRef<any>();

  useLayoutEffect(() => {
    gsap.fromTo(titleRef.current, { y: -100 }, { duration: 1, y: 0 });
  }, []);

  return (
    <div
      className="text-white bg-my-blue"
      style={{
        background:
          "linear-gradient(190deg, rgb(28, 28, 65) 30%, rgb(7, 152, 249) 100%)",
      }}
    >
      <div
        className="container mx-auto flex pt-20 items-center justify-center"
        ref={titleRef}
      >
        <h2 className="text-[4rem] md:text-[5rem] lg:text-[8rem] bg-gradient-to-t from-my-pink to-my-blue bg-clip-text text-transparent text-center">
          My Projects
        </h2>
      </div>
      <div className="container mx-auto flex flex-col py-24 items-center justify-center">
        {projectObjects.map((projectObject, i) => {
          return (
            <div
              className={`container flex flex-col items-center ${
                i === projectObjects.length - 1 ? "mb-12" : "mb-24"
              }`}
            >
              <h3 className="text-white tracking-[0.125em] font-bold font-mono text-center">
                {projectObject.summary}
              </h3>
              <h2 className="text-white tracking-[0.125em] font-bold text-3xl text-center pt-2">
                {projectObject.name}
              </h2>
              <center className="w-11/12 md:w-7/12 pt-3 leading-7">
                {projectObject.description}
              </center>
              <div className="flex flex-wrap justify-center mx-auto">
                {projectObject.skills.map((skill) => {
                  return (
                    <button className="my-2 mx-2 bg-white text-gray-800 font-bold rounded-full py-3 px-5">
                      {skill}
                    </button>
                  );
                })}
              </div>
              <img
                src={projectObject.image}
                alt={`${projectObject.name} + Project`}
                className="w-10/12 md:w-7/12 mt-2"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
