import React from "react";
import "./index.css";

export default function App() {
  return (
    <div className="container">
      {/* Hero Section */}
      <header className="hero">
        <h1>John Doe</h1>
        <h2>Frontend Developer</h2>
        <p>
          I design and build fast, clean, user-focused web interfaces — from layout to deployment.
        </p>
      </header>

      {/* Skills Section */}
      <section>
        <h3>Skills</h3>
        <ul className="skills">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript (ES6+)</li>
          <li>React</li>
          <li>Responsive Design</li>
          <li>Git & GitHub</li>
          <li>REST APIs</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section>
        <h3>Projects</h3>
        <div className="project">
          <h4>HRSmart Website</h4>
          <p>
            Designed and developed the entire website end-to-end, handling layout, styling, and implementation.
            Contributed to the company’s growth and eventual acquisition by Deltek.
          </p>
          <span>HTML • CSS • JavaScript</span>
        </div>

        <div className="project">
          <h4>Automation & Tooling Projects</h4>
          <p>
            Built custom automation tools using image recognition and OCR to solve UI-driven workflows.
          </p>
          <span>Python • OCR • UI Automation</span>
        </div>
      </section>

      {/* About Section */}
      <section>
        <h3>About</h3>
        <p>
          Frontend developer with hands-on experience owning full website builds.
          Focused on clean structure, maintainable code, and intuitive interfaces.
        </p>
      </section>

      {/* Contact Section */}
      <footer>
        <h3>Contact</h3>
        <p>
          <a href="mailto:youremail@email.com">Email</a> •
          <a href="https://github.com/yourusername"> GitHub</a> •
          <a href="https://linkedin.com/in/yourprofile"> LinkedIn</a>
        </p>
      </footer>
    </div>
  );
}
