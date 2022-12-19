import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSkype,
  faInstagram,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

export default function Block_Item(props) {
  console.log(props);
  return (
    <div className="block_item">
      <FontAwesomeIcon
        icon={props.icon}
        className="contact_item_icon"
      ></FontAwesomeIcon>
      {props.content}
    </div>
  );
}
