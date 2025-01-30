import GlowingText from "./GlowingText";

const Header = (): JSX.Element => {
  return (
    <section className="h-[6dvh] w-screen absolute flex justify-end items-center gap-4 lg:gap-8 xl:gap-10 p-4 font-abril font-light">
      <GlowingText
        text="resume"
        size="H2"
        href={require("../resume-alton-banushi.pdf")}
      />
      <GlowingText
        text="linkedin"
        size="H2"
        href="https://www.linkedin.com/in/alton-banushi/"
      />
      <GlowingText
        text="github"
        size="H2"
        href="https://github.com/banushi-a"
      />
    </section>
  );
};

export default Header;
