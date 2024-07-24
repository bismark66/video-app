/** @format */
"use client";
import React from "react";
import { GetProps, Input } from "antd";

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
  console.log(info?.source, value);

function SearchBar() {
  return (
    <>
      <Search
        placeholder="search movie"
        allowClear
        size="middle"
        onSearch={onSearch}
        style={{ width: 400 }}
      />
    </>
  );
}

export default SearchBar;
