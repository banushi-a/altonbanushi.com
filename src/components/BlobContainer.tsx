import { useState, useEffect } from "react";
import Blob from "./Blob";
import { positions as predefinedPositions } from "../constants/blobPositions";

const BlobContainer = () => {
  const [blobPositions, setBlobPositions] = useState(
    predefinedPositions[Math.floor(Math.random() * predefinedPositions.length)]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      // After the shrinking animation, update positions and reset transition
      setTimeout(() => {
        const nextIndex = Math.floor(
          Math.random() * predefinedPositions.length
        );
        setBlobPositions(predefinedPositions[nextIndex]);
      }, 2500); // Match this duration to the shrinking animation duration
    }, Math.random() * 5000 + 5000); // Random interval between 5-10 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <>
      {blobPositions.map((pos, index) => (
        <Blob
          key={index}
          top={pos.top}
          left={pos.left}
          className={`absolute z-0 scale-100 duration-[2500ms]`}
        />
      ))}
    </>
  );
};

export default BlobContainer;
