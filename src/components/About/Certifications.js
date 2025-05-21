import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function Certifications() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
            <strong className="purple">Certifications 
            and <strong className="purple">Licenses</strong>
            </h1>
              

      </Container>
    </Container>
  );
}

export default Certifications;
