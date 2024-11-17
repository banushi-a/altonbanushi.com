import { Link } from "react-router-dom";
import Logo from "../images/logoGreen.png";

const Footer = (): JSX.Element => {
  return (
    <footer className="h-12 flex items-center justify-between px-8 py-12 border-t-4 border-my-dark-green bg-[#0798f9] text-white">
      <div className="flex flex-col justify-start">
        <h2 className="text-2xl font-bold">This is the end!</h2>
        <h3 className="text-lg font-semibold italic hover:underline">
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
