import Header from "../components/Header";
import Hero from "../components/Hero";
import useMousePosition from "../hooks/useMousePosition";
import useWindowDimensions from "../hooks/useWindowDimensions";

const Home = (): JSX.Element => {
  const interpolateStyles = (x: number | null, width: number) => {
    let b = ((x ? x / width : 0) * 360) / 3;

    return {
      backgroundImage: `radial-gradient(at 22% 31%, hsla(${
        (195 + b) % 360
      },100%,62%,1) 0px, transparent 50%),\nradial-gradient(at 99% 51%, hsla(${
        (99 + b) % 360
      },100%,75%,1) 0px, transparent 50%),\nradial-gradient(at 86% 53%, hsla(${
        (261 + b) % 360
      },100%,67%,1) 0px, transparent 50%),\nradial-gradient(at 85% 33%, hsla(${
        (278 + b) % 360
      },100%,71%,1) 0px, transparent 50%),\nradial-gradient(at 36% 70%, hsla(${
        (75 + b) % 360
      },100%,61%,1) 0px, transparent 50%),\nradial-gradient(at 73% 72%, hsla(${
        (236 + b) % 360
      },100%,78%,1) 0px, transparent 50%),\nradial-gradient(at 59% 50%, hsla(${
        (327 + b) % 360
      },89%,47%,1) 0px, transparent 50%)`,
    };
  };

  const { width } = useWindowDimensions();
  const { x } = useMousePosition();

  return (
    <>
      <Header />
      <section
        className="w-screen h-screen flex flex-col items-center justify-around font-serif"
        style={interpolateStyles(x, width)}
      >
        <Hero />
      </section>
    </>
  );
};

export default Home;
