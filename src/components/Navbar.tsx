import { Link, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const liClassName =
  "hover:text-white active:text-[#e13ee5] hover:text-md transition duration-300 ease-in-out";

const Navbar = (): JSX.Element => {
  return (
    <>
      <header className="flex items-center justify-between space-x-16 md:space-x-0 lg:space-x-0 min-w-100 h-24 bg-my-dark-blue px-10 py-2">
        <h1 className="font-bold text-2xl tracking-[0.2em] text-white">
          <Link to="/">AB</Link>
        </h1>
        <nav className="text-[#b4c0d3] text-sm tracking-[0.125em] hidden sm:inline-block">
          <ul className="flex justify-around w-[35em]">
            <li className={liClassName}>
              <Link to="/projects">Projects</Link>
            </li>
            <li className={liClassName}>
              <Link to="/experience">Experience</Link>
            </li>
            <li className={liClassName}>
              <Link to="/blog">Blog</Link>
            </li>
            <li className={liClassName}>
              <a
                target="_blank"
                href="https://github.com/banushi-a"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
            <li className={liClassName}>
              <a
                target="_blank"
                href={require("../resume-alton-banushi.pdf")}
                rel="noreferrer"
              >
                Resume
              </a>
            </li>
            <li className={liClassName}>
              <a href="mailto:altonbanushi@icloud.com">Contact</a>
            </li>
          </ul>
        </nav>

        <Sidebar className="sm:hidden" />
      </header>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;
