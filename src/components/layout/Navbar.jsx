import {useState, useEffect} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import Button from "../common/Button";
import Container from "../common/Container";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(()=>{
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return ()=> window.removeEventListener("scroll",handleScroll);
  },[]);

  const navItems = [
    "Home",
    "Projects",
    "Skills",
    "Profile",
    "Certifications",
    "Contact",
  ];

  return (
    <header
      className={
        `
          fixed
          top-0
          w-full
          z-50
          transition-all
          duration-300
          ${
            scrolled
            ? "bg-slate-950/90 backdrop-blur-md border-b border-slate-800"
            :"bg-transparent"
          }
        `}
    >
      <Container
        className={
          `
            flex
            items-center
            justify-between
            h-20
          `
        }
      >
        <a
          href="#home"
          className="text-2xl font-bold hover:text-blue-400 transition-transform hover:scale-105"
        >
          <span className="text-blue-500">&lt;</span>
          Srikesav M
          <span className="text-blue-500">/&gt;</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((items)=>{
            return (
              <a
                key={items}
                href={`#${items.toLowerCase()}`}
                className="text-slate-300 hover:text-blue-400 hover:scale-105 transition-colors"
              >
                {items}
              </a>
          );})}
        </nav>

        <div className="hidden md:block">
          <Button href="./resume.pdf">
            Resume
          </Button>
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={()=> setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </Container>

      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          {navItems.map((items)=>{
            return (
              <a
                key={items}
                href={`#${items.toLowerCase()}`}
                className="block px-6 py-4 hover:bg-slate-800 transition"
                onClick={() => setMenuOpen(false)}
              >
                {items}
              </a>
          );})}
          <div className="p-6">
            <Button href="/public/_RESUME_SRIKESAV.pdf">Resume</Button>
          </div>
        </div>
      )
      }
    </header>
  )
}
