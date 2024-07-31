type ProjectObjectType = {
  image: string;
  name: string;
  summary: string;
  description: string;
  skills: string[];
  link?: string;
};

type ProjectType = {
  projectObject: ProjectObjectType;
  lastProject: boolean;
  projectRefs: React.MutableRefObject<any[]>;
};

const Project = ({
  projectObject,
  lastProject,
  projectRefs,
}: ProjectType): JSX.Element => {
  return (
    <div
      className={`container flex flex-col items-center ${
        lastProject ? "mb-12" : "mb-24"
      }`}
      ref={(element) => projectRefs.current.push(element)}
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
            <div className="my-2 mx-2 bg-white text-gray-800 font-bold rounded-full py-3 px-5">
              {skill}
            </div>
          );
        })}
      </div>
      {projectObject.link ? (
        <a
          href={projectObject.link}
          target="_blank"
          rel="noreferrer"
          className="w-10/12 md:w-7/12 mt-2 rounded-2xl p-4 hover:transition-all hover:outline hover:outline-white"
        >
          <img
            src={projectObject.image}
            alt={`${projectObject.name} + Project`}
            className="rounded-2xl"
          />
        </a>
      ) : (
        <img
          src={projectObject.image}
          alt={`${projectObject.name} + Project`}
          className="w-10/12 md:w-7/12 mt-2 rounded-2xl"
        />
      )}
    </div>
  );
};

export default Project;
