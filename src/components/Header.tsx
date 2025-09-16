import { useState } from "react";
import GlowingText from "./GlowingText";

const pageSections = [{ text: "experience", href: "#experience" }];

const headerLinks = [
  { text: "resume", href: require("../resume-alton-banushi.pdf") },
  { text: "linkedin", href: "https://www.linkedin.com/in/alton-banushi/" },
  { text: "github", href: "https://github.com/banushi-a" },
];

const Header = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const allLinks = [...pageSections, ...headerLinks];

  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <nav className="backdrop-blur-md bg-gray-900/50 border border-gray-700/50 rounded-2xl px-8 py-4 shadow-lg">
        {/* Desktop Navigation - Hidden on mobile */}
        <div className="hidden md:flex items-center justify-center gap-6 lg:gap-8">
          {pageSections.map((link, index) => (
            <div
              key={index + "pageSection"}
              className="transform hover:scale-105 transition-transform duration-200"
            >
              <GlowingText
                text={link.text}
                size="H3"
                href={link.href}
                target="_self"
              />
            </div>
          ))}
          <p className="hover:cursor-default">|</p>
          {headerLinks.map((link, index) => (
            <div
              key={index}
              className="transform hover:scale-105 transition-transform duration-200"
            >
              <GlowingText text={link.text} size="H3" href={link.href} />
            </div>
          ))}
        </div>

        {/* Mobile Navigation - Visible only on mobile */}
        <div className="md:hidden">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center justify-center w-full text-white hover:text-white/90 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 transform transition-transform duration-300 ease-in-out ${
                isMenuOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Mobile expanded menu items - grows the navbar itself */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isMenuOpen ? "max-h-96 opacity-100 px-4" : "max-h-0 opacity-0 px-0"
            }`}
          >
            <div className="pt-6 border-t border-gray-700/30 mt-4">
              <div className="flex flex-col items-center gap-6 px-6">
                {allLinks.map((link, index) => (
                  <div
                    key={index}
                    onClick={handleLinkClick}
                    className="transform hover:scale-105 transition-transform duration-200"
                  >
                    <GlowingText
                      text={link.text}
                      size="H3"
                      href={link.href}
                      target={pageSections.includes(link) ? "_self" : "_blank"}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
