import React from "react";
import Heading from "../Heading";
import Project_Item from "../Project_Item";

export default function Project() {
  return (
    <div className="project_section">
      <Heading title="Projects"></Heading>
      <div className="project_section_block">
        <Project_Item
          title=" Grocery Store Website Design"
          content=" Front-End designing of a 'Grocery Website' using HTML, CSS and
          JavaScript."
        ></Project_Item>
        <Project_Item
          title=" Grocery Store Website Design"
          content=" Front-End designing of a 'Grocery Website' using HTML, CSS and
          JavaScript."
        ></Project_Item>
        <Project_Item
          title=" Grocery Store Website Design"
          content=" Front-End designing of a 'Grocery Website' using HTML, CSS and
          JavaScript."
        ></Project_Item>
        <Project_Item
          title=" Grocery Store Website Design"
          content=" Front-End designing of a 'Grocery Website' using HTML, CSS and
          JavaScript."
        ></Project_Item>
      </div>
    </div>
  );
}
