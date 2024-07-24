/** @format */
"use client";
import { Row, Col, Menu, MenuProps } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import SearchBar from "./search-bar";

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
  {
    key: "Movies",
    label: <Link href={`/movies`}>Movies</Link>,
  },
  // {
  //   label: "Navigation Three - Submenu",
  //   key: "SubMenu",
  //   // icon: <SettingOutlined />,
  //   children: [
  //     {
  //       type: "group",
  //       label: "Item 1",
  //       children: [
  //         { label: "Option 1", key: "setting:1" },
  //         { label: "Option 2", key: "setting:2" },
  //       ],
  //     },
  //     {
  //       type: "group",
  //       label: "Item 2",
  //       children: [
  //         { label: "Option 3", key: "setting:3" },
  //         { label: "Option 4", key: "setting:4" },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   key: "alipay",
  //   label: (
  //     <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
  //       Navigation Four
  //     </a>
  //   ),
  // },
];

function Navbar() {
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <>
      <Row>
        <Col span={8}>
          <SearchBar />
        </Col>
        <Col span={8} offset={8}>
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
            style={{ background: "none" }}
          />
        </Col>
      </Row>
    </>
  );
}

export default Navbar;
