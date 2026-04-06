import React from "react";
import "./index.css";
import "./components/TypingText.css";

import laptop from "./assets/laptop.png"; 
import profile from "./assets/bw.png";

import Projects from "./sections/Projects";
import TypingText from "./components/TypingText";
import SkillsSection from "./components/SkillsSection";

import { FaExternalLinkSquareAlt, FaReact, FaGithub, FaNpm, FaChrome, FaWordpress } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";



export default function App() {
  return (
    <div className="container">

      {/* ===== Hero ===== */}
      <header className="hero">
        <div className="hero-text">

          <TypingText 
          texts={[
            "Hi! I'm Porferio",
            "Senior Front-End Dev",
            "UI/UX Designer",
            "Digital/Web Manager"
          ]}
          speed={100} // typing speed in ms per character
        />

          <h2>Senior Front-End <em>Developer</em> • UI/UX Design • Digital/Web Manager</h2>
          <p>Coding my way to a better web, one line at a time.</p>
          <div className="hero-actions">
            <a href="#projects" className="btn primary">Featured Projects</a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn orange">Download Resume</a>
          </div>
        </div>

        <div className="hero-image">
          <img src={laptop} alt="Purple laptop" />
        </div>
      </header>

      {/* ===== Skills ===== */}
      <SkillsSection />

      {/* ===== Projects ===== */}
      
      <Projects />

      <section>
        <h3>What I do</h3>
        <ul>
          <li>Translate design into code, responsive, production-ready interfaces</li>
          <li>Build scalable, reusable React components and maintainable codebases</li>
          <li>Optimize performance, accessibility, and cross-browser compatibility</li>
          <li>Deploy, monitor, and continuously improve live websites</li>
          <li>Using AI to work smarter, not harder, and deliver high-quality results faster</li>
        </ul>
      </section>

      {/* ===== Tools & Workflow ===== */}
      <section>
        <h3>Tools & Workflow</h3>
        <div className="tools">
          <div className="tool"><SiVite className="tool-icon" /><span>Vite</span></div>
          <div className="tool"><FaReact className="tool-icon" /><span>React</span></div>
          <div className="tool"><FaGithub className="tool-icon" /><span>GitHub</span></div>
          <div className="tool"><FaNpm className="tool-icon" /><span>NPM</span></div>
          <div className="tool"><FaChrome className="tool-icon" /><span>DevTools</span></div>
          <div className="tool"><FaWordpress className="tool-icon" /><span>Wordpress</span></div>
          <div className="tool"><VscVscode className="tool-icon" /><span>VS Code</span></div>
        </div>
      </section>

      {/* ===== About ===== */}
    <section className="about">
      <div className="about-content">
        <img src={profile} alt="portrait" className="about-image" />
        <div>
          <h3>About Me</h3>
          With over a decade of experience in creative, web, and mobile development, I specialize in front-end technologies and modern web practices. I focus on building clean, scalable interfaces that balance performance, usability, and long-term maintainability.
          <br /><br />
          Outside of development, I fly drones for scenic landscapes shots, help maintain a local rice farm, and enjoy my hobby of fishkeeping and aquascaping.
        </div>
      </div>
    </section>


      {/* ===== Footer ===== */}
      <footer id="contact">
        <h3>Contact</h3>
        <p>“I’d love to hear from you — let’s connect!”</p>
        <ul>
          <li>Email: <a href="mailto:psibayjr@gmail.com">psibayjr@gmail.com</a></li>
          <li>LinkedIn: <a href="https://linkedin.com/in/psibay">linkedin.com/in/psibay</a></li>
        </ul>
      </footer>

    </div>
  );
}
