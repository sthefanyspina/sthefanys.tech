import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiApacheairflow,
  SiDatabricks
} from "react-icons/si";

function ETLTools() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiApacheairflow />
      </Col>

     <Col xs={4} md={2} className="tech-icons">
        <SiDatabricks />
      </Col>

    </Row>
  );
}

export default ETLTools;
