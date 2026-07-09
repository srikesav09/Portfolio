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
import { useEffect, useState } from "react";
import Loader from "./components/common/Loader";

function App() {

  const { scrollYProgress } = useScroll();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

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
    </>
  );
}

export default App;