import React from "react";
import Me from "../components/sections/Me";
import Block from "../components/sections/Block";
import {
  faSkype,
  faInstagram,
  faGoogle,
  faFacebook,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Container } from "react-bootstrap";

export default function Contact() {
  const contacts = [
    { icon: faSkype, content: "Skype" },
    { icon: faInstagram, content: "Instagram" },
    { icon: faGoogle, content: "Gmail" },
    { icon: faFacebook, content: "Facebook" },
    { icon: faGithub, content: "Github" },
    { icon: faTwitter, content: "Twitter" },
  ];
  return (
    <Container>
      <Me content="Hopely, after my training course i can improve my logic about code and have a chance stay at company."></Me>
      <Block arr={contacts} title="Contact me"></Block>
    </Container>
  );
}
