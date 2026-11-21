import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiPython,
} from "react-icons/di";

import { PiFileSql } from "react-icons/pi";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
  
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <PiFileSql />
      </Col>
  
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
  
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
  
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
  
    </Row>
  );
}

export default Techstack;

