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

  useEffect(() => {
    fetchMovie(params.id);
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className={styles.main}>
      <Row justify={"center"} gutter={[16, 16]}>
        <Col
          // span={4}
          // offset={5}
          span={6}
          xxl={4}
          xl={6}
          lg={8}
          md={8}
          sm={12}
          xs={20}
        >
          <MovieCard
            url={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          />
        </Col>
        <Col
          xl={8}
          lg={8}
          md={10}
          style={{
            display: "flex",
            justifyContent: "start",
            flexDirection: "column",
            paddingLeft: 15,
          }}
        >
          <h1>{movie.title}</h1>
          <p style={{ padding: "10px 0" }}>{movie.overview}</p>
          <p style={{ padding: "10px 0" }}>
            <span>
              <strong>Release Date : </strong>
              {movie.release_date}{" "}
            </span>{" "}
            <span style={{ paddingLeft: 20 }}>
              <strong> Views : {movie.popularity}</strong>
            </span>
          </p>
          <p>
            {" "}
            <span>
              <strong>ID : </strong>
            </span>{" "}
            {movie.id}
          </p>
        </Col>
      </Row>
    </div>
  );
}
