import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
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
              About <strong className="purple">Me</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "0px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

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

      function CertificationsCard() {
        return (
          <Card className="quote-card-view">
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p style={{ textAlign: "justify" }}>
                  <ul>
                    <li className="certications">
                      Databricks - <span className="purple">Databricks Fundamentals</span>
                    </li>
                    <li className="certications">
                      Google - <span className="purple">Data Analytics</span>
                    </li>
                    <li className="certications">
                      IBM - <span className="purple">Data Science Professional Certificate</span>
                    </li>
                    <li className="certications">
                      IBM - <span className="purple">Data Analyst Professional Certificate</span>
                    </li>
                    <li className="certications">
                      IBM - <span className="purple">Data Engineering Professional Certificate</span>
                    </li>

              </blockquote>
            </Card.Body>
          </Card>
        );
      }

        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

      </Container>
    </Container>
  );
}

export default About;
