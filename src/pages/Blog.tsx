import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import BlogLink from "../components/BlogLink";
import Logo from "../images/logo.png";
import bookImage from "../images/blogImages/statsImage.png";
import graphicsImage from "../images/blogImages/graphics.png";
import coopOffer from "../images/blogImages/coopOffer.jpg";

gsap.registerPlugin(ScrollTrigger);

const Blog = (): JSX.Element => {
  const blogLinks: JSX.Element[] = [
    <BlogLink
      href="https://medium.com/@altonbanushi/what-are-you-going-to-do-with-math-18df2ff067cd"
      title="What are you going to do with math?"
      previewText="I’ve heard this question so, so many times. Be it from friends, family, or people I just introduced"
      date={new Date("July 20, 2024")}
      image={bookImage}
    />,
    <BlogLink
      href="https://medium.com/@altonbanushi/intersection-point-3d-computer-graphics-2bf88cac993c"
      title="Intersection Point: 3D Computer Graphics"
      previewText="It is hard for people not familiar with the field of computer graphics to recognize where exactly"
      date={new Date("July 21, 2024")}
      image={graphicsImage}
    />,
    <BlogLink
      href="https://medium.com/@altonbanushi/leveraging-cs-math-in-the-co-op-search-acd443bc3797"
      title="Leveraging CS + Math in the Co-op Search"
      previewText="As a student at Northeastern University, navigating and making use of the co-op program is a cornerstone"
      date={new Date("July 22, 2024")}
      image={coopOffer}
    />,
  ];

  return (
    <div
      className="grid grid-cols-7"
      style={{
        background:
          "linear-gradient(190deg, rgb(28, 28, 65) 30%, rgb(7, 152, 249) 100%)",
      }}
    >
      <div className="flex flex-col p-8 col-span-7 lg:col-span-2 text-white border-b lg:border-b-0 lg:border-r border-white">
        <div className="flex justify-end items-center h-14 gap-4">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-my-pink to-my-blue bg-clip-text text-transparent">
            AB
          </h2>
          <img src={Logo} alt="Logo" className="h-12" />
        </div>
        <h2 className="font-semibold italic text-right">
          Exploring the place where computer science, mathematics, and curiosity
          live
        </h2>
      </div>
      <div className="text-white min-h-[95dvh] p-8 flex flex-col justify-start items-center gap-4 col-span-7 lg:col-span-5">
        {blogLinks}
      </div>
    </div>
  );
};

export default Blog;
