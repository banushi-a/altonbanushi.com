import { useState, useEffect, useRef } from "react";

export enum CellState {
  EMPTY = "empty",
  USER_CROSSED = "user-crossed",
  AUTO_CROSSED = "auto-crossed",
  SELECTED = "selected",
}

export interface Cell {
  color: string;
  state: CellState;
}

const GRID_SIZE = 8;

const QueensGame = (): JSX.Element => {
  const initializeGrid = (): Cell[][] => {
    const grid: Cell[][] = [];
    for (let row = 0; row < GRID_SIZE; row++) {
      const gridRow: Cell[] = [];
      for (let col = 0; col < GRID_SIZE; col++) {
        gridRow.push({
          color: (row + col) % 2 === 0 ? "#f0f0f0" : "#ff4422",
          state: CellState.EMPTY,
        });
      }
      grid.push(gridRow);
    }
    return grid;
  };

  const [gameState, setGameState] = useState<Cell[][]>(initializeGrid());
  const [showInstructions, setShowInstructions] = useState(false);
  const instructionsRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);

  const getNextState = (row: number, col: number) => {
    const cell = gameState[row][col];
    switch (cell.state) {
      case CellState.EMPTY:
        return CellState.USER_CROSSED;
      case CellState.USER_CROSSED:
      case CellState.AUTO_CROSSED:
        return CellState.SELECTED;
      case CellState.SELECTED:
      default:
        return CellState.EMPTY;
    }
  };

  const toggleCell = (row: number, col: number) => {
    setGameState((prev) => {
      const newState = prev.map((r, rIdx) => {
        if (rIdx === row) {
          return r.map((obj, cIdx) => {
            if (cIdx === col) {
              return { ...obj, state: getNextState(row, col) };
            }
            return obj;
          });
        }
        return r;
      });
      return newState;
    });
  };

  const handleMouseDown = (row: number, col: number) => {
    if (gameState[row][col].state === CellState.EMPTY) {
      setIsMouseDown(true);
    }
    toggleCell(row, col);
  };

  const handleMouseEnter = (row: number, col: number) => {
    if (isMouseDown) {
      // Mark cell as crossed if empty (this handles dragging)
      if (gameState[row][col].state === CellState.EMPTY) {
        setGameState((prev) => {
          const newState = prev.map((r) => [...r]);
          newState[row][col].state = CellState.USER_CROSSED;
          return newState;
        });
      }
    }
  };

  const getCellDisplayClass = (cell: Cell): string => {
    const baseClasses =
      "w-12 h-12 border border-black cursor-pointer hover:opacity-80 flex items-center justify-center text-2xl font-bold text-black";
    return baseClasses;
  };

  const getCellContent = (cell: Cell): string => {
    switch (cell.state) {
      case CellState.SELECTED:
        return "♛";
      case CellState.USER_CROSSED:
      case CellState.AUTO_CROSSED:
        return "×";
      default:
        return "";
    }
  };

  const resetGame = () => {
    setGameState(initializeGrid());
  };

  // Close instructions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        showInstructions &&
        instructionsRef.current &&
        !instructionsRef.current.contains(event.target as Node)
      ) {
        setShowInstructions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showInstructions]);

  // Global mouse up event for ending drag
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isMouseDown) {
        setIsMouseDown(false);
      }
    };

    document.addEventListener("mouseup", handleGlobalMouseUp);
    return () => {
      document.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, [isMouseDown]);

  return (
    <div className="flex flex-col items-center gap-6 p-6 font-sans relative">
      {/* Help Button - Top Right */}
      <div className="absolute top-2 right-2">
        <button
          onClick={() => setShowInstructions(!showInstructions)}
          className="w-8 h-8 bg-gray-700/80 hover:bg-gray-600/80 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:shadow-lg"
          aria-label="Toggle instructions"
        >
          ?
        </button>
      </div>

      {/* Instructions Pop-up */}
      {showInstructions && (
        <div
          ref={instructionsRef}
          className="absolute top-12 right-2 bg-gray-900/95 border border-gray-700 rounded-lg p-4 shadow-xl z-10 w-64"
        >
          <div className="text-sm text-gray-300">
            <p className="font-semibold text-white mb-2">Instructions:</p>
            <ul className="space-y-1">
              <li>• Click to cycle: empty → crossed (×) → queen (♛) → empty</li>
              <li>
                • <strong>Drag</strong> from empty cell to mark path as crossed
              </li>
            </ul>
            <p className="text-xs text-gray-400 mt-3">
              Goal: Place exactly one queen in each column and row without two
              queens positioned adjacent
            </p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-8 bg-black p-1 rounded-lg shadow-2xl select-none">
        {gameState.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={getCellDisplayClass(cell)}
              style={{
                backgroundColor: cell.color,
              }}
              onMouseDown={() => handleMouseDown(rowIndex, colIndex)}
              onMouseEnter={() => handleMouseEnter(rowIndex, colIndex)}
            >
              {getCellContent(cell)}
            </div>
          ))
        )}
      </div>

      <div className="flex gap-4">
        <button
          onClick={resetGame}
          className="bg-my-teal/20 border border-my-teal/50 hover:bg-my-teal/30 hover:border-my-teal text-white px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(60,166,185,0.5)]"
        >
          Reset Game
        </button>
      </div>
    </div>
  );
};

export default QueensGame;
