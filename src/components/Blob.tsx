interface BlobProps {
  className?: string;
  myStyle?: any;
}

const radiusOptions = [
  "68% 32% 70% 30% / 36% 60% 40% 64% ",
  "25% 75% 58% 42% / 36% 60% 40% 64% ",
  "25% 75% 58% 42% / 51% 33% 67% 49% ",
  "72% 28% 80% 20% / 19% 71% 29% 81% ",
  "28% 72% 31% 69% / 60% 25% 75% 40% ",
];

const gradientOptions = [
  // Blue Purple Pink
  "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500",
  "bg-gradient-to-l from-blue-500 via-purple-500 to-pink-500",
  "bg-gradient-to-t from-blue-500 via-purple-500 to-pink-500",
  "bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500",
  "bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500",
  "bg-gradient-to-tl from-blue-500 via-purple-500 to-pink-500",
  "bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500",
  "bg-gradient-to-bl from-blue-500 via-purple-500 to-pink-500",
  "bg-radial from-blue-500 via-purple-500 to-pink-500",
  "bg-radial from-pink-500 via-purple-500 to-blue-500",
  // Blue Teal Green
  "bg-gradient-to-r from-blue-500 via-my-teal to-my-green",
  "bg-gradient-to-l from-blue-500 via-my-teal to-my-green",
  "bg-gradient-to-t from-blue-500 via-my-teal to-my-green",
  "bg-gradient-to-b from-blue-500 via-my-teal to-my-green",
  "bg-gradient-to-tr from-blue-500 via-my-teal to-my-green",
  "bg-gradient-to-tl from-blue-500 via-my-teal to-my-green",
  "bg-gradient-to-br from-blue-500 via-my-teal to-my-green",
  "bg-gradient-to-bl from-blue-500 via-my-teal to-my-green",
  "bg-radial from-blue-500 via-my-teal to-my-green",
  "bg-radial from-my-green via-my-teal to-blue-500",
];

const Blob = ({ className, myStyle }: BlobProps) => {
  const randomIdx: number = Math.floor(Math.random() * gradientOptions.length);

  myStyle["borderRadius"] = radiusOptions.at(
    randomIdx % (radiusOptions.length - 1)
  );

  return (
    <div
      className={`w-52 h-52 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:scale-110 ${className} ${gradientOptions.at(
        randomIdx % (gradientOptions.length - 1)
      )}`}
      style={myStyle}
    >
      {/* Glassmorphism overlay */}
      <div
        className={`absolute inset-0 w-full h-full rounded-full backdrop-blur-md bg-white/20 shadow-lg`}
        style={{
          borderRadius: radiusOptions.at(
            (randomIdx % (radiusOptions.length - 1)) - 1
          ),
        }}
      />
    </div>
  );
};

export default Blob;
