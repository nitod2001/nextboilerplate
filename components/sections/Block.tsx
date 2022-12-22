import React from "react";
import Heading from "../Heading";
import Block_Item from "../Block_Item";

export default function Block(props: any) {
  return (
    <div className="block_section">
      <Heading title={props.title}></Heading>
      {props.arr.map((item: any, index: number) => {
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
