import React from "react";
import { Container } from "react-bootstrap";
import Me from "../components/sections/Me";
import Project from "../components/sections/Project";
export default function MainHome() {
  return (
    <Container fluid>
      <Me
        content=" A Web Developer is a professional who is responsible for the design and
        construction of websites. They ensure that sites meet user expectations
        by ensuring they look good, run smoothly and offer easy access points
        with no loading issues between pages or error messages."
      ></Me>
      <Project></Project>
    </Container>
  );
}
