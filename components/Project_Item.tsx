import React from "react";
import { faWalkieTalkie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Project_Item(props: any) {
  return (
    <div className="project_section_item">
      <FontAwesomeIcon
        className="project_section_item_icon"
        icon={faWalkieTalkie}
      ></FontAwesomeIcon>
      s
      <div className="project_item_content">
        <div className="project_section_item_title">{props.title}</div>
        <div className="project_section_item_desc">{props.content}</div>
      </div>
    </div>
  );
}
