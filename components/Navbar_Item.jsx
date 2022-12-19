import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "../styles/Navbar&Footer.module.css";

export default function Navbar_Item(props) {
  const route = useRouter();
  return (
    <Link
      href={props.href}
      className={
        route.asPath !== props.href
          ? styles.navbar_item
          : styles.navbar_item_active
      }
    >
      {props.title}
    </Link>
  );
}
