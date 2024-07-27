/** @format */

import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        margin: "0 auto",
        height: "100vh",
      }}
    >
      <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
    </div>
  );
}

export default Loading;
