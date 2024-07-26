/** @format */
"use client";
import HttpHandler from "@/api/httpHandler";
import React, { useEffect, useState } from "react";
import styles from "../page.module.css";
import MovieCard from "@/components/movie-card";
import Navbar from "@/components/navbar";
import SearchBar from "@/components/search-bar";
import MovieRow from "@/components/row";
import { GetProps, Input, Col, Row } from "antd";
import Link from "next/link";

type SearchProps = GetProps<typeof Input.Search>;
interface Movie {
  [x: string]: any;
  //   results(results: any): unknown;
  poster_path: string;
  backdrop_path: string;
  title: string;
  popularity: number;
  id: number;
}

function Search() {
  const [change, setChange] = useState("");
  const [movies, setMovies] = useState([] as any);

  const onSearch: SearchProps["onSearch"] = async (value: string, _e: any) => {
    console.log("this is value", value);
    const response = await HttpHandler.Search(value);

    const results = response.results as Movie;
    console.log("response---", results);

    setMovies(results);
    console.log(response);
    setChange(value);
  };

  const allMovies = movies.map(
    (movie: any, index: React.Key | null | undefined) => (
      <Col span={6} key={index}>
        <Link href={`/movies/${movie.id}`}>
          <MovieCard
            url={`https://image.tmdb.org/t/p/w500/${
              movie.poster_path ?? movie.backdrop_path
            }`}
            title={movie?.title}
            view={movie?.popularity}
          />
        </Link>
      </Col>
    )
  );

  return (
    <div className={styles.main}>
      <SearchBar onSearch={onSearch} />

      <Row
        wrap={true}
        gutter={[16, 16]}
        justify={"center"}
        className={styles.description}
        style={{ margin: "20px 0 30px 0" }}
        // style={{ overflowX: "auto", marginTop: 20 }}
      >
        {allMovies}
      </Row>
    </div>
  );
}

export default Search;
