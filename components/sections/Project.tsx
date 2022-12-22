import React from "react";
import Heading from "../Heading";
import Project_Item from "../Project_Item";

export default function Project() {
  const projects = [
    {
      title: "Grocery Store Website Design",
      content:
        "Front-End designing of a 'Grocery Website' using HTML, CSS and JavaScript.",
    },
    {
      title: "Grocery Store Website Design",
      content:
        "Front-End designing of a 'Grocery Website' using HTML, CSS and JavaScript.",
    },
    {
      title: "Grocery Store Website Design",
      content:
        "Front-End designing of a 'Grocery Website' using HTML, CSS and JavaScript.",
    },
    {
      title: "Grocery Store Website Design",
      content:
        "Front-End designing of a 'Grocery Website' using HTML, CSS and JavaScript.",
    },
  ];
  return (
    <div className="project_section">
      <Heading title="Projects"></Heading>
      <div className="project_section_block">
        {projects.map((project) => {
          return (
            <Project_Item
              title={project.title}
              content={project.content}
            ></Project_Item>
          );
        })}
      </div>
    </div>
  );
}
