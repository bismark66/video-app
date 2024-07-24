/** @format */
"use client";
import HttpHandler from "@/api/httpHandler";
import React, { useEffect } from "react";
import MovieCard from "@/components/movie-card";
import Navbar from "@/components/navbar";

function Search() {
  const fetchTopRated = async () => {
    const response = await HttpHandler.GetById("tt0068646");
    // const response = await HttpHandler.ExternalId(1022789);
    // const response = await HttpHandler.Popular();
    console.log("response---", response);
  };
  useEffect(() => {
    fetchTopRated();
  }, []);

  //   console.log("movies", movies);

  return (
    <div>
      {/* <Navbar /> */}
      {/* <MovieCard
        url={"https://image.tmdb.org/t/p/w500/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg"}
        title="The Godfather"
        view={10000}
      /> */}
    </div>
  );
}

export default Search;
