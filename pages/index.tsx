import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import MainHome from "../app/containers/MainHome";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <MainHome></MainHome>;
}
