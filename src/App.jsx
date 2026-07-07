import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
import Stats from "./components/stats/Stats";
import Journey from "./components/journey/Journey";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/projects";
import Profile from "./components/profile/Profile";
import Certifications from "./components/certifications/Certifications";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Journey />
      <Skills />
      <Projects />
      <Profile />
      <Certifications />
      <Contact />
    </>
  );
}

export default App;