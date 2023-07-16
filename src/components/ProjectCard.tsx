export interface ProjectCardProps {
  imagePath: string;
  name: string;
  description: string;
  skills: string[];
}

const ProjectCard = ({
  imagePath,
  name,
  description,
  skills,
}: ProjectCardProps): JSX.Element => {
  return (
    <div className="container flex align-middle space-apart border border-red-600">
      <div></div>
      <img
        src={
          "https://github.com/banushi-a/altonbanushi.com/blob/main/src/images/floodit-screenshot.png"
        }
        alt={`Screenshot of ${name} project`}
      />
    </div>
  );
};

export default ProjectCard;
