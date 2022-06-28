import React from "react";
import ProjectItem from "./ProjectItem";

//use projects props to render one project item with about, name, technology(array) and unique key for id
function ProjectList({ projects }) {
  const projectItems = projects.map((project) => {
    //const {name, about, technologies} = project
    return <ProjectItem
      key={project.id}
      projectObj={project}
      // name={name}
      // about={about}
      // technologies={technologies}
    />
})
  // //props object {
  //   name: value,
  //   about: value,
  //   technologies: value
  // } 
  // const {name, about, technologies} = props object
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectItems}</div>
    </div>
  );
}

export default ProjectList;
