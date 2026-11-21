import React from "react";
import Card from "react-bootstrap/Card";

function CertificationsCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
            <p style={{ textAlign: "justify" }}>
                <ul>
                    <li className="certications">
                        Microsoft Certified - <span className="purple">Azure Data Fundamentals (DP-900)</span>
                    </li>
  
                    <li className="certications">
                        Databricks - <span className="purple">Databricks Fundamentals</span>
                    </li>
                    
            </ul>
            </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}
export default CertificationsCard;
