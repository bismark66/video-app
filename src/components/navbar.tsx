/** @format */

import { Row, Col } from "antd";
import React from "react";

function Navbar() {
  return (
    <>
      <Row>
        <Col span={8}>col-8</Col>
        <Col span={8} offset={8}>
          col-8
        </Col>
      </Row>
    </>
  );
}

export default Navbar;
