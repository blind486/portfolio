import React from "react";

export default function ProjectCard({ title, description, tech, link, image }) {
  return (
<div className="card">

  {/* Image first */}
  {image && (
    link ? (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={title + " Screenshot"} />
      </a>
    ) : (
      <img src={image} alt={title + " Screenshot"} />
    )
  )}

  {/* Title clickable if link exists */}
  {link ? (
    <h4>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {title}
      </a>
    </h4>
  ) : (
    <h4>{title}</h4>
  )}

  <p>{description}</p>
  <span>{tech}</span>
  
</div>


  );
}
