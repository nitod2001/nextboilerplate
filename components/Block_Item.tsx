import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Block_Item(props: any) {
  return (
    <div className="block_section_item">
      <FontAwesomeIcon
        icon={props.icon}
        className="contact_item_icon"
      ></FontAwesomeIcon>
      {props.content}
    </div>
  );
}
