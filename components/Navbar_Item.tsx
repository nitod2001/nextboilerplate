import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Navbar_Item(props: any) {
  const route = useRouter();
  return (
    <Link
      href={props.href}
      className={
        route.asPath !== props.href
          ? "navbar_section_item"
          : "navbar_section_item_active"
      }
    >
      {props.title}
    </Link>
  );
}
