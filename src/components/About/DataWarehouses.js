import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiSnowflake,
  SiGooglebigquery,
  SiAmazonredshift,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiSnowflake />
      </Col>
  
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglebigquery />
      </Col>
  
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonredshift />
      </Col>

    </Row>
  );
}

export default DataWarehouses;
