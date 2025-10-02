import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiVercel,
} from "react-icons/si";
import { 
  FaDocker,
  FaWindows,
  FaLinux,
} from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaWindows />
      </Col>
  
      <Col xs={4} md={2} className="tech-icons">
        <FaLinux />
      </Col>
  
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
  
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaDocker />
      </Col>
  
    </Row>
  );
}

export default Toolstack;


