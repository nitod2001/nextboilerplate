import React from "react";
import Heading from "../Heading";
import styles from "../../styles/Home.module.scss";
import Project_Item from "../Project_Item";

export default function Project() {
  return (
    <div className={styles.project_section}>
      <Heading title="Projects"></Heading>
      <div className={styles.project_block}>
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
