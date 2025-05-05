import { useState, useEffect } from "react";
import Header from "../components/Header";
import Hero from "../sections/Hero";
import AboutMe from "../sections/Experience";
import Footer from "../components/Footer";
import Blob from "../components/Blob";
import { positions as predefinedPositions } from "../constants/blobPositions";

const Home = (): JSX.Element => {
  const [, setCurrentIndex] = useState(0);
  const [blobPositions, setBlobPositions] = useState(predefinedPositions[0]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      const isMouseNearBlob = blobPositions.some((pos) => {
        const blobX = (pos.left / 100) * windowWidth;
        const blobY = (pos.top / 100) * windowHeight;
        const distance = Math.sqrt(
          (clientX - blobX) ** 2 + (clientY - blobY) ** 2
        );
        return distance < 0.1 * Math.min(windowWidth, windowHeight);
      });

      if (isMouseNearBlob) {
        setCurrentIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % predefinedPositions.length;
          setBlobPositions(predefinedPositions[nextIndex]);
          return nextIndex;
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [blobPositions]);

  return (
    <div className="overflow-clip bg-my-blue relative">
      <Header />
      <section className="w-screen min-h-screen flex flex-col items-center justify-around font-serif">
        <Hero />
      </section>
      {blobPositions.map((pos, index) => (
        <Blob
          key={index}
          className="absolute z-0 transition-all duration-500"
          myStyle={{
            top: `${pos.top}%`,
            left: `${pos.left}%`,
          }}
        />
      ))}
      <AboutMe />
      <Footer />
    </div>
  );
};

export default Home;
