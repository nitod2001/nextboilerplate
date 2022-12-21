import React, { ReactNode } from "react";
import MyNavbar from "./MyNavbar";
import Footer from "./Footer";

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

export default function Layout({ children }: Props) {
  return (
    <>
      <MyNavbar></MyNavbar>
      {children}
      <Footer></Footer>
    </>
  );
}
