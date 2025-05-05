import GlowingText from "../components/GlowingText";

const Hero = (): JSX.Element => {
  return (
    <div className="text-center flex flex-col items-center justify-center w-[90dvw] gap-6 z-10">
      <GlowingText
        text="alton banushi."
        href="https://linkedin.com/in/alton-banushi/"
      />
    </div>
  );
};

export default Hero;
