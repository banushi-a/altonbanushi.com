import GlowingText from "../components/GlowingText";
import GameCard, { type GameData } from "../components/GameCard";
import QueensThumbnail from "../assets/images/queensThumbnail.png";

const sampleGames: GameData[] = [
  {
    name: "Queens",
    tagline: "A LinkedIn Queens Clone",
    imageUrl: QueensThumbnail,
    slug: "queens",
  },
];

const Games = (): JSX.Element => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-4">
      <GlowingText text="games" size="H2" />
      <div className="mt-12 w-full max-w-6xl">
        {sampleGames.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {sampleGames.map((game, index) => (
              <GameCard key={game.slug} game={game} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-400 text-lg">
            Games coming soon...
          </div>
        )}
      </div>
    </section>
  );
};

export default Games;
