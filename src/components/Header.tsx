import GlowingText from "./GlowingText";
import { useUi } from "../context/UiContext";

const headerLinks = [
  { text: "resume", href: require("../resume-alton-banushi.pdf") },
  { text: "linkedin", href: "https://www.linkedin.com/in/alton-banushi/" },
  { text: "github", href: "https://github.com/banushi-a" },
];

const Header = (): JSX.Element => {
  const { showBlob, toggleShowBlob } = useUi();

  return (
    <header className="h-[6dvh] w-screen absolute flex justify-between items-center gap-4 p-4 font-abril font-light">
      <div className="flex justify-between items-center gap-4 lg:gap-8 xl:gap-10 font-sans font-medium">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={showBlob}
            onClick={toggleShowBlob}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 rounded-full peer peer-checked:bg-gradient-to-r peer-checked:from-blue-500 peer-checked:via-pink-500 peer-checked:to-purple-500 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
          <span className="ml-2">Blobs</span>
        </label>
      </div>
      <div className="flex justify-between items-center gap-4 lg:gap-8 xl:gap-10">
        {headerLinks.map((link) => (
          <GlowingText text={link.text} size="H3" href={link.href} />
        ))}
      </div>
    </header>
  );
};

export default Header;
