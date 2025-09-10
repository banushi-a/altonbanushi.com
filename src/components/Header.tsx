import GlowingText from "./GlowingText";

const headerLinks = [
  { text: "resume", href: require("../resume-alton-banushi.pdf") },
  { text: "linkedin", href: "https://www.linkedin.com/in/alton-banushi/" },
  { text: "github", href: "https://github.com/banushi-a" },
];

const Header = (): JSX.Element => {
  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <nav className="backdrop-blur-md bg-gray-900/50 border border-gray-700/50 rounded-2xl px-8 py-4 shadow-lg">
        {/* Centered Navigation links */}
        <div className="flex items-center justify-center gap-6 lg:gap-8">
          {headerLinks.map((link, index) => (
            <div key={index} className="transform hover:scale-105 transition-transform duration-200">
              <GlowingText text={link.text} size="H3" href={link.href} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
