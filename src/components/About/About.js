import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Frameworks from "./Frameworks";
import Databases from "./Databases";
import DataWarehouses from "./DataWarehouses";
import ETLTools from "./ETLTools";
import AnalyticalReport from "./AnalyticalReport";
import BigData from "./BigData";
import Cloud from "./Cloud";
import VersionControl from "./VersionControl";
import Toolstack from "./Toolstack";
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
            style={{ paddingTop: "0px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <h1 className="project-heading">
          <strong className="purple">Certifications </strong>
          and <strong className="purple">Licenses </strong>
        </h1>

        <CertificationsCard />

        <h1 className="project-heading">
          Programming <strong className="purple">Languages </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Frameworks </strong>
        </h1>

        <Frameworks />

        <h1 className="project-heading">
          <strong className="purple">Databases </strong>
        </h1>

        <Databases />

        <h1 className="project-heading">
          <strong className="purple">Datawarehouse </strong> Tools
        </h1>

        <DataWarehouses />

        <h1 className="project-heading">
          <strong className="purple">ETL & ELT </strong> Tools
        </h1>

        <ETLTools />

        <h1 className="project-heading">
          <strong className="purple">Analytical </strong> Reporting
        </h1>

        <AnalyticalReport />

        <h1 className="project-heading">
          <strong className="purple">Big Data </strong> Tools
        </h1>

        <BigData />

        <h1 className="project-heading">
          <strong className="purple">Cloud </strong>
        </h1>

        <Cloud />

        <h1 className="project-heading">
          <strong className="purple">Version Control </strong> Tools
        </h1>

        <VersionControl />

            
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

      </Container>
    </Container>
  );
}

export default About;
