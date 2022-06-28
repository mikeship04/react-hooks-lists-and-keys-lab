import React from "react";

function ProjectItem({projectObj}) {
  const {name, about, technologies} = projectObj
  const technologyList = technologies.map((techItem) => (
    <span key={techItem}>{techItem}</span>
  ))
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">{technologyList}</div>
    </div>
  );
}

export default ProjectItem;
