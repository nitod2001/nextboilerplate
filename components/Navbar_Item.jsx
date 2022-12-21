import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "../scss/Navbar.module.scss";

export default function Navbar_Item(props) {
  const route = useRouter();
  return (
    <Link
      href={props.href}
      className={
        route.asPath !== props.href
          ? styles.navbar_section_item
          : styles.navbar_section_item_active
      }
    >
      {props.title}
    </Link>
  );
}
