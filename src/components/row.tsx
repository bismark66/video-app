/** @format */
"use client";
import React, { useEffect, useState } from "react";
import { Typography, Row, Col } from "antd";
import styles from "@/app/page.module.css";
import MovieCard from "./movie-card";
import Link from "next/link";

interface Movie {
  [x: string]: any;
  poster_path: string;
  title: string;
  popularity: number;
  id: number;
}
type AsyncFunctionProp = () => Promise<any>;
type RowHead = string;

function MovieRow({
  head,
  request,
}: {
  head: RowHead;
  request: AsyncFunctionProp;
}) {
  const [items, setItems] = useState([] as unknown as Movie);

  const fetchData = async () => {
    const response = await request();
    const results = response.results as Movie;
    // console.log("response---", results);
    setItems(results);
  };

  //   console.log("items", items);
  const allMovies = items.map(
    (item: Movie, index: React.Key | null | undefined) => (
      <Col
        span={24}
        xxl={6}
        xl={6}
        lg={6}
        md={8}
        sm={12}
        // xs={24}
        key={index}
      >
        <Link href={`/movies/${item.id}`}>
          <MovieCard
            url={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
            title={item.title}
            view={item.popularity}
          />
        </Link>
      </Col>
    )
  );

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Row
        justify={"start"}
        className={styles.description}
        style={{ margin: "0 0 30px 0" }}
      >
        <Col
          span={12}
          xs={16}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start",
            alignContent: "start",
          }}
        >
          <Typography.Title level={2}>{head}</Typography.Title>
        </Col>
        <Col span={2} xs={18}>
          &nbsp;
        </Col>

        <Row
          wrap={false}
          gutter={[16, 16]}
          className={styles.row}
          style={{ overflowX: "auto" }}
        >
          {allMovies}
        </Row>
      </Row>
    </>
  );
}

export default MovieRow;
