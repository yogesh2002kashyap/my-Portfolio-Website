import { NavLink } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition ${
      isActive
        ? "text-indigo-600"
        : "text-slate-600 hover:text-indigo-600"
    }`;

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <NavLink to="/" className="font-semibold text-slate-900">
          <h2 className="text-1xl sm:text-5xl lg:text-3xl font-extrabold text-indigo-600 mt-1">
  Yogesh Kashyap
</h2>

        </NavLink>

        <div className="flex gap-8 text-sm font-medium">
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/projects" className={linkClass}>
            Projects
          </NavLink>
          
          <NavLink to="/skills" className={linkClass}>
  Skills
</NavLink>

          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>

          <div className="flex gap-3 text-slate-600">
            <a href="https://github.com/yogesh2002kashyap" target="_blank">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/yogesh-kashyap-dev" target="_blank">
              <Linkedin size={18} />
            </a>
            <a href="mailto:yogesh2003kashyap@gmail.com">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
