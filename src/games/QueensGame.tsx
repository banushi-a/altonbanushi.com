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

const GRID_SIZE = 5;

// Generate random colors for the game
const generateRandomColor = (): string => {
  const hue = Math.floor(Math.random() * 360);
  const saturation = 60 + Math.floor(Math.random() * 20); // 60-80%
  const lightness = 65 + Math.floor(Math.random() * 15); // 65-80%
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

// Check if a position is valid for placing a queen
const isValidQueenPosition = (
  queens: Array<{ row: number; col: number }>,
  row: number,
  col: number
): boolean => {
  for (const queen of queens) {
    // Check same row or column
    if (queen.row === row || queen.col === col) {
      return false;
    }
    // Check if adjacent (within 1 square in any direction)
    const rowDiff = Math.abs(queen.row - row);
    const colDiff = Math.abs(queen.col - col);
    if (rowDiff <= 1 && colDiff <= 1) {
      return false;
    }
  }
  return true;
};

// Place queens on the board using backtracking
const placeQueens = (
  gridSize: number
): Array<{ row: number; col: number }> | null => {
  const queens: Array<{ row: number; col: number }> = [];

  const backtrack = (queenIndex: number): boolean => {
    if (queenIndex === gridSize) {
      return true; // Successfully placed all queens
    }

    // Try placing queen in each row for this column
    const positions = Array.from({ length: gridSize }, (_, i) => i);
    // Shuffle to get random placement
    for (let i = positions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [positions[i], positions[j]] = [positions[j], positions[i]];
    }

    for (const row of positions) {
      if (isValidQueenPosition(queens, row, queenIndex)) {
        queens.push({ row, col: queenIndex });
        if (backtrack(queenIndex + 1)) {
          return true;
        }
        queens.pop();
      }
    }
    return false;
  };

  if (backtrack(0)) {
    return queens;
  }
  return null;
};

// Create color boundaries for each queen using region growing
const createColorBoundaries = (
  gridSize: number,
  queens: Array<{ row: number; col: number }>
): string[][] => {
  // Initialize grid with colors
  const colors: string[][] = Array(gridSize)
    .fill(null)
    .map(() => Array(gridSize).fill(""));

  // Generate a color for each queen
  const queenColors = queens.map(() => generateRandomColor());

  // Assign each queen's cell its color
  queens.forEach((queen, idx) => {
    colors[queen.row][queen.col] = queenColors[idx];
  });

  // Track which cells belong to which queen's region
  const regions: Set<string>[] = queens.map(
    (queen) => new Set([`${queen.row},${queen.col}`])
  );

  // Keep track of boundary cells for each region
  const boundaries: Set<string>[] = queens.map((queen) => {
    const boundary = new Set<string>();
    // Add adjacent cells to initial boundary
    const directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];
    for (const [dr, dc] of directions) {
      const newRow = queen.row + dr;
      const newCol = queen.col + dc;
      if (
        newRow >= 0 &&
        newRow < gridSize &&
        newCol >= 0 &&
        newCol < gridSize
      ) {
        boundary.add(`${newRow},${newCol}`);
      }
    }
    return boundary;
  });

  // Total cells to assign
  const totalCells = gridSize * gridSize;
  let assignedCells = queens.length;

  // Grow regions randomly until all cells are assigned
  while (assignedCells < totalCells) {
    // Pick a random region that still has available boundary cells
    const availableRegions = boundaries
      .map((boundary, idx) => ({ boundary, idx }))
      .filter(({ boundary }) => boundary.size > 0);

    if (availableRegions.length === 0) break;

    const { boundary, idx } =
      availableRegions[Math.floor(Math.random() * availableRegions.length)];

    // Pick a random boundary cell
    const boundaryArray = Array.from(boundary);
    const randomBoundaryCell =
      boundaryArray[Math.floor(Math.random() * boundaryArray.length)];
    const [row, col] = randomBoundaryCell.split(",").map(Number);

    // Check if this cell is already assigned
    if (colors[row][col] !== "") {
      boundary.delete(randomBoundaryCell);
      continue;
    }

    // Assign this cell to the region
    colors[row][col] = queenColors[idx];
    regions[idx].add(randomBoundaryCell);
    boundary.delete(randomBoundaryCell);
    assignedCells++;

    // Add new neighbors to boundary
    const directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];
    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;
      if (
        newRow >= 0 &&
        newRow < gridSize &&
        newCol >= 0 &&
        newCol < gridSize &&
        colors[newRow][newCol] === ""
      ) {
        boundary.add(`${newRow},${newCol}`);
      }
    }
  }

  return colors;
};

