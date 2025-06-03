import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiApacheairflow,
  SiDbt,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiApacheairflow />
      </Col>
  
      <Col xs={4} md={2} className="tech-icons">
        <SiDbt />
      </Col>

    </Row>
  );
}

export default ETL;
