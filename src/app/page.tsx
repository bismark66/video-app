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

  // const fetchTopRated = async () => {
  //   // const response = await HttpHandler.GetById("tt0068646");
  //   // const response = await HttpHandler.ExternalId(1022789);
  //   const response = await HttpHandler.Popular();
  //   console.log("response---", response.results);

  //   setMovies(response.results);
  // };

  // useEffect(() => {
  //   fetchTopRated();
  // }, []);

  // console.log("movies", movies);

  return (
    <RootLayout>
      <Navbar search={pathname === "/"} />
      <div className={styles.main}>
        {/* <Navbar /> */}
        {/* <MovieCard
        url={"https://image.tmdb.org/t/p/w500/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg"}
        title="The Godfather"
        view={10000}
      /> */}
        {/* <SearchBar /> */}
        <MovieRow head={"Popular"} request={Popular} />
        <MovieRow head={"Top Rated"} request={TopRated} />
        <MovieRow head={"Up Coming"} request={Upcoming} />
        {/* <MovieRow />
      <MovieRow /> */}
      </div>
    </RootLayout>
  );
}
