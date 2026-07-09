import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import Button from "../common/Button";
import Container from "../common/Container";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        transition-all
        duration-300
        ${
          scrolled
            ? "bg-slate-950/90 backdrop-blur-md border-b border-slate-800"
            : "bg-transparent"
        }
      `}
    >
      <Container
        className="
          flex
          items-center
          justify-between
          h-20
        "
      >

        <a
          href="#home"
          className="
            flex
            items-center
            whitespace-nowrap
            text-xl
            xl:text-2xl
            font-bold
            transition-all
            duration-300
            hover:scale-105
          "
        >
          <span className="text-blue-500">&lt;</span>

          <span className="mx-1">
            Srikesav M
          </span>

          <span className="text-blue-500">/&gt;</span>
        </a>

        {/* Desktop Navigation */}

        <nav className="hidden xl:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="
                text-slate-300
                transition-all
                duration-300
                hover:text-blue-400
                hover:-translate-y-0.5
              "
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Resume Button */}

        <div className="hidden xl:block">
          <Button href="/resume.pdf">
            Resume
          </Button>
        </div>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
          className="
            xl:hidden
            text-2xl
            text-white
            transition
            hover:text-blue-400
          "
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </Container>

      {/* Mobile Menu */}

      {menuOpen && (
        <div
          className="
            xl:hidden
            bg-slate-900
            border-t
            border-slate-800
            backdrop-blur-md
          "
        >
          <div className="flex flex-col py-4">

            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="
                  px-6
                  py-4
                  text-slate-300
                  transition
                  hover:bg-slate-800
                  hover:text-blue-400
                "
              >
                {item}
              </a>
            ))}

            <div className="px-6 pt-4">
              <Button href="/resume.pdf">
                Resume
              </Button>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}