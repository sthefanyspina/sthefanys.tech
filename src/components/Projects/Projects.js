import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import EletricVehiclesDasboard from "../../Assets/Projects/EletricVehicles.png";
import LoanAnalysisDasboard from "../../Assets/Projects/analise_emprestimos.png";
import RoadAccidentDashboard from "../../Assets/Projects/RoadAccidentDashboard.png";
import CoffeSalesDashboard from "../../Assets/Projects/CoffeSalesDashboard.png";

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
              imgPath={LoanAnalysisDasboard}
              isBlog={false}
              title="Loan Analysis Dasboard"
              description="This project is an end-to-end data analysis solution designed to extract critical business insights from Loan Request data. Used Power Query for data processing and analysis and PowerBI environment for further analysis and build the dashboard."
              ghLink="https://github.com/sthefanyspina/DataAnalysisProjects/tree/main/Dashboards/analise_emprestimos"
            />
          </Col>

           <Col md={4} className="project-card">
              <ProjectCard
                imgPath={EletricVehiclesDasboard}
                isBlog={false}
                title="Eletric Vehicles Dasboard"
                description="This is a Tableau dashboard using a excel file. In this project I used the Excel environment where I transformed and cleaned the data, then load it to the Tableau environment for further analysis and build the dashboard."
                ghLink="https://github.com/sthefanyspina/DataAnalysisProjects/tree/main/Dashboards/eletric_vehicles"
              />
            </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RoadAccidentDashboard}
              isBlog={false}
              title="Road Accident Dashboard"
              description="This project is an end-to-end data analysis solution designed to extract critical business insights from Road Accident data. Utilized Power Query for data processing and analysis and Excel to structured problem-solving techniques to solve key business questions."
              ghLink="https://github.com/sthefanyspina/DataAnalysisProjects/tree/main/Dashboards/road_accidents"
            />
          </Col>
                  
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CoffeSalesDashboard}
              isBlog={false}
              title="Coffe Sales Dashboard"
              description="This project is an end-to-end data analysis solution designed to extract critical business insights from Coffe sales data. Used Power Query for data processing and analysis and Excel to structured problem-solving techniques to solve key business questions and build the dashboard."
              ghLink="https://github.com/sthefanyspina/DataAnalysisProjects/tree/main/Dashboards/coffe_sales"
            />
          </Col>


            


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;





