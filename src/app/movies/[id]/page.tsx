/** @format */
"use client";
import HttpHandler from "@/api/httpHandler";
import MovieCard from "@/components/movie-card";
import { Row, Col } from "antd";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "@/app/page.module.css";
import RootLayout from "@/app/layout";
import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar";

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
  const pathname = usePathname();
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
    // <RootLayout>
    //   <Navbar search={pathname === "/"} />
    <
      // className={styles.main}
    >
      <Row
      // style={{ padding: "10px 0" }}
      >
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
            // title={movie.title}
            // view={movie.popularity}
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
    </>
    // </RootLayout>
  );
}
