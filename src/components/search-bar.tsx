/** @format */
"use client";
import React, { useState } from "react";
import { GetProps, Input } from "antd";
import HttpHandler from "@/api/httpHandler";

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

function SearchBar() {
  const [change, setChange] = useState("");

  const onSearch: SearchProps["onSearch"] = async (value, _e, info) => {
    const response = await HttpHandler.Search(value);

    console.log(response);
    setChange(value);
  };

  //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setChange(e.target.value);

  //     // const { value: inputValue } = e.target;
  //     // const reg = /^-?\d*(\.\d*)?$/;
  //     // if (reg.test(inputValue) || inputValue === '' || inputValue === '-') {
  //     //   onChange(inputValue);
  //     // }
  //   };

  console.log(change);

  return (
    <>
      <Search
        placeholder="search movie"
        allowClear
        size="middle"
        onChange={(e) => setChange(e.target.value)}
        onSearch={onSearch}
        style={{ width: 400 }}
      />
    </>
  );
}

export default SearchBar;
