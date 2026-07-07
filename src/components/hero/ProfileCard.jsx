import { motion } from "framer-motion";

export default function ProfileCard() {
  return (
    <div className="relative flex items-center justify-center">

      <div className="absolute h-80 w-80 rounded-full bg-blue-500/20 blur-3xl animate-pulse"></div>

      <div className="rounded-full bg-linear-to-r from-blue-500 to-cyan-400 p-1 shadow-2xl">
        <motion.img
          animate={{
              y: [0, -2, 0]
          }}
          transition={{
              duration: 4,
              repeat: Infinity
          }}
          src="/images/profile.jpg"
          className="
            w-72
            h-72
            md:w-96
            md:h-96
            rounded-full
            object-cover
            object-top
            bg-slate-900"
        />
      </div>
    </div>
  );
}