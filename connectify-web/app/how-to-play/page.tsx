import * as motion from "motion/react-client"

export default function HowToPlay() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto"
    >
      <h1 className="text-3xl font-bold mb-4">How to Play on Connectify</h1>
      <ol className="list-decimal list-inside space-y-4">
        <li>
          <strong>Create or Join a Room:</strong> From the lobby, you can either
          create a new room or join an existing one using a room code.
        </li>
        <li>
          <strong>Choose a Game:</strong> Once in a room, select the game you
          want to play from the available options.
        </li>
        <li>
          <strong>Invite Friends:</strong> Share your room code with friends so
          they can join your game.
        </li>
        <li>
          <strong>Play the Game:</strong> Follow the rules and instructions for
          the specific game you've chosen.
        </li>
        <li>
          <strong>Chat and Have Fun:</strong> Use the in-game chat to
          communicate with your friends while playing.
        </li>
      </ol>
      <p className="mt-4">
        Remember, no login is required to play games on Connectify. Just create
        or join a room, and start playing!
      </p>
    </motion.div>
  );
}
