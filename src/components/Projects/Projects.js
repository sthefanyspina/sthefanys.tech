import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import HeartDiseasePrediction from "../../Assets/Projects/HeartDiseasePrediction.png";
import CovidCasesPrediction from "../../Assets/Projects/CovidCasesPrediction.png";
import CarbonEmissionsImpact from "../../Assets/Projects/CarbonEmissionsImpact.png";
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
              imgPath={HeartDiseasePrediction}
              isBlog={false}
              title="Heart Disease Prediction"
              description="In this project I train a model for the task of heart disease prediction using Machine Learning. For this I will use the Logistic Regression algorithm.."
              ghLink="https://github.com/sthefanyspina/HeartDisease"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CovidCasesPrediction}
              isBlog={false}
              title="Covid Cases Predicition"
              description="This is a machine learning project on Covid-19 cases prediction with Python for the next 30 days.."
              ghLink="https://github.com/sthefanyspina/CovidCases"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CarbonEmissionsImpact}
              isBlog={false}
              title="Carbon Emissions Impact"
              description="In this analysis, we aim to explore the impact of carbon emissions on global temperatures."
              ghLink="https://github.com/sthefanyspina/CarbonEmissionsImpact/tree/main"              
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
