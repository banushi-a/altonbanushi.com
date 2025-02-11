type GlowingTextProps = {
  text?: string;
  size?: "H1" | "H2" | "H3";
  href?: any;
};

const GlowingText = ({
  text,
  size = "H1",
  href,
}: GlowingTextProps): JSX.Element => {
  let sizeStyle = "text-8xl lg:text-9xl font-abril";
  if (size === "H2") sizeStyle = "text-7xl lg:text-8xl font-abril";
  if (size === "H3") sizeStyle = "text-xl lg:text-2xl font-sans";

  return (
    <h2
      className={`${sizeStyle} hover:text-white/75 transition-all duration-700 relative group font-medium`}
    >
      <span className="absolute inset-0 blur-lg opacity-0 group-hover:opacity-100 group-hover:blur-xl transition-all duration-700 ease-in-out bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></span>
      <span className="relative">
        <a href={href} target="_blank" rel="noreferrer">
          {text}
        </a>
      </span>
    </h2>
  );
};

export default GlowingText;
