/** @format */
"use client";
import { Row, Col, Menu, MenuProps, GetProps, Input } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import SearchBar from "./search-bar";
import { useRouter } from "next/navigation";
import HttpHandler from "@/api/httpHandler";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "Home",
    label: <Link href="/">Home</Link>,
  },
  {
    key: "Search",
    label: <Link href="/search">Search</Link>,
  },
];

type SearchProps = GetProps<typeof Input.Search>;
interface Movie {
  [x: string]: any;
  poster_path: string;
  title: string;
  popularity: number;
  id: number;
}

function Navbar({ search }: { search: boolean }) {
  const [current, setCurrent] = useState("home");
  const router = useRouter();

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  const onSearch: SearchProps["onSearch"] = async (value: string, _e: any) => {
    if (value != "") {
      const response = await HttpHandler.Search(value);
      const results = response.results as Movie;
      localStorage.setItem("search", JSON.stringify(results));

      router.push("/search");
    }
  };

  return (
    <>
      <Row
        justify="center"
        style={{ background: "#f4f4f4", padding: "10px 0" }}
      >
        <Col xs={22} sm={18} md={20} lg={16}>
          <Row>
            <Col
              span={8}
              lg={{ span: 10 }}
              md={{ span: 10 }}
              sm={{ span: 12 }}
              xs={{ span: 14 }}
              style={{
                display: "flex",
                justifyContent: "center",
                alignSelf: "center",
              }}
            >
              {search ? <SearchBar onSearch={onSearch} /> : <>&nbsp;</>}
            </Col>
            <Col
              lg={{ span: 4, offset: 8 }}
              md={{ span: 12, offset: 2 }}
              sm={{ span: 6, offset: 4 }}
              xs={{ span: 6, offset: 2 }}
            >
              <Menu
                onClick={onClick}
                selectedKeys={[current]}
                mode="horizontal"
                items={items}
                style={{
                  background: "none",
                  display: "flex",
                  justifyContent: "center",
                }}
                overflowedIndicator={"Menu"}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default Navbar;
