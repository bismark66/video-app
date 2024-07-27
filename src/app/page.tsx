/** @format */
"use client";

import styles from "./page.module.css";
import HttpHandler from "@/api/httpHandler";
import MovieRow from "@/components/row";

export default function Home() {
  const { TopRated, Popular, Upcoming } = HttpHandler;

  return (
    <div className={styles.main}>
      <MovieRow head={"Popular"} request={Popular} />
      <MovieRow head={"Top Rated"} request={TopRated} />
      <MovieRow head={"Up Coming"} request={Upcoming} />
    </div>
  );
}
