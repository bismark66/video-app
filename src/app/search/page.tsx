/** @format */
"use client";
import HttpHandler from "@/api/httpHandler";
import React, { useEffect, useState } from "react";
import styles from "../page.module.css";
import MovieCard from "@/components/movie-card";
import Navbar from "@/components/navbar";
import SearchBar from "@/components/search-bar";
import MovieRow from "@/components/row";

function Search() {
  return (
    <div className={styles.main}>
      <SearchBar />
    </div>
  );
}

export default Search;
