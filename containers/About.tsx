import {
  faCss3,
  faHtml5,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import Block from "../components/sections/Block";
import Project from "../components/sections/Project";

export default function About() {
  const abouts = [
    { icon: faHtml5, content: "Html" },
    { icon: faCss3, content: "Css-scss" },
    { icon: faJs, content: "Javascript" },
    { icon: faReact, content: "ReactJS" },
  ];
  return (
    <div className="about">
      <Project></Project>
      <Block arr={abouts} title="About"></Block>
      <style jsx>
        {`
          .about {
            min-height: 100vh;
          }
        `}
      </style>
    </div>
  );
}
