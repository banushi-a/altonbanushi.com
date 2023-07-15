import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Link } from "react-router-dom";

export const PAGES_AND_LINKS: readonly {
  page: string;
  link: string;
}[] = [
  {
    page: "GITHUB",
    link: "https://github.com/banushi-a",
  },
  {
    page: "RESUME",
    link: "https://drive.google.com/file/d/1n6iaC1VFfWFsr4G_2dYbmQD_feSuaUrb/view?usp=sharing",
  },
  {
    page: "CONTACT",
    link: "mailto:altonbanushi@icloud.com",
  },
] as const;

interface SidebarProps {
  className?: string;
}

// Represents a sidebar with settings options
// This slides in and out depending on if the user clicks the hamburger icon.
const Sidebar = ({ className }: SidebarProps) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className={`${className}`}>
      {/* This boolean statement decides whether to show the sidebar or not. */}
      {!showSidebar && (
        <Bars3Icon
          className={`w-12 fill-warning-dark flex-none fill-white`}
          onClick={() => setShowSidebar(!showSidebar)}
        />
      )}

      {/* Div for the sidebar and how it looks */}
      <div
        className={`flex flex-col fixed top-0 right-0 h-screen w-screen md:w-[35vw] bg-sga-red text-my-dark-blue z-40 ease-in-out duration-300 bg-white ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <div className="flex p-8 items-center">
          <div className="flex-col">
            <h1 className="text-3xl text-my-dark-blue font-sans font-bold pb-8">
              <Link to="/projects" onClick={() => setShowSidebar(false)}>
                PROJECTS
              </Link>
            </h1>
            <h1 className="text-3xl text-my-dark-blue font-sans font-bold pb-8">
              <Link to="/experience" onClick={() => setShowSidebar(false)}>
                EXPERIENCE
              </Link>
            </h1>
            {PAGES_AND_LINKS.map(({ page, link }, i) => {
              return (
                <h1
                  key={page + i}
                  className="text-3xl text-my-dark-blue font-sans font-bold pb-8"
                >
                  <a
                    target="_blank"
                    href={link}
                    rel="noreferrer"
                    onClick={() => setShowSidebar(false)}
                  >
                    {page}
                  </a>
                </h1>
              );
            })}
          </div>
          <button
            aria-label="Open projects page"
            className="flex text-3xl text-my-dark-blue items-center cursor-pointer fixed top-6 z-40 right-6"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <XMarkIcon className="w-12 fill-warning-dark flex-none stroke-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
