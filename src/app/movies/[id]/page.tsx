/** @format */
"use client";
import HttpHandler from "@/api/httpHandler";
import MovieCard from "@/components/movie-card";
import { Row, Col } from "antd";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "@/app/page.module.css";

// function Dynamic() {
//   return <div>Dynamic</div>;
// }

// export default Dynamic;
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
  // const router = useRouter();
  // const { slug } = router.query;
  // const [post, setPost] = useState(null);

  async function fetchMovie(id: number) {
    const externalId = await HttpHandler.ExternalId(id);
    let movieId = externalId.imdb_id;
    const response = await HttpHandler.GetById(movieId);
    const results = response.movie_results[0] as Movie;
    console.log("--", results);
    setMovie(results);
  }

  console.log(params.id);

  useEffect(() => {
    fetchMovie(params.id);
  }, []);
  console.log(movie, movie.overview);

  return (
    <div
    // className={styles.main}
    >
      <Row style={{ padding: "10px 0" }}>
        <Col span={4}>
          <MovieCard
            url={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            title={movie.title}
            view={movie.popularity}
          />
        </Col>
        <Col span={5}>
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

// function fetchData(id: number) {
//   throw new Error("Function not implemented.");
// }
// // export async function generateStaticParams() {
//   const posts = await fetch("https://.../posts").then((res) => res.json());

//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// }
