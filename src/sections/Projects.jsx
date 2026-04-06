// src/sections/Projects.jsx

import React from "react";
import ProjectCard from "../components/ProjectCard"; // card component
import { projects } from "../data/projects";         // project data


export default function Projects() {
  return (
    <section id="projects">
      <h3>Featured Projects</h3>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tech={project.tech}
            link={project.link}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
}
