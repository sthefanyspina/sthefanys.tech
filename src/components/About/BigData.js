import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiApachespark,
  SiApachehadoop,
  SiApachekafka,
} from "react-icons/si";

function BigData() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachespark />
      </Col>
  
      <Col xs={4} md={2} className="tech-icons">
        <SiApachehadoop />
      </Col>
  
      <Col xs={4} md={2} className="tech-icons">
        <SiApachekafka />
      </Col>

    </Row>
  );
}

export default BigData;
