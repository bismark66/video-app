/** @format */
"use client";
import Image from "next/image";
import styles from "./page.module.css";
import HttpHandler from "@/api/httpHandler";
import MovieRow from "@/components/row";
import { useState } from "react";
import Navbar from "@/components/navbar";
import RootLayout from "./layout";
import { usePathname } from "next/navigation";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const pathname = usePathname();

  const { TopRated, Popular, Upcoming } = HttpHandler;

  return (
    <div className={styles.main}>
      <MovieRow head={"Popular"} request={Popular} />
      <MovieRow head={"Top Rated"} request={TopRated} />
      <MovieRow head={"Up Coming"} request={Upcoming} />
    </div>
  );
}
