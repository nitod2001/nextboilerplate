import React from "react";
import Me from "../sections/Me";
import Block from "../sections/Block";

export default function Contact() {
  const contacts = [
    { icon: "faSkype", content: "skype.com" },
    { icon: "faInstagram", content: "instagram.com" },
    { icon: "faGoogle", content: "gmail.com" },
  ];
  return (
    <div className="contact">
      <Me content="Hopely, after my training course i can improve my logic about code and have a chance stay at company."></Me>
      <Block arr={contacts} title="Contact me"></Block>
      <style jsx>
        {`
          .contact {
            min-height: 100vh;
          }
        `}
      </style>
    </div>
  );
}
