import { useEffect, useState } from "react";

const professionNouns = [
  "Developer.",
  "Student.",
  "Mathematician.",
  "Researcher.",
] as const;

const Home = (): JSX.Element => {
  const [professionNoun, setProfessionNoun] = useState<string>("");
  const [currProfessionNoun, setCurrProfessionNoun] = useState<number>(0);

  // Use Effect to Update the Current Word
  useEffect(() => {
    const updateWord = async () => {
      if (professionNouns[currProfessionNoun] === professionNoun) {
        setTimeout(() => {
          const nextIdx = (currProfessionNoun + 1) % professionNouns.length;
          setProfessionNoun(professionNouns[nextIdx].slice(0, 1));
          setCurrProfessionNoun(nextIdx);
        }, 4000);
      } else {
        setTimeout(() => {
          setProfessionNoun(
            professionNouns[currProfessionNoun].slice(
              0,
              professionNoun.length + 1
            )
          );
        }, 600 * Math.random());
      }
    };
    updateWord();
  }, [professionNoun, currProfessionNoun]);

  return (
    <div
      className=" h-screen text-white"
      style={{
        background:
          "linear-gradient(180deg, rgb(28, 28, 65) 32%, rgb(7, 152, 249) 100%)",
      }}
    >
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="text-center lg:w-5/12 w-full">
          <h1 className="my-4 text-5xl font-bold leading-tight">
            {professionNoun}
          </h1>
          <p className="text-2xl mb-8">Alton Banushi</p>
          <div className="flex justify-center mx-auto">
            <button className="hover:underline bg-white text-gray-800 font-bold rounded-full  py-4 px-8">
              View Projects
            </button>
            <button className="ml-4 hover:underline bg-white text-gray-800 font-bold rounded-full  py-4 px-8">
              Plugins
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
