import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiMongodb,
  DiMysql,
  DiPostgresql,
  DiRedis,
} from "react-icons/di";
import {
  SiApachecassandra,
} from "react-icons/si";

function Databases() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
  
      <Col xs={4} md={2} className="tech-icons">
        <DiPostgresql />
      </Col>
  
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
  
      <Col xs={4} md={2} className="tech-icons">
        <DiRedis />
      </Col>
  
      <Col xs={4} md={2} className="tech-icons">
        <SiApachecassandra />
      </Col>

    </Row>
  );
}

export default Databases;
