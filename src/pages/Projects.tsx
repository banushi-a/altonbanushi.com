import floodit from "../images/floodit-screenshot.png";
import maze from "../images/maze.png";
import ipa from "../images/IPA.png";
import cooper from "../images/cooper-ex.png";
import sga from "../images/sga-ex.png";
import reflective from "../images/reflective-surfaces.png";
import downArrow from "../images/icons/down-arrow.svg";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GradientText from "../components/GradientText";
import Project from "../components/Project";

gsap.registerPlugin(ScrollTrigger);

const projectObjects = [
  {
    image: cooper,
    name: "Cooper NU",
    summary: "Co-op Review Platform",
    description:
      "Worked to create a co-op review platform that enables Northeastern students to learn more about their co-op and reach out to previous employees. Developed the web application using the T3 stack alongside an agile team of developers, designers, and a project manager.",
    skills: ["React", "Next.js", "TypeScript", "Postgres"],
    link: "https://github.com/sandboxnu/cooper",
  },
  {
    image: sga,
    name: "SGA Member Tracker",
    summary: "Internal Software",
    description:
      "Collaborated with designers, developers, and client to digitize the student government member tracking system. Implemented the front-end using React, Tailwind, and TypeScript and the back-end using Express.js, Typscript, and MySQL",
    skills: ["React", "Express", "MySQL"],
    link: "https://github.com/sandboxnu/sga-tooling",
  },
  {
    image: reflective,
    name: "Reflective Function Visualizer",
    summary: "OpenGL Project",
    description:
      "Developed a graphics application that allows users to input mathematical functions and visualize their reflective properties in an enviornment. Users can manage up to 10 functions at once, view their wireframe meshes, display the normals, and invert the direction that the reflections are coming from.",
    skills: ["OpenGL", "C++", "GLM"],
    link: "https://github.com/banushi-a/reflective-functions",
  },
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
  const projectRefs = useRef<any[]>([]);

  // Projects JSX
  const projectComponents: JSX.Element[] = projectObjects.map(
    (projectObject, i) => {
      return (
        <Project
          projectObject={projectObject}
          lastProject={i === projectObjects.length - 1}
          projectRefs={projectRefs}
        />
      );
    }
  );

  // gsap animations
  useLayoutEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { y: -100, opacity: 0 },
      { duration: 1.5, y: 0, opacity: 1 }
    );

    projectRefs.current.forEach((ref) => {
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
            start: "300px 80%",
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
      className="text-white bg-my-blue"
      style={{
        background:
          "linear-gradient(190deg, rgb(28, 28, 65) 30%, rgb(7, 152, 249) 100%)",
      }}
    >
      <div className="container mx-auto flex flex-col h-[85vh] items-center justify-between text-center">
        <div />
        <h2 ref={titleRef}>
          <GradientText className="bg-gradient-to-b">My Projects</GradientText>
        </h2>
        <img src={downArrow} alt="down arrow" className="h-10" />
      </div>
      <div className="container mx-auto flex flex-col py-24 items-center justify-center">
        {projectComponents}
      </div>
    </div>
  );
};

export default Projects;
