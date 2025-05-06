import { useMemo } from "react";

const radiusOptions = [
  "68% 32% 70% 30% / 36% 60% 40% 64% ",
  "25% 75% 58% 42% / 36% 60% 40% 64% ",
  "25% 75% 58% 42% / 51% 33% 67% 49% ",
  "72% 28% 80% 20% / 19% 71% 29% 81% ",
  "28% 72% 31% 69% / 60% 25% 75% 40% ",
];

const gradientOptions = [
  "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500",
  "bg-gradient-to-l from-blue-500 via-purple-500 to-pink-500",
  "bg-gradient-to-t from-blue-500 via-purple-500 to-pink-500",
  "bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500",
  "bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500",
  "bg-gradient-to-tl from-blue-500 via-purple-500 to-pink-500",
  "bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500",
  "bg-gradient-to-bl from-blue-500 via-purple-500 to-pink-500",
];

interface BlobProps {
  top: number;
  left: number;
  className?: string;
}

const Blob = ({ top, left, className }: BlobProps) => {
  const randomIdx: number = useMemo(
    () => Math.floor(Math.random() * gradientOptions.length),
    []
  );

  // Generate random scaling values for this blob
  const scaleStart = useMemo(() => Math.random() * 0.5 + 0.5, []);
  const scaleEnd = useMemo(() => Math.random() + 0.5, []);
  const animationDuration = useMemo(() => `${Math.random() * 5 + 3}s`, []);

  return (
    <div
      className={`w-52 h-52 animate-grow-shrink ${className} ${gradientOptions.at(
        randomIdx
      )}`}
      style={
        {
          borderRadius: radiusOptions.at(randomIdx % radiusOptions.length),
          top: `${top}%`,
          left: `${left}%`,
          "--scale-start": scaleStart,
          "--scale-end": scaleEnd,
          "--animation-duration": animationDuration,
        } as React.CSSProperties
      }
    >
      {/* Glassmorphism overlay */}
      <div
        className="absolute inset-0 w-full h-full backdrop-blur-md bg-white/20"
        style={{
          borderRadius: radiusOptions.at(
            (randomIdx % radiusOptions.length) - 1
          ),
        }}
      />
    </div>
  );
};

export default Blob;
