import { useEffect, useState } from "react";
import GradientText from "../components/GradientText";

const professionNouns = [
  "Developer.",
  "Student.",
  "Mathematician.",
  "Researcher.",
  "Mentor.",
] as const;

const linkObjects: { link: string; name: string }[] = [
  {
    link: "https://www.linkedin.com/in/alton-banushi/",
    name: "LinkedIn",
  },
  {
    link: "https://www.sandboxnu.com/",
    name: "Sandbox",
  },
];

const Home = (): JSX.Element => {
  const [professionNoun, setProfessionNoun] = useState<string>(
    professionNouns[0][0]
  );
  const [currProfessionNoun, setCurrProfessionNoun] = useState<number>(0);

  // Use Effect to Update the Current Word
  useEffect(() => {
    const updateWord = async () => {
      if (professionNouns[currProfessionNoun] === professionNoun) {
        setTimeout(() => {
          const nextIdx = (currProfessionNoun + 1) % professionNouns.length;
          setProfessionNoun(professionNouns[nextIdx].slice(0, 1));
          setCurrProfessionNoun(nextIdx);
        }, 3000);
      } else {
        setTimeout(() => {
          setProfessionNoun(
            professionNouns[currProfessionNoun].slice(
              0,
              professionNoun.length + 1
            )
          );
        }, 200 * Math.random());
      }
    };
    updateWord();
  }, [professionNoun, currProfessionNoun]);

  return (
    <div
      className="h-[90vh] text-white"
      style={{
        background:
          "linear-gradient(180deg, rgb(28, 28, 65) 32%, rgb(7, 152, 249) 100%)",
      }}
    >
      <div className="container h-[70vh] mx-auto flex flex-col py-24 items-center justify-center">
        <div className="text-center lg:w-10/12 w-full">
          <h2 className="my-4 text-5xl font-bold font-mono leading-tight">
            {professionNoun}
          </h2>
          <GradientText>Alton Banushi</GradientText>
          <div className="flex flex-wrap justify-center mx-auto lg:w-5/12">
            {linkObjects.map((linkObject) => {
              return (
                <button className="my-2 mx-2 hover:underline bg-white text-gray-800 font-bold rounded-full py-4 px-8">
                  <a
                    href={linkObject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {linkObject.name}
                  </a>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
