import QueensGame from "./QueensGame";

export interface GameInfo {
  name: string;
  description: string;
  component: React.ComponentType;
}

export const gameMap: Record<string, GameInfo> = {
  queens: {
    name: "Queens",
    description: "A LinkedIn Queens Clone - Place queens on the board so they don't attack each other",
    component: QueensGame,
  },
};

export const getGameBySlug = (slug: string): GameInfo | null => {
  return gameMap[slug] || null;
};