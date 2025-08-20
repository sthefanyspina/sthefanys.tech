import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import HRAnalyticsDashboard from "../../Assets/Projects/HRAnalyticsDashboard.png";
import EcommerceSalesAnalysis from "../../Assets/Projects/EcommerceSalesAnalysis.png";
import CarSales from "../../Assets/Projects/CarSales.png";
import NBAStatsDashboard from "../../Assets/Projects/NbaStatsDashboard.png";
import TvShowsAndMoviesDashboard from "../../Assets/Projects/SeriesMoviesDashboard.png";
import SuperStoreSalesDasboard from "../../Assets/Projects/SuperStoreSales.png";
import EletricVehiclesDasboard from "../../Assets/Projects/EletricVehicles.png";
import RoadAccidentDashboard from "../../Assets/Projects/RoadAccidentDashboard.png";
import CoffeSalesDashboard from "../../Assets/Projects/CoffeSalesDashboard.png";
import WalmartSalesAnalysis from "../../Assets/Projects/WalmartSalesAnalysis.png";

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
              imgPath={CoffeSalesDashboard}
              isBlog={false}
              title="Coffe Sales Dashboard"
              description="This project is an end-to-end data analysis solution designed to extract critical business insights from Coffe sales data. We utilize Power Query for data processing and analysis and Excel to structured problem-solving techniques to solve key business questions and build the dashboard."
              ghLink="https://github.com/sthefanyspina/DataAnalysisProjects/tree/main/Dashboards/coffe_sales"
            />
          </Col>

            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RoadAccidentDashboard}
              isBlog={false}
              title="Road Accident Dashboard"
              description="This project is an end-to-end data analysis solution designed to extract critical business insights from Road Accident data. We utilize Power Query for data processing and analysis and Excel to structured problem-solving techniques to solve key business questions."
              ghLink="https://github.com/sthefanyspina/DataAnalysisProjects/tree/main/Dashboards/road_accidents"
            />
          </Col>
            
            
            
            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SuperStoreSalesDasboard}
              isBlog={false}
              title="SuperStore Sales Dasboard"
              description="This is a Power BI dashboard using a report/dashboard with the csv file. In this project I used the Power Query environment where I transformed and cleaned the data, then load it to the Power BI environment for further analysis, used DAX to create some calculatiuons and build the dashboard."
              ghLink="https://github.com/sthefanyspina/Dashboards/tree/main/superstore_sales"
            />
          </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={EletricVehiclesDasboard}
                isBlog={false}
                title="Eletric Vehicles Dasboard"
                description="This is a Tableau dashboard using a excel file. In this project I used the Excel environment where I transformed and cleaned the data, then load it to the Tableau environment for further analysis and build the dashboard."
                ghLink="https://github.com/sthefanyspina/Dashboards/tree/main/eletric_vehicles"
              />
            </Col>

            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CarSales}
              isBlog={false}
              title="Car Sales"
              description="This is a project made at the IBM Professional Certificate of Data Analyst where I used Excel to transformed and cleaned the data, then build the dashboard with Cognos Analytics"
              ghLink="https://github.com/sthefanyspina/ProfessionalCertificatesIbmDataAnalyst/tree/main/Data%20Visualization%20and%20Dashboards%20with%20Excel%20and%20Cognos"              
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
              imgPath={NBAStatsDashboard}
              isBlog={false}
              title="NBA Stats Analysis and Dashboard"
              description="This is a Power BI dashboard using a csv file. In this project I cleaned and processed three different data sets on NBA statistics, after which I analyzed everyone and created a dashboard to present the results."
              ghLink="https://github.com/sthefanyspina/Dashboards/tree/main/nba"
              />
            </Col>     

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HRAnalyticsDashboard}
              isBlog={false}
              title="HR Analytics Dashboard"
              description="This is a Power BI dashboard using a csv file. In this project I used the Power Query environment where I transformed and cleaned the data, then load it to the Power BI environment for further analysis and build the dashboard."
              ghLink="https://github.com/sthefanyspina/HRAnalitycs"
            />
          </Col>
                

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

