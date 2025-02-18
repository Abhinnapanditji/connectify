import * as motion from "motion/react-client"

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto"
    >
      <h1 className="text-3xl font-bold mb-4">About Connectify</h1>
      <p className="mb-4">
        Connectify is a platform designed to bring friends together through fun,
        interactive games. Our mission is to create a space where people can
        connect, chat, and play anytime, anywhere.
      </p>
      <p className="mb-4">
        With Connectify, you can enjoy a variety of games with your friends,
        from classic favorites to new and exciting challenges. Our platform is
        designed to be accessible across all devices, ensuring that you can play
        whether you're on your computer, tablet, or smartphone.
      </p>
      <p>
        We believe in the power of play to strengthen friendships and create
        lasting memories. Join us on Connectify and start your gaming adventure
        today!
      </p>
    </motion.div>
  );
}
