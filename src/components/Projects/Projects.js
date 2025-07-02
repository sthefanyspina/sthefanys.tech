import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ApacheFlinkSalesAnalysis from "../../Assets/Projects/ApacheFlinkSalesAnalysis.png";
import EMRDataProcessing from "../../Assets/Projects/EMRDataProcessing.png";
import YouTubeAnalytics from "../../Assets/Projects/YouTubeAnalytics.png";
import FootballDataEngineering from "../../Assets/Projects/FootballDataEngineering.png";
import JapanVisaAnalysis from "../../Assets/Projects/JapanVisaAnalysis.png";
import SalesModernDataEngineeringProject from "../../Assets/Projects/SalesModernDataEngineeringProject.png";
import CiCd from "../../Assets/Projects/CiCd.png";
import SimulatedFinancialTransactions from "../../Assets/Projects/SimulatedFinancialTransactions.png";
import KubernetesDataEngineering from "../../Assets/Projects/KubernetesDataEngineering.png";
import HRAnalyticsDashboard from "../../Assets/Projects/HRAnalyticsDashboard.png";
import EcommerceSalesAnalysis from "../../Assets/Projects/EcommerceSalesAnalysis.png";
import CarSales from "../../Assets/Projects/CarSales.png";
import NBAStatsDashboard from "../../Assets/Projects/NbaStatsDashboard.png";
import TvShowsAndMoviesDashboard from "../../Assets/Projects/SeriesMoviesDashboard.png";
import GamesSalesDashboard from "../../Assets/Projects/GamesSalesDashboard.png";
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
              imgPath={EMRDataProcessing}
              isBlog={false}
              title="Apache Spark - EMR Data Processing"
              description="This project demonstrates the use of Amazon Elastic Map Reduce (EMR) for processing large datasets using Apache Spark. It includes a Spark script for ETL (Extract, Transform, Load) operations, AWS command line instructions for setting up and managing the EMR cluster, and a dataset for testing and demonstration purposes."
              ghLink="https://github.com/sthefanyspina/DataEngineeringProjects/tree/main/Apache%20Spark/EMRDataProcessing"
            />
          </Col>

            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ApacheFlinkSalesAnalysis}
              isBlog={false}
              title="Apache Flink - Sales Analysis"
              description="This repository contains an end-to-end data engineering project using Apache Flink, focused on performing sales analytics. The project demonstrates how to ingest, process, and analyze sales data, showcasing the capabilities of Apache Flink for big data processing."
              ghLink="https://github.com/sthefanyspina/DataEngineeringProjects/tree/main/Apache%20Flink/SalesAnalytics"
            />
          </Col>

            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={YouTubeAnalytics}
              isBlog={false}
              title="YouTube Analytics"
              description="This Python-based project aims to fetch real-time YouTube metrics like likes, views, comments, and favorites, and then streams this data via Kafka. Also, KSqlDB was used for stream processing and the processed data is then sent to a Telegram bot for real-time notifications."
              ghLink="https://github.com/sthefanyspina/DataEngineeringProjects/tree/main/Google%20Cloud/Youtube_Analytics"
            />
          </Col>

            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={JapanVisaAnalysis}
              isBlog={false}
              title="Japan Visa Analysis"
              description="This project provides an end-to-end data processing and visualization of visa numbers in Japan using PySpark and Plotly. The spark clusters are set up within a Docker container on Azure."
              ghLink="https://github.com/sthefanyspina/DataEngineeringProjects/tree/main/Azure/Japan_visa"
            />
          </Col>

            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FootballDataEngineering}
              isBlog={false}
              title="Football - Data Engineering Project"
              description="This Python-based project crawls data from Wikipedia using Apache Airflow, cleans it and pushes it Azure Data Lake for processing."
              ghLink="https://github.com/sthefanyspina/DataEngineeringProjects/tree/main/Azure/Football_wikipedia"
            />
          </Col>

            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SalesModernDataEngineeringProject}
              isBlog={false}
              title="Modern Data Engineering Project"
              description="In this project, we setup and end to end data engineering using Apache Spark, Azure Databricks, Data Build Tool (DBT) using Azure as our cloud provider. This project illustrate the process of data ingestion to the lakehouse, data integration with ADF and data transformation with Databricks, and DBT."
              ghLink="https://github.com/sthefanyspina/DataEngineeringProjects/tree/main/Azure/sales_moder_data_engineering_project"
            />
          </Col>

            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SimulatedFinancialTransactions}
              isBlog={false}
              title="Simulated Financial Transactions"
              description="This Python script is designed to generate simulated financial transactions and insert them into a PostgreSQL database. It's particularly useful for setting up a test environment for Change Data Capture (CDC) with Debezium. The script uses the faker library to create realistic, yet fictitious, transaction data and inserts it into a PostgreSQL table."
              ghLink="https://github.com/sthefanyspina/DataEngineeringProjects/tree/main/Kafka/Simulated_Financial_Transactions"
            />
          </Col>

            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CiCd}
              isBlog={false}
              title="CI / CD Project"
              description="This repository is an Infrastructure as Code (IaC) project that leverages terraform for orchestrating the provisioning of the Azure services related to Data Engineering."
              ghLink="https://github.com/sthefanyspina/DataEngineeringProjects/tree/main/Azure/ci_cd"
            />
          </Col>

            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={KubernetesDataEngineering}
              isBlog={false}
              title="Kubernetes - Data Engineering Project"
              description="This repository contains the necessary configuration files and DAGs (Directed Acyclic Graphs) for setting up a robust data engineering environment using Kubernetes and Apache Airflow. It includes the setup for the Kubernetes Dashboard, which provides a user-friendly web interface for managing Kubernetes clusters, and Apache Airflow, a platform to programmatically author, schedule, and monitor workflows."
              ghLink="https://github.com/sthefanyspina/DataEngineeringProjects/tree/main/Kubernetes/Kubernetes_Data_Engineering"
            />
          </Col>
                
            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WalmartSalesAnalysis}
              isBlog={false}
              title="Walmart Sales Analysis"
              description="This project is an end-to-end data analysis solution designed to extract critical business insights from Walmart sales data. We utilize Python for data processing and analysis, SQL for advanced querying, and structured problem-solving techniques to solve key business questions."
              ghLink="https://github.com/sthefanyspina/DataAnalysisProjects/tree/main/SQL%20Analysis/walmart_sales"
            />
          </Col>

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
              imgPath={TvShowsAndMoviesDashboard}
              isBlog={false}
              title="Tv Shows and Movies Analysis and Dashboard"
              description="This is a Power BI dashboard using a csv file. In this project I cleaned and processed two different IMDB datasets, after which I analyzed both and created a PowerBi dashboard to present the results."
              ghLink="https://github.com/sthefanyspina/Dashboards/tree/main/tv_shows_and_movies"
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
                
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GamesSalesDashboard}
              isBlog={false}
              title="Games Sales Analysis and Dashboard"
              description="This is a PowerBi dashboard using csv file. In this project I cleaned and processed the Games Sales Dataset, after which I analyzed both and created a PowerBi dashboard to present the results."
              ghLink="https://github.com/sthefanyspina/Dashboards/tree/main/games_sales"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
