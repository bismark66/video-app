/** @format */
"use client";
import React, { useEffect, useState } from "react";
import { Typography, Flex, Button, Row, Col } from "antd";
import styles from "@/app/page.module.css";
import MovieCard from "./movie-card";

const boxStyle: React.CSSProperties = {
  width: "100%",
  //   height: 120,
  borderRadius: 6,
  //   border: "1px solid #40a9ff",
};

interface Movie {
  [x: string]: any;
  //   results(results: any): unknown;
  poster_path: string;
  title: string;
  popularity: number;
  id: number;
}
type AsyncFunctionProp = () => Promise<any>;

function MovieRow({
  movies,
  request,
}: {
  movies: Movie[];
  request: AsyncFunctionProp;
}) {
  const [items, setItems] = useState([] as unknown as Movie);

  console.log("this is request", request);

  const fetchData = async () => {
    // const response = await HttpHandler.GetById("tt0068646");
    // const response = await HttpHandler.ExternalId(1022789);
    const response = await request();

    const results = response.results as Movie;
    console.log("response---", results);

    setItems(results);
  };

  console.log("items", items);
  const allMovies = items.map(
    (item: Movie, index: React.Key | null | undefined) => (
      <Col span={6} key={index} onClick={() => alert(item.id)}>
        <MovieCard
          url={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
          title={item.title}
          view={item.popularity}
        />
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
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start",
            alignContent: "start",
          }}
        >
          <Typography.Title level={2}>Most Popular</Typography.Title>
        </Col>
        <Col offset={10} span={2}>
          {/* hello */}
          &nbsp;
        </Col>

        <Row wrap={false} className={styles.row} style={{ overflowX: "auto" }}>
          {allMovies}
        </Row>
      </Row>
    </>
  );
}

export default MovieRow;
