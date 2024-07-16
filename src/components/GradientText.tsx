export type GradientTextProps = {
  direction?: "t" | "b" | "l" | "r";
  children: any;
  className?: string;
};

const GradientText = ({
  direction = "r",
  children,
  className,
}: GradientTextProps): JSX.Element => {
  return (
    <h1
      className={`text-[4rem] sm:text-[6rem] md:text-[9rem] mb-8 bg-gradient-to-${direction} from-my-pink to-my-blue bg-clip-text text-transparent ${className}`}
    >
      {children}
    </h1>
  );
};

export default GradientText;
