import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export interface GameData {
  name: string;
  tagline: string;
  imageUrl: string;
  slug: string;
}

interface GameCardProps {
  game: GameData;
  index: number;
}

const GameCard = ({ game, index }: GameCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const cardClass =
    "bg-gray-900/50 text-white border border-gray-700 hover:border-gray-500 hover:bg-gray-800/50 hover:shadow-[0_0_20px_5px_rgba(60,166,185,0.3),0_0_30px_10px_rgba(168,85,247,0.2)]";

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    gsap.set(card, {
      y: 50,
      opacity: 0,
      scale: 0.9,
    });

    gsap.to(card, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: "power2.out",
      delay: index * 0.1,
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === card) {
          trigger.kill();
        }
      });
    };
  }, [index]);

  const handleClick = () => {
    navigate(`/games/${game.slug}`);
  };

  return (
    <div
      ref={cardRef}
      onClick={handleClick}
      className={`${cardClass} rounded-lg p-6 cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-105 w-full max-w-sm mx-auto`}
    >
      {/* Square image container */}
      <div className="aspect-square w-full mb-4 overflow-hidden rounded-lg bg-gray-800/50">
        <img
          src={game.imageUrl}
          alt={game.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Game info */}
      <div className="text-center">
        <h3 className="text-lg lg:text-xl font-semibold mb-2">{game.name}</h3>
        <p className="text-sm lg:text-base text-gray-300 italic">{game.tagline}</p>
      </div>
    </div>
  );
};

export default GameCard;