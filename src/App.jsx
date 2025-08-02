import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ButtonLanguageSwitch from "./components/buttonLanguageSwitch.jsx";
import Hero from "./components/hero.jsx";
import Navbar from "./components/navbar.jsx";
import Education from "./components/education.jsx";
import Skills from "./components/skills.jsx";
import Projects from "./components/projects.jsx";
import About from "./components/about.jsx";
import Contact from "./components/contact.jsx";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <ButtonLanguageSwitch />
      <Hero />
      <Education />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </>
  );
}

export default App;
