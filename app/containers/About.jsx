import React from "react";
import Block from "../sections/Block";
import Project from "../sections/Project";

export default function About() {
  const abouts = [
    { icon: "faSkype", content: "Html" },
    { icon: "faSkype", content: "Css-scss" },
    { icon: "faSkype", content: "Javascript" },
    { icon: "faSkype", content: "ReactJS" },
  ];
  return (
    <>
      <Project></Project>
      <Block arr={abouts} title="About"></Block>
    </>
  );
}
