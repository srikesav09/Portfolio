import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
import Stats from "./components/stats/Stats";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Profile from "./components/profile/Profile";
import Certifications from "./components/certifications/Certifications";
import Contact from "./components/contact/Contact";
import Footer from "./components/layout/Footer";
import { motion, useScroll } from "framer-motion";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  const { scrollYProgress } = useScroll();
  return (
    <>
    <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-100"
        style={{
          scaleX: scrollYProgress,
        }}
      />
      <Navbar />
      <Hero />
      <Stats />
      <Projects />
      <Skills />
      <Profile />
      <Certifications />
      <Contact />
      <Footer />
      <SpeedInsights />
    </>
  );
}

export default App;