import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import HRAnalyticsDashboard from "../../Assets/Projects/HRAnalyticsDashboard.png";
import EcommerceSalesAnalysis from "../../Assets/Projects/EcommerceSalesAnalysis.png";
import CarSales from "../../Assets/Projects/CarSales.png";
import CreditScoreClassification from "../../Assets/Projects/CreditScoreClassification.png";
import DemographicsAnalysis from "../../Assets/Projects/DemographicsAnalysis.png";
import MusicRecommendationSystem from "../../Assets/Projects/MusicRecommendationSystem.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HRAnalyticsDashboard}
              isBlog={false}
              title="HR Analytics Dashboard"
              description="This is a Power BI dashboard using a report/dashboard with the flat file i.e. excel file. In this project I used the Power Query environment where I transformed and cleaned the data, then load it to the Power BI environment for further analysis and and build the dashboard."
              ghLink="https://github.com/sthefanyspina/HRAnalitycs"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EcommerceSalesAnalysis}
              isBlog={false}
              title="Ecommerce Sales Analysis"
              description="This is a Excel dashboard using a report/dashboard with the flat file i.e. excel file. In this project I used the Excel environment where I transformed and cleaned the data for further analysis and build the dashboard."
              ghLink="https://github.com/sthefanyspina/EccomerceSalesAnalysis"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CarSales}
              isBlog={false}
              title="Car Sales"
              description="This is a project made at the IBM Professional Certificate of Data Data Analyst where I used Excel to transformed and cleaned the data build the dashboard with Cognos Analytics"
              ghLink="https://github.com/sthefanyspina/ProfessionalCertificatesIbmDataAnalyst/tree/main/Data%20Visualization%20and%20Dashboards%20with%20Excel%20and%20Cognos"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CreditScoreClassification}
              isBlog={false}
              title="Credit Score Classification"
              description="This project is a credit score classification with Machine Learning using Python. Banks and credit card companies"
              ghLink="https://github.com/sthefanyspina/CreditScoreClassification"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DemographicsAnalysis}
              isBlog={false}
              title="Demographics Analysis"
              description="In this project, I’ll take you through the task of Demographics Analysis with Python."
              ghLink="https://github.com/sthefanyspina/DemographicsAnalysis"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MusicRecommendationSystem}
              isBlog={false}
              title="Music Recommendation System"
              description="A Music Recommendation System is an application of Data Science that aims to assist users in discovering new and relevant musical content based on their preferences and listening behaviour."
              ghLink="https://github.com/sthefanyspina/MusicRecommendationSystem"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
