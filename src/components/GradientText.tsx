export type GradientTextProps = {
  children: any;
  className?: string;
};

const GradientText = ({
  children,
  className,
}: GradientTextProps): JSX.Element => {
  const concatClassName = `text-[4rem] sm:text-[6rem] md:text-[9rem] mb-8 bg-gradient-to-r from-my-pink to-my-blue bg-clip-text text-transparent ${className}`;

  return <h1 className={concatClassName}>{children}</h1>;
};

export default GradientText;
