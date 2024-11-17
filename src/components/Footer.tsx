import { Link } from "react-router-dom";
import Logo from "../images/logo.png";

const Footer = (): JSX.Element => {
  return (
    <footer className="h-12 flex items-center justify-between px-8 py-12 border-t-4 bg-[#0798f9] text-white">
      <div className="flex flex-col justify-start">
        <h2 className="text-xl font-bold">This is the end!</h2>
        <h3 className="text-lg font-semibold">
          <a href="#header">go back up 🔝</a>
        </h3>
      </div>
      <Link to="/">
        <img src={Logo} alt="Logo" className="h-10 hover:animate-pulse" />
      </Link>
    </footer>
  );
};

export default Footer;
