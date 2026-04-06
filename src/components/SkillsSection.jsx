import React from "react";

// App.jsx or SkillsSection.jsx
export default function SkillsSection() {
  // ✅ Define the skills array here
  const skills = [
    "HTML & CSS",
    "JavaScript (ES6+)",
    "React",
    "Responsive Design",
    "Git & GitHub",
    "Wordpress",
    "Elementor",
    "Bootstrap",
    "Sitecore",
    "Drupal",
    "Eloqua",
    "Adobe Creative Suite"
  ];

  return (
    <section>
      <h3>Skills</h3>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="card">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
