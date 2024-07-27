/** @format */
"use client";
import React, { useState } from "react";
import { GetProps, Input } from "antd";
import HttpHandler from "@/api/httpHandler";

type SearchProps = GetProps<typeof Input.Search>;
interface Movie {
  [x: string]: any;
  //   results(results: any): unknown;
  poster_path: string;
  title: string;
  popularity: number;
  id: number;
}
const { Search } = Input;

function SearchBar(props: any) {
  const [change, setChange] = useState("");
  const [movies, setMovies] = useState([] as any);

  //   const onSearch: SearchProps["onSearch"] = async (value, _e, info) => {
  //     const response = await HttpHandler.Search(value);

  //     console.log(response);
  //     setChange(value);
  //   };

  const onSearch: SearchProps["onSearch"] = async (value: string, _e: any) => {
    console.log("this is value", value);
    const response = await HttpHandler.Search(value);

    const results = response.results as Movie;
    console.log("response---", results);

    setMovies(results);
    console.log(response);
    setChange(value);
  };

  console.log(change);

  return (
    <>
      <Search
        placeholder="search movie"
        allowClear
        size="middle"
        onChange={(e) => setChange(e.target.value)}
        onSearch={props.onSearch}
        style={{ width: 400 }}
      />
    </>
  );
}

export default SearchBar;
