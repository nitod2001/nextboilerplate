import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Heading from "../components/Heading";

export default function NotFound() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div className="notfound_section">
      <Heading title="404"></Heading>
      <div className="notfound_desc">
        Going to back the <Link href="/">Homepage</Link> in 3 seconds ...
      </div>
    </div>
  );
}
