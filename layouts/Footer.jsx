import React from "react";
import styles from "../styles/Navbar&Footer.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div className={styles.footer_section}>
      <img src="/insta.png" alt="" />
      <img src="/Vector.png" alt="" />
      <img src="/gg.png" alt="" />
    </div>
  );
}
