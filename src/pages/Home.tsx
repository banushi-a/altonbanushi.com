import Header from "../components/Header";
import Hero from "../components/Hero";
import useMousePosition from "../hooks/useMousePosition";
import useWindowDimensions from "../hooks/useWindowDimensions";

const Home = (): JSX.Element => {
  /**
   * Returns the (x, y) position of a particle moving in a circle with random noise,
   * clamped to the [0, 100] percentage range.
   *
   * @param centerX - The x-coordinate of the center (in percent, 0 to 100)
   * @param centerY - The y-coordinate of the center (in percent, 0 to 100)
   * @param radius - The radius of the circular path (in percent)
   * @param t - The parameter (in radians) determining the position on the circle
   * @param noiseAmplitude - The maximum deviation due to noise (default is 5)
   * @returns An object with x and y properties, each between 0 and 100.
   */
  function getParticlePosition(
    centerX: number,
    centerY: number,
    radius: number,
    t: number,
    noiseAmplitude: number = 1
  ): string {
    // Compute the ideal circular motion position.
    let x = centerX + radius * Math.cos(t);
    let y = centerY + radius * Math.sin(t);

    x += (Math.random() - 0.5) * noiseAmplitude;
    y += (Math.random() - 0.5) * noiseAmplitude;

    // Clamp the values between 0 and 100.
    x = Math.max(0, Math.min(100, x));
    y = Math.max(0, Math.min(100, y));

    return `${x.toFixed(2)}% ${y.toFixed(2)}%`;
  }

  const interpolateStyles = (
    x: number | null,
    y: number | null,
    width: number,
    height: number
  ) => {
    x = x || 0;
    y = y || 0;
    let b = ((x ? x / width : 0) * 360) / 3;
    x = (x / width) * 2 * Math.PI;
    y = (y / height) * 2 * Math.PI;

    const posn1 = getParticlePosition(22, 31, 10, x + y);
    const posn2 = getParticlePosition(99, 51, 15, y + y);
    const posn3 = getParticlePosition(86, 53, 13, x - x);
    const posn4 = getParticlePosition(85, 33, 20, y + x);
    const posn5 = getParticlePosition(36, 70, 10, x + x - y);
    const posn6 = getParticlePosition(73, 72, 10, y - x);
    const posn7 = getParticlePosition(59, 50, 10, x - y);

    return {
      backgroundImage: `radial-gradient(at ${posn1}, hsla(${
        (195 + b) % 360
      },100%,62%,1) 0px, transparent 50%),\nradial-gradient(at ${posn2}, hsla(${
        (99 + b) % 360
      },100%,75%,1) 0px, transparent 50%),\nradial-gradient(at ${posn3}, hsla(${
        (261 + b) % 360
      },100%,67%,1) 0px, transparent 50%),\nradial-gradient(at ${posn4}, hsla(${
        (278 + b) % 360
      },100%,71%,1) 0px, transparent 50%),\nradial-gradient(at ${posn5}, hsla(${
        (75 + b) % 360
      },100%,61%,1) 0px, transparent 50%),\nradial-gradient(at ${posn6}, hsla(${
        (236 + b) % 360
      },100%,78%,1) 0px, transparent 50%),\nradial-gradient(at ${posn7}, hsla(${
        (327 + b) % 360
      },89%,47%,1) 0px, transparent 50%)`,
    };
  };

  const { width, height } = useWindowDimensions();
  const { x, y } = useMousePosition();

  return (
    <>
      <Header />
      <section
        className="w-screen h-screen flex flex-col items-center justify-around font-serif"
        style={interpolateStyles(x, y, width, height)}
      >
        <Hero />
      </section>
    </>
  );
};

export default Home;
