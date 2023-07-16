import { useEffect, useState } from "react";

const professionNouns = [
  "Developer.",
  "Student.",
  "Mathematician.",
  "Researcher.",
] as const;

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
        }, 4000);
      } else {
        setTimeout(() => {
          setProfessionNoun(
            professionNouns[currProfessionNoun].slice(
              0,
              professionNoun.length + 1
            )
          );
        }, 400 * Math.random());
      }
    };
    updateWord();
  }, [professionNoun, currProfessionNoun]);

  return (
    <div
      className="h-screen text-white"
      style={{
        background:
          "linear-gradient(180deg, rgb(28, 28, 65) 32%, rgb(7, 152, 249) 100%)",
      }}
    >
      <div className="container mx-auto flex flex-col py-24 items-center justify-center">
        <div className="text-center lg:w-10/12 w-full">
          <h2 className="my-4 text-5xl font-bold font-mono leading-tight">
            {professionNoun}
          </h2>
          <h1 className="text-[4rem] sm:text-[6rem] md:text-[9rem] mb-8 bg-gradient-to-r from-my-pink to-my-blue bg-clip-text text-transparent">
            Alton Banushi
          </h1>
          <div className="flex flex-wrap justify-center mx-auto lg:w-5/12">
            <button className="my-2 hover:underline bg-white text-gray-800 font-bold rounded-full py-4 px-8">
              <a href="https://www.linkedin.com/in/alton-banushi/">LinkedIn</a>
            </button>
            <button className="ml-4 my-2 hover:underline bg-white text-gray-800 font-bold rounded-full py-4 px-8">
              <a href="https://www.sandboxnu.com/">Sandbox</a>
            </button>
            <button className="ml-4 my-2 hover:underline bg-white text-gray-800 font-bold rounded-full py-4 px-8">
              <a href="https://www.khoury.northeastern.edu/">Khoury College</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
