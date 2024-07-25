/** @format */
"use client";
import HttpHandler from "@/api/httpHandler";
import React, { useEffect, useState } from "react";
import styles from "../page.module.css";
import MovieCard from "@/components/movie-card";
import Navbar from "@/components/navbar";
import SearchBar from "@/components/search-bar";
import MovieRow from "@/components/row";

function Search() {
  const [movies, setMovies] = useState([]);

  const { TopRated, Popular } = HttpHandler;

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
    <div className={styles.main}>
      {/* <Navbar /> */}
      {/* <MovieCard
        url={"https://image.tmdb.org/t/p/w500/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg"}
        title="The Godfather"
        view={10000}
      /> */}
      {/* <SearchBar /> */}
      <MovieRow movies={[]} request={Popular} />
      {/* <MovieRow />
      <MovieRow /> */}
    </div>
  );
}

export default Search;
