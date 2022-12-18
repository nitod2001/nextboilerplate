import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSkype,
  faInstagram,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import Heading from "../components/Heading";
import Block_Item from "../components/Block_Item";

export default function Block(props) {
  return (
    <div className="block_section">
      <Heading title={props.title}></Heading>
      {props.arr.map((item, index) => {
        return (
          <Block_Item
            icon={item.icon}
            key={index}
            content={item.content}
          ></Block_Item>
        );
      })}
    </div>
  );
}
