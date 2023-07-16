import ProjectCard, { ProjectCardProps } from "../components/ProjectCard";

const projectObjects: ProjectCardProps[] = [
  {
    imagePath:
      "https://github.com/banushi-a/altonbanushi.com/blob/main/src/images/floodit-screenshot.png",
    name: "Flood It Game",
    description:
      "Created a game with the goal to cover the entire window with a single color, one 'Flood' at a time. Utilized graph traversal to create a waterfall effect when a new color is selected.",
    skills: ["Java", "Graph Algorithms"],
  },
];

const Projects = (): JSX.Element => {
  return (
    <div
      className="h-screen text-white"
      style={{
        background:
          "linear-gradient(200deg, rgb(28, 28, 65) 50%, rgb(7, 152, 249) 100%)",
      }}
    >
      <div className="container mx-auto flex flex-col py-24 items-center justify-center">
        {projectObjects.map((projectObject) => {
          return (
            <ProjectCard
              imagePath={projectObject.imagePath}
              name={projectObject.name}
              description={projectObject.description}
              skills={projectObject.skills}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
