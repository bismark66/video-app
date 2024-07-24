/** @format */
"use client";
import HttpHandler from "@/api/httpHandler";
import React, { useEffect } from "react";

function Search({ movies }: any) {
  const fetchTopRated = async () => {
    const response = await HttpHandler.GetById("tt0068646");
    // const response = await HttpHandler.ExternalId(1022789);
    // const response = await HttpHandler.Popular();
    console.log("response---", response);
  };
  useEffect(() => {
    fetchTopRated();
  }, []);

  console.log("movies", movies);

  return <div>Search</div>;
}

export default Search;
