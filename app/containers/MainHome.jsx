import React from "react";
import Me from "../sections/Me";
import Project from "../sections/Project";
export default function MainHome() {
  return (
    <>
      <Me
        content=" A Web Developer is a professional who is responsible for the design and
        construction of websites. They ensure that sites meet user expectations
        by ensuring they look good, run smoothly and offer easy access points
        with no loading issues between pages or error messages."
      ></Me>
      <Project></Project>
    </>
  );
}
