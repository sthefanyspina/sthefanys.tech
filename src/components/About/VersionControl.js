import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiGit,
} from "react-icons/di";
import {
  SiGithubactions,
  } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
  
      <Col xs={4} md={2} className="tech-icons">
        <SiGithubactions />
      </Col>

    </Row>
  );
}

export default VersionControl;
