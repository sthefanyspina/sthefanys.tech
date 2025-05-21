import React from "react";
import Card from "react-bootstrap/Card";

function CertificationsCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
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
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}
export default CertificationCard;
