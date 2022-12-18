import Link from "next/link";
import React from "react";
import styles from "../styles/Navbar&Footer.module.css";
import Navbar_Item from "../components/Navbar_Item";

export default function Navbar() {
  return (
    <div className={styles.navbar_section}>
      <Link href="/" className={styles.navbar_logo}>
        Nitod
      </Link>
      <div className={styles.navbar_list}>
        <Navbar_Item href="/" title="Home"></Navbar_Item>
        <Navbar_Item href="/about" title="about"></Navbar_Item>
        <Navbar_Item href="/contact" title="contact"></Navbar_Item>
      </div>
    </div>
  );
}
