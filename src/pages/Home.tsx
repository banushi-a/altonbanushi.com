import { useState, useEffect } from "react";
import Header from "../components/Header";
import Hero from "../sections/Hero";
import AboutMe from "../sections/Experience";
import Footer from "../components/Footer";
import Blob from "../components/Blob";

const generateBlobPositions = (count: number, minDistance: number) => {
  const positions: { top: number; left: number }[] = [];

  const isTooClose = (x1: number, y1: number, x2: number, y2: number) => {
    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    return distance < minDistance;
  };

  for (let i = 0; i < count; i++) {
    let top: number, left: number;
    let isValidPosition = false;

    while (!isValidPosition) {
      top = Math.random() * 80 + 10; // Random top position between 10% and 90%
      left = Math.random() * 80 + 10; // Random left position between 10% and 90%

      const currentLeft = left;
      const currentTop = top;
      isValidPosition = positions.every(
        (pos) => !isTooClose(pos.left, pos.top, currentLeft, currentTop)
      );

      if (isValidPosition) {
        positions.push({ top, left });
      }
    }
  }

  return positions;
};

const Home = (): JSX.Element => {
  const [blobPositions, setBlobPositions] = useState(
    generateBlobPositions(10, 20)
  );

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
        return distance < 0.1 * Math.min(windowWidth, windowHeight); // 10% of the smaller screen dimension
      });

      if (isMouseNearBlob) {
        setBlobPositions(generateBlobPositions(5, 20)); // Regenerate positions
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
