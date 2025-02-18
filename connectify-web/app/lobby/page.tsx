"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { setupUser } from "../../lib/userSetup";
import { CopyToClipboard } from "react-copy-to-clipboard";
import * as motion from "motion/react-client";

const games = [
  { id: "tictactoe", name: "Tic Tac Toe", icon: "/icons/tictactoe.svg" },
  { id: "rockpaperscissors", name: "Rock Paper Scissors", icon: "/icons/rockpaperscissors.svg" },
  { id: "ludo", name: "Ludo", icon: "/icons/ludo.svg" },
  { id: "snakegame", name: "Snake Game", icon: "/icons/snakegame.svg" },
  { id: "garticphone", name: "Gartic Phone", icon: "/icons/garticphone.svg" },
];

const generateRandomName = () => {
  const adjectives = ["Quick", "Sneaky", "Bold", "Happy", "Fierce", "Mighty"];
  const nouns = ["Tiger", "Eagle", "Dragon", "Wolf", "Hawk", "Fox"];
  const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  return `${randomAdjective} ${randomNoun}`;
};

export default function Lobby() {
  const [step, setStep] = useState<"profile" | "room">("profile");
  const [roomCode, setRoomCode] = useState("");
  const [createdRoomCode, setCreatedRoomCode] = useState("");
  const [copied, setCopied] = useState(false);
  const [username, setUsername] = useState("");
  const [user, setUser] = useState<{ userId: string; userName: string; userAvatar: string } | null>(null);

  useEffect(() => {
    const userData = setupUser();
    setUser({ ...userData, userName: generateRandomName() });
  }, []);

  const createRoom = () => {
    const newRoomCode = Math.random().toString(36).substring(7).toUpperCase();
    setCreatedRoomCode(newRoomCode);
    setCopied(false);
    setStep("room");
  };

  const refreshProfile = () => {
    sessionStorage.removeItem("user");
    const userData = setupUser();
    setUser(userData);
  };

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen p-8 text-white"
    >
        <div className="relative">
        <div className="relative z-10 p-4">
      {/* Profile Customization */}
      {step === "profile" && (
        <div className="flex flex-col items-center">
          <div dangerouslySetInnerHTML={{ __html: user.userAvatar }} className="w-200 h-200 rounded-full shadow-lg m-5" />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your name"
            className="mt-4 p-2 bg-transparent border-b border-white text-center text-lg outline-none focus:ring-0 flex"
          />
          <button
            onClick={() => setStep("room")}
            className="mt-6 px-6 py-3 bg-green-500 hover:bg-green-700 rounded shadow transform transition hover:scale-105"
          >
            Save & Continue
          </button>
          <button
            onClick={refreshProfile}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded shadow"
          >
            Refresh Profile
          </button>
        </div>
      )}

      {/* Room Section */}
      {step === "room" && (
        <div>
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Game Lobby</h1>
            {createdRoomCode && (
              <div className="bg-black text-green-400 px-4 py-2 rounded">
                Room Code: <span className="font-bold">{createdRoomCode}</span>
              </div>
            )}
          </div>

          <div className="mb-8 flex space-x-4">
            <input
              type="text"
              placeholder="Enter room code"
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value)}
              className="flex-1 p-2 rounded shadow border border-gray-300 text-gray-800"
            />
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold px-4 py-2 rounded shadow">
              Join Room
            </button>
            <button
              onClick={createRoom}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded shadow"
            >
              Create Room
            </button>
          </div>

          {/* Game Selection */}
          <h2 className="text-xl font-bold mb-4">Choose a Game</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {games.map((game, index) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-4 bg-gray-900 rounded-lg shadow transform hover:scale-105 transition"
              >
                <Link href={`/game/${game.id}`} className="flex flex-col items-center">
                  <img src={game.icon} alt={game.name} className="w-12 h-12 mb-2" />
                  <h3 className="text-lg font-bold">{game.name}</h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
    </div>
    </motion.div>
  );
}
