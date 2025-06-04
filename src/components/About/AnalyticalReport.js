import React from "react";
import { Col, Row } from "react-bootstrap";
import { 
  FaRegFileExcel,
} from "react-icons/fa";
import {
  SiTableau,
  SiLooker,
} from "react-icons/si";

function AnalyticalReport() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaRegFileExcel />
      </Col>
  
      <Col xs={4} md={2} className="tech-icons">
        <SiTableau />
      </Col>
  
      <Col xs={4} md={2} className="tech-icons">
        <SiLooker />
      </Col>

    </Row>
  );
}

export default AnalyticalReport;
