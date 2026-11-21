import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaAws,
} from "react-icons/fa";
import { VscAzure,
} from "react-icons/vsc";

function Cloud() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
      </Col>
  
      <Col xs={4} md={2} className="tech-icons">
        <VscAzure />
      </Col>
  

    </Row>
  );
}

export default Cloud;
