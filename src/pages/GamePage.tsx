import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import MeshBackground from "../components/MeshBackground";
import GlowingText from "../components/GlowingText";
import { getGameBySlug } from "../games";

const GamePage = (): JSX.Element => {
  const { slug } = useParams<{ slug: string }>();
  const gameInfo = slug ? getGameBySlug(slug) : null;

  const renderGameContent = () => {
    if (!gameInfo) {
      return (
        <div className="max-w-4xl mx-auto text-center">
          <GlowingText text="Game Not Found" size="H2" />
          <div className="mt-12 bg-gray-900/50 text-white border border-red-700 rounded-lg p-8 font-sans">
            <p className="text-lg mb-6 text-red-300">
              Game <span className="text-red-400 font-semibold">"{slug}"</span>{" "}
              not found.
            </p>
            <p className="text-gray-300 mb-6">
              The game you're looking for doesn't exist or may have been moved.
            </p>
            <Link
              to="/#games"
              className="inline-block font-sans bg-my-teal/20 border border-my-teal/50 hover:bg-my-teal/30 hover:border-my-teal text-white px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(60,166,185,0.5)]"
            >
              ← Back to Games
            </Link>
          </div>
        </div>
      );
    }

    const GameComponent = gameInfo.component;
    return (
      <div className="max-w-6xl mx-auto">
        <div className="text-center my-8">
          <GlowingText text={gameInfo.name} size="H2" />
          <p className="text-gray-300 text-lg mt-4 font-sans">
            {gameInfo.description}
          </p>
        </div>

        <div className="bg-gray-900/30 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm">
          <GameComponent />
        </div>

        <div className="text-center mt-8">
          <Link
            to="/#games"
            className="inline-block font-sans bg-my-teal/20 border border-my-teal/50 hover:bg-my-teal/30 hover:border-my-teal text-white px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(60,166,185,0.5)]"
          >
            ← Back to Games
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-dvh overflow-clip bg-black relative">
      {/* Mesh background with varying opacity across sections */}
      <div className="fixed inset-0 pointer-events-none">
        <MeshBackground />
      </div>

      <Header />

      <section className="w-screen min-h-screen flex flex-col items-center justify-center font-serif relative z-10 px-4 py-20">
        {renderGameContent()}
      </section>
    </div>
  );
};

export default GamePage;
