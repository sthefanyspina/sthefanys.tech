import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Databases from "./Databases";
import AnalyticalReport from "./AnalyticalReport";
import Cloud from "./Cloud";
import VersionControl from "./VersionControl";
import CertificationsCard from "./CertificationsCard";

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
            style={{ paddingTop: "20px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <h1 style={paddingBottom: "40px" } className="project-heading">
          <strong className="purple">Certifications </strong>
          and <strong className="purple">Licenses</strong>
        </h1>

        <CertificationsCard />

        <h1 className="project-heading">
          Programming <strong className="purple">Languages</strong>
        </h1>

        <Techstack />


        <h1 className="project-heading">
          <strong className="purple">Databases</strong>
        </h1>

        <Databases />


        <h1 className="project-heading">
          <strong className="purple">Analytical</strong> Reporting
        </h1>

        <AnalyticalReport />


        <h1 className="project-heading">
          <strong className="purple">Cloud</strong>
        </h1>

        <Cloud />

        <h1 className="project-heading">
          <strong className="purple">Version Control</strong> Tools
        </h1>

        <VersionControl />

            
      </Container>
    </Container>
  );
}

export default About;


