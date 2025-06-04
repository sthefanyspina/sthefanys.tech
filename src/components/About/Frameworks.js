import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiNodejs,
} from "react-icons/di";
import {
  SiPandas,
  SiNumpy,
  SiFlask,
  SiDjango,
} from "react-icons/si";

function Frameworks() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas />
      </Col>
  
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy />
      </Col>
  
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask />
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <SiDjango />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      

    </Row>
  );
}

export default Frameworks;
