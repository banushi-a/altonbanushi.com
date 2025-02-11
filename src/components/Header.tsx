import GlowingText from "./GlowingText";

const headerLinks = [
  { text: "resume", href: require("../resume-alton-banushi.pdf") },
  { text: "linkedin", href: "https://www.linkedin.com/in/alton-banushi/" },
  { text: "github", href: "https://github.com/banushi-a" },
];

const Header = (): JSX.Element => {
  return (
    <section className="h-[6dvh] w-screen absolute flex justify-end items-center gap-4 lg:gap-8 xl:gap-10 p-4 font-abril font-light">
      {headerLinks.map((link) => (
        <GlowingText text={link.text} size="H3" href={link.href} />
      ))}
    </section>
  );
};

export default Header;
