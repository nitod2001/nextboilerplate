import React from "react";
import { faWalkieTalkie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/Home.module.scss";

export default function Project_Item(props) {
  return (
    <div className={styles.project_item}>
      <FontAwesomeIcon
        className={styles.project_icon}
        icon={faWalkieTalkie}
      ></FontAwesomeIcon>
      <div className="project_item_content">
        <div className={styles.project_item_title}>{props.title}</div>
        <div className={styles.project_item_desc}>{props.content}</div>
      </div>
    </div>
  );
}
