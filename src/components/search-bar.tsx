/** @format */
"use client";
import React from "react";
import { Input } from "antd";
const { Search } = Input;

function SearchBar(props: any) {
  return (
    <>
      <Search
        placeholder="search movie"
        allowClear
        size="middle"
        // onChange={(e) => setChange(e.target.value)}
        onSearch={props.onSearch}
        style={{ width: 400 }}
      />
    </>
  );
}

export default SearchBar;
