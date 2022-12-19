import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import MainHome from "../containers/MainHome";
import Layout from "../layouts/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <MainHome></MainHome>
    </Layout>
  );
}
