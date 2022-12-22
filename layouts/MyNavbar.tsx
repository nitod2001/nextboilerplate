import Link from "next/link";
import React from "react";
import Navbar_Item from "../components/Navbar_Item";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function MyNavbar() {
  return (
    <Nav className="navbar_section">
      {/* <Link href="/" className={styles.navbar_logo}>
        Nitod
      </Link>
      <div className={styles.navbar_list}>
        <Navbar_Item href="/" title="Home"></Navbar_Item>
        <Navbar_Item href="/about" title="about"></Navbar_Item>
        <Navbar_Item href="/contact" title="contact"></Navbar_Item>
      </div> */}
      <Navbar variant="dark" className="navbar_section_flex">
        <Navbar.Brand className="navbar_section_logo" href="/">
          Nitod
        </Navbar.Brand>
        <Nav className="navbar_section_list">
          <Navbar_Item href="/" title="Home"></Navbar_Item>
          <Navbar_Item href="/about" title="about"></Navbar_Item>
          <Navbar_Item href="/contact" title="contact"></Navbar_Item>
        </Nav>
      </Navbar>
    </Nav>
  );
}
