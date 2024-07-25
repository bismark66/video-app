/** @format */
"use client";
import React from "react";
import { Typography, Flex, Button, Row, Col } from "antd";
import styles from "@/app/page.module.css";
import MovieCard from "./movie-card";

const boxStyle: React.CSSProperties = {
  width: "100%",
  //   height: 120,
  borderRadius: 6,
  //   border: "1px solid #40a9ff",
};

function MovieRow() {
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

        <Col span={6}>
          <MovieCard
            url={
              "https://image.tmdb.org/t/p/w500/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg"
            }
            title="The Godfather"
            view={10000}
          />
        </Col>
        <Col span={6}>
          <MovieCard
            url={
              "https://image.tmdb.org/t/p/w500/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg"
            }
            title="The Godfather"
            view={10000}
          />
        </Col>
        <Col span={6}>
          <MovieCard
            url={
              "https://image.tmdb.org/t/p/w500/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg"
            }
            title="The Godfather"
            view={10000}
          />
        </Col>
        <Col span={6}>
          <MovieCard
            url={
              "https://image.tmdb.org/t/p/w500/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg"
            }
            title="The Godfather"
            view={10000}
          />
        </Col>

        {/* <Flex style={boxStyle} justify={"space-between"} align={"center"}>
          <MovieCard
            url={
              "https://image.tmdb.org/t/p/w500/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg"
            }
            title="The Godfather"
            view={10000}
          />
          <MovieCard
            url={
              "https://image.tmdb.org/t/p/w500/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg"
            }
            title="The Godfather"
            view={10000}
          />
          <MovieCard
            url={
              "https://image.tmdb.org/t/p/w500/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg"
            }
            title="The Godfather"
            view={10000}
          />
          <MovieCard
            url={
              "https://image.tmdb.org/t/p/w500/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg"
            }
            title="The Godfather"
            view={10000}
          />
        </Flex> */}
      </Row>
    </>
  );
}

export default MovieRow;
