import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ResumeButton from "./components/ResumeButton";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <Navbar />

      {/* 🔥 NAVBAR SPACER — THIS IS THE FIX */}
      <div className="h-16" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <ResumeButton />
    </>
  );
}
