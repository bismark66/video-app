/** @format */
"use client";
import HttpHandler from "@/api/httpHandler";
import React, { useEffect, useState } from "react";
import styles from "../page.module.css";
import MovieCard from "@/components/movie-card";
import SearchBar from "@/components/search-bar";
import { GetProps, Input, Col, Row } from "antd";
import Link from "next/link";
import Loading from "@/components/loading";

type SearchProps = GetProps<typeof Input.Search>;
interface Movie {
  [x: string]: any;
  poster_path: string;
  title: string;
  popularity: number;
  id: number;
}

function Search() {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([] as any);

  const onSearch: SearchProps["onSearch"] = async (value: string, _e: any) => {
    setIsLoading(true);
    const response = await HttpHandler.Search(value);
    const results = response.results as Movie;

    setMovies(results);
    setIsLoading(false);
  };

  // if (movies.length != 0) return;

  const allMovies = movies.map(
    (movie: any, index: React.Key | null | undefined) => (
      <Col span={6} xxl={6} xl={6} lg={8} md={8} sm={12} xs={24} key={index}>
        <Link href={`/movies/${movie.id}`}>
          <MovieCard
            url={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            title={movie.title}
            view={movie.popularity}
          />
        </Link>
      </Col>
    )
  );

  useEffect(() => {
    let movies = localStorage.getItem("search");
    localStorage.removeItem("search");
    console.log(movies);
    if (movies) {
      setMovies(JSON.parse(movies));
    }
  }, [localStorage.getItem("search")]);

  if (isLoading) return <Loading />;

  return (
    <div className={styles.main}>
      <Row justify={"center"}>
        <Col
          // span={24}
          xxl={24}
          xl={24}
          lg={{ span: 24 }}
          md={{ span: 24 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <SearchBar onSearch={onSearch} />
        </Col>
      </Row>

      <Row
        wrap={true}
        gutter={[16, 16]}
        justify={"center"}
        className={styles.description}
        style={{ margin: "20px 0 30px 0" }}
        // style={{ overflowX: "auto", marginTop: 20 }}
      >
        {allMovies.length !== 0 ? allMovies : <h1>No Movie FOund</h1>}
      </Row>
    </div>
  );
}

export default Search;
