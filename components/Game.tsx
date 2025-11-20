"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Star, Bomb, Trophy, RotateCcw } from "lucide-react";

interface FallingObject {
  id: number;
  x: number;
  y: number;
  type: "star" | "bomb";
  speed: number;
}

export default function Game() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [gameState, setGameState] = useState<"menu" | "playing" | "gameover">("menu");
  const [playerX, setPlayerX] = useState(50);
  const [fallingObjects, setFallingObjects] = useState<FallingObject[]>([]);
  const gameAreaRef = useRef<HTMLDivElement>(null);
  const objectIdCounter = useRef(0);

  // Load high score from localStorage
  useEffect(() => {
    const savedHighScore = localStorage.getItem("catchStarsHighScore");
    if (savedHighScore) {
      setHighScore(parseInt(savedHighScore));
    }
  }, []);

  // Start game
  const startGame = () => {
    setScore(0);
    setLives(3);
    setPlayerX(50);
    setFallingObjects([]);
    setGameState("playing");
  };

  // Game over
  const endGame = () => {
    setGameState("gameover");
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem("catchStarsHighScore", score.toString());
    }
  };

  // Handle keyboard controls
  useEffect(() => {
    if (gameState !== "playing") return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setPlayerX((prev) => Math.max(5, prev - 5));
      } else if (e.key === "ArrowRight") {
        setPlayerX((prev) => Math.min(95, prev + 5));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [gameState]);

  // Handle mouse/touch controls
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
      if (gameState !== "playing" || !gameAreaRef.current) return;

      const rect = gameAreaRef.current.getBoundingClientRect();
      let clientX: number;

      if ("touches" in e) {
        clientX = e.touches[0].clientX;
      } else {
        clientX = e.clientX;
      }

      const x = ((clientX - rect.left) / rect.width) * 100;
      setPlayerX(Math.max(5, Math.min(95, x)));
    },
    [gameState]
  );

  // Spawn falling objects
  useEffect(() => {
    if (gameState !== "playing") return;

    const spawnInterval = setInterval(() => {
      const newObject: FallingObject = {
        id: objectIdCounter.current++,
        x: Math.random() * 90 + 5,
        y: 0,
        type: Math.random() > 0.3 ? "star" : "bomb",
        speed: Math.random() * 2 + 2,
      };
      setFallingObjects((prev) => [...prev, newObject]);
    }, 1000);

    return () => clearInterval(spawnInterval);
  }, [gameState]);

  // Update falling objects and collision detection
  useEffect(() => {
    if (gameState !== "playing") return;

    const gameLoop = setInterval(() => {
      setFallingObjects((prev) => {
        const updated = prev
          .map((obj) => ({ ...obj, y: obj.y + obj.speed }))
          .filter((obj) => {
            // Check if object reached bottom
            if (obj.y >= 90) {
              // Check collision with player (within 10% range)
              if (Math.abs(obj.x - playerX) < 8) {
                if (obj.type === "star") {
                  setScore((s) => s + 10);
                } else {
                  setLives((l) => {
                    const newLives = l - 1;
                    if (newLives <= 0) {
                      endGame();
                    }
                    return newLives;
                  });
                }
              }
              return false; // Remove object
            }
            return true; // Keep object
          });
        return updated;
      });
    }, 50);

    return () => clearInterval(gameLoop);
  }, [gameState, playerX]);

  return (
    <div className="h-full flex flex-col items-center justify-center p-4 md:p-6">
      {/* Game Menu */}
      {gameState === "menu" && (
        <div className="text-center space-y-6 max-w-md">
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
              <Star size={40} fill="white" color="white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)]">
            Catch the Stars!
          </h2>
          <p className="oneui-body text-[var(--foreground-secondary)]">
            Move your basket to catch falling stars and avoid bombs!
          </p>
          <div className="space-y-3">
            <div className="flex items-center justify-center gap-3 text-sm text-[var(--foreground-secondary)]">
              <Star size={20} className="text-yellow-500" />
              <span>Catch stars: +10 points</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-sm text-[var(--foreground-secondary)]">
              <Bomb size={20} className="text-red-500" />
              <span>Avoid bombs: -1 life</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 text-[var(--foreground-secondary)]">
            <Trophy size={20} className="text-yellow-500" />
            <span className="font-semibold">High Score: {highScore}</span>
          </div>
          <button
            onClick={startGame}
            className="oneui-btn-primary text-lg px-8 py-3"
          >
            Start Game
          </button>
          <p className="text-xs text-[var(--foreground-tertiary)] mt-4">
            Use arrow keys or mouse/touch to move
          </p>
        </div>
      )}

      {/* Game Playing */}
      {gameState === "playing" && (
        <div className="w-full max-w-2xl space-y-4">
          {/* Score Board */}
          <div className="flex justify-between items-center bg-[var(--background-secondary)] rounded-oneui-lg p-4 shadow-oneui-sm">
            <div className="flex items-center gap-2">
              <Star size={20} className="text-yellow-500" />
              <span className="font-bold text-lg">Score: {score}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">Lives:</span>
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full ${
                      i < lives ? "bg-red-500" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Game Area */}
          <div
            ref={gameAreaRef}
            className="relative w-full aspect-[3/4] bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900 rounded-oneui-lg overflow-hidden shadow-oneui-lg cursor-pointer"
            onMouseMove={handleMouseMove}
            onTouchMove={handleMouseMove}
          >
            {/* Falling Objects */}
            {fallingObjects.map((obj) => (
              <div
                key={obj.id}
                className="absolute transition-none"
                style={{
                  left: `${obj.x}%`,
                  top: `${obj.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                {obj.type === "star" ? (
                  <Star
                    size={24}
                    fill="#fbbf24"
                    color="#fbbf24"
                    className="drop-shadow-lg animate-pulse"
                  />
                ) : (
                  <Bomb
                    size={24}
                    fill="#ef4444"
                    color="#ef4444"
                    className="drop-shadow-lg"
                  />
                )}
              </div>
            ))}

            {/* Player Basket */}
            <div
              className="absolute bottom-2 transition-all duration-100 ease-linear"
              style={{
                left: `${playerX}%`,
                transform: "translateX(-50%)",
              }}
            >
              <div className="w-16 h-12 bg-gradient-to-b from-amber-600 to-amber-800 rounded-t-lg border-4 border-amber-900 shadow-lg relative">
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-2 bg-amber-900" />
              </div>
            </div>

            {/* Background Stars */}
            <div className="absolute inset-0 opacity-30">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Game Over */}
      {gameState === "gameover" && (
        <div className="text-center space-y-6 max-w-md">
          <div className="text-6xl">🎮</div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)]">
            Game Over!
          </h2>
          <div className="space-y-3">
            <div className="bg-[var(--background-secondary)] rounded-oneui-lg p-6 shadow-oneui-md">
              <p className="text-[var(--foreground-secondary)] mb-2">Your Score</p>
              <p className="text-4xl font-bold text-[var(--primary)]">{score}</p>
            </div>
            {score === highScore && score > 0 && (
              <div className="flex items-center justify-center gap-2 text-yellow-500 animate-pulse">
                <Trophy size={24} />
                <span className="font-bold">New High Score!</span>
              </div>
            )}
            <div className="flex items-center justify-center gap-2 text-[var(--foreground-secondary)]">
              <Trophy size={20} className="text-yellow-500" />
              <span>High Score: {highScore}</span>
            </div>
          </div>
          <div className="flex gap-3 justify-center">
            <button
              onClick={startGame}
              className="oneui-btn-primary flex items-center gap-2"
            >
              <RotateCcw size={18} />
              Play Again
            </button>
            <button
              onClick={() => setGameState("menu")}
              className="oneui-btn-secondary"
            >
              Main Menu
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
