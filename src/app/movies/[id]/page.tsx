/** @format */
"use client";
import HttpHandler from "@/api/httpHandler";
import MovieCard from "@/components/movie-card";
import { Row, Col } from "antd";
import React, { useEffect, useState } from "react";
import styles from "../../page.module.css";
import Loading from "@/components/loading";

interface Movie {
  poster_path: string;
  title: string;
  popularity: number;
  id: number;
  overview: string;
  release_date: string;
}

export default function Page({
  params,
}: {
  params: {
    id: number;
    slug: string;
  };
}) {
  const [movie, setMovie] = useState({} as unknown as Movie);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchMovie(id: number) {
    setIsLoading(true);
    const externalId = await HttpHandler.ExternalId(id);
    let movieId = externalId.imdb_id;
    const response = await HttpHandler.GetById(movieId);
    const results = response.movie_results[0] as Movie;

    setMovie(results);
    setIsLoading(false);
  }

  console.log(params.id);

  useEffect(() => {
    fetchMovie(params.id);
  }, []);
  console.log(movie, movie.overview);

  if (isLoading) return <Loading />;

  return (
    <div className={styles.main}>
      <Row>
        <Col
          // span={4}
          // offset={5}
          xl={{ span: 4, offset: 5 }}
          lg={{ span: 4, offset: 4 }}
          md={{ span: 5, offset: 2 }}
          // sm={{ span: 10, offset: 2 }}
        >
          <MovieCard
            url={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          />
        </Col>
        <Col
          // span={8}
          xl={{ span: 8, offset: 0 }}
          lg={{ span: 8, offset: 2 }}
          md={{ span: 10, offset: 4 }}
          // sm={10}
          style={{
            display: "flex",
            justifyContent: "start",
            flexDirection: "column",
          }}
        >
          <h1>{movie.title}</h1>
          <p style={{ padding: "10px 0" }}>{movie.overview}</p>
          <p style={{ padding: "10px 0" }}>
            Release Date : {movie.release_date} Views : {movie.popularity}
          </p>
          <p>id: {movie.id}</p>
        </Col>
      </Row>
    </div>
  );
}
