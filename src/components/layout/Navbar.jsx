import { useState } from "react";
import { Menu, X } from "react-icons/fa6";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <h1 className="text-2xl font-bold tracking-wide">
          <span className="text-blue-500">&lt;</span>
          Srikesav M
          <span className="text-blue-500">/&gt;</span>
        </h1>

        <ul className="hidden md:flex gap-8">
          {navLinks.map((item) => (
            <li
              key={item}
              className="cursor-pointer text-slate-300 hover:text-blue-400 transition"
            >
              {item}
            </li>
          ))}
        </ul>

        <button className="hidden md:block px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition">
          Resume
        </button>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          {navLinks.map((item) => (
            <div
              key={item}
              className="px-6 py-4 border-b border-slate-800 hover:bg-slate-800 cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}