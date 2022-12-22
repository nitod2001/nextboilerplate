import {
  faCss3,
  faHtml5,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import Block from "../components/sections/Block";
import Project from "../components/sections/Project";
import { Container } from "react-bootstrap";

export default function About() {
  const abouts = [
    { icon: faHtml5, content: "Html" },
    { icon: faCss3, content: "Css-scss" },
    { icon: faJs, content: "Javascript" },
    { icon: faReact, content: "ReactJS" },
  ];
  return (
    <Container>
      <Project></Project>
      <Block arr={abouts} title="About"></Block>
    </Container>
  );
}
