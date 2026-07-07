import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Stats from "./components/sections/Stats";
import Journey from "./components/sections/Journey";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Dashboard from "./components/sections/Dashboard";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Journey />
      <Skills />
      <Projects />
      <Dashboard />
    </>
  );
}

export default App;