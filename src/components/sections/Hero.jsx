import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-slate-950 pt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-400 text-lg mb-2">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Srikesav M
          </h1>

          <h2 className="text-2xl md:text-3xl text-slate-300 mt-4">
            Full Stack Developer
          </h2>

          <p className="text-slate-400 mt-6 leading-8 max-w-xl">
            Passionate about building scalable web applications,
            solving real-world problems, and exploring cloud
            technologies with AWS. Currently pursuing B.Tech in
            Information Technology at PSG College of Technology.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg font-medium transition">
              View Projects
            </button>

            <button className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-lg transition">
              Contact Me
            </button>
          </div>

          <div className="flex gap-6 mt-10 text-2xl">
            <a href="#">
              <FaGithub className="hover:text-blue-400 transition" />
            </a>

            <a href="#">
              <FaLinkedin className="hover:text-blue-400 transition" />
            </a>

            <a href="#">
              <FaEnvelope className="hover:text-blue-400 transition" />
            </a>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-blue-600 blur-3xl opacity-30 animate-pulse"></div>

            <img
              src="/images/profile.png"
              alt="Profile"
              className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-blue-500 shadow-2xl"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}