import GlowingText from "./GlowingText";

const Hero = (): JSX.Element => {
  return (
    <div className="text-center flex flex-col items-center justify-center w-[90dvw] gap-6">
      <GlowingText
        text="alton banushi."
        href="https://linkedin.com/in/alton-banushi/"
      />
      <div className="text-xl lg:text-2xl flex w-full justify-around font-sans flex-wrap transition-all duration-500 font-medium">
        <p>student.</p>
        <p>developer.</p>
        <p>mathematician.</p>
      </div>
    </div>
  );
};

export default Hero;