const initializeGrid = (gridSize: number = GRID_SIZE): Cell[][] => {
  // Place queens
  let queens = placeQueens(gridSize);
  do {
    queens = placeQueens(gridSize);
  } while (!queens);

  // Create color boundaries
  const colors = createColorBoundaries(gridSize, queens);

  // Build the grid with colors and empty states
  const grid: Cell[][] = [];
  for (let row = 0; row < gridSize; row++) {
    const gridRow: Cell[] = [];
    for (let col = 0; col < gridSize; col++) {
      gridRow.push({
        color: colors[row][col],
        state: CellState.EMPTY,
      });
    }
    grid.push(gridRow);
  }
  return grid;
};

const QueensGame = (): JSX.Element => {
  const [gameState, setGameState] = useState<Cell[][]>(initializeGrid());
  const [showInstructions, setShowInstructions] = useState(false);
  const instructionsRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startTime, setStartTime] = useState<number>(Date.now());
  const [hasWon, setHasWon] = useState(false);
  const [completionTime, setCompletionTime] = useState<number>(0);
  const victoryRef = useRef<HTMLDivElement>(null);

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

  // Check if the game is won
  const checkWinCondition = (grid: Cell[][]): boolean => {
    const gridSize = grid.length;

    // Count queens and track their positions
    const queens: Array<{ row: number; col: number; color: string }> = [];

    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        if (grid[row][col].state === CellState.SELECTED) {
          queens.push({ row, col, color: grid[row][col].color });
        }
      }
    }

    // Must have exactly gridSize queens
    if (queens.length !== gridSize) {
      return false;
    }

    // Check constraints
    for (let i = 0; i < queens.length; i++) {
      for (let j = i + 1; j < queens.length; j++) {
        const q1 = queens[i];
        const q2 = queens[j];

        // Same row or column
        if (q1.row === q2.row || q1.col === q2.col) {
          return false;
        }

        // Adjacent (within 1 square)
        const rowDiff = Math.abs(q1.row - q2.row);
        const colDiff = Math.abs(q1.col - q2.col);
        if (rowDiff <= 1 && colDiff <= 1) {
          return false;
        }
      }

      // Each queen must be in a different colored region
      for (let j = i + 1; j < queens.length; j++) {
        if (queens[i].color === queens[j].color) {
          return false;
        }
      }
    }

    return true;
  };

  const resetGame = () => {
    setGameState(initializeGrid());
    setStartTime(Date.now());
    setHasWon(false);
    setCompletionTime(0);
  };

  // Format time in MM:SS format
  const formatTime = (milliseconds: number): string => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
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

  // Check for win condition after game state changes
  useEffect(() => {
    if (!hasWon && checkWinCondition(gameState)) {
      const endTime = Date.now();
      const timeTaken = endTime - startTime;
      setCompletionTime(timeTaken);
      setHasWon(true);
    }
  }, [gameState, hasWon, startTime]);

  // Close victory modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        hasWon &&
        victoryRef.current &&
        !victoryRef.current.contains(event.target as Node)
      ) {
        // Don't close victory modal by clicking outside, require explicit action
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [hasWon]);

  return (
    <div className="flex flex-col items-center gap-6 p-6 font-sans relative">
      {/* Victory Pop-up */}
      {hasWon && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div
            ref={victoryRef}
            className="bg-gradient-to-br from-green-500 to-teal-600 border-4 border-yellow-400 rounded-2xl p-8 shadow-2xl transform animate-bounce-in max-w-md"
          >
            <div className="text-center">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-4xl font-bold text-white mb-4">
                Congratulations!
              </h2>
              <p className="text-xl text-white/90 mb-6">
                You solved the puzzle in
              </p>
              <div className="text-5xl font-bold text-yellow-300 mb-8">
                {formatTime(completionTime)}
              </div>
              <button
                onClick={resetGame}
                className="bg-white hover:bg-gray-100 text-green-600 font-bold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Play Again
              </button>
            </div>
          </div>
        </div>
      )}

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

      <div
        className={`grid grid-cols-5 grid-cols-${GRID_SIZE} bg-black p-1 rounded-lg shadow-2xl select-none`}
      >
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
