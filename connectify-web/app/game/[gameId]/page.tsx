"use client";

import { useState } from "react";
import Chat from "../../components/Chat";
import { motion } from "framer-motion";

export default function Game({ params }: { params: { gameId: string } }) {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i: number) => {
    if (calculateWinner(board) || board[i]) return;

    const newBoard = board.slice();
    newBoard[i] = xIsNext ? "X" : "O";
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const winner = calculateWinner(board);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? "X" : "O"}`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row md:space-x-8"
    >
      <div className="mb-8 md:mb-0">
        <h1 className="text-3xl font-bold mb-4">Tic Tac Toe</h1>
        <div className="mb-4">{status}</div>
        <div className="grid grid-cols-3 gap-2 w-64 mx-auto md:mx-0">
          {board.map((square, i) => (
            <motion.button
              key={i}
              className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-2xl font-bold py-4 px-6 rounded"
              onClick={() => handleClick(i)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {square}
            </motion.button>
          ))}
        </div>
      </div>
      <div className="w-full md:w-64">
        <h2 className="text-xl font-bold mb-2">Chat</h2>
        <Chat />
      </div>
    </motion.div>
  );
}

function calculateWinner(squares: (string | null)[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
