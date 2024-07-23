/** @format */
"use client";
import HttpHandler from "@/api/httpHandler";
import React, { useEffect } from "react";

function Search() {
  const fetchTopRated = async () => {
    const response = await HttpHandler.Search("avatar");
    console.log("response---", response);
  };
  useEffect(() => {
    fetchTopRated();
  }, []);

  return <div>Search</div>;
}

export default Search;
