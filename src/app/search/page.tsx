/** @format */
"use client";
import HttpHandler from "@/api/httpHandler";
import React, { useEffect } from "react";

function Search() {
  const fetchTopRated = async () => {
    const response = await HttpHandler.TopRated();
    console.log("response---", response);
  };
  useEffect(() => {
    fetchTopRated();
  }, []);

  return <div>Search</div>;
}

export default Search;
