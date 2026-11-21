import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sthefany Spina </span>
            from <span className="purple"> Brazil.</span>
            <br />
            I have completed my degree in <span className="purple">Systems Analysis and Development. </span> 
            and my postgraduates degrees in <span className="purple">Data Engineering and Machine Learning Engineering</span> and <span className="purple"> Data Analytics and Applied Statistics </span>
          </p>
            <br />

          <p style={{ color: "rgb(155 126 172)" }}>
            "Do or do not, there is no try!"{" "}
          </p>
          <footer className="blockquote-footer">Master Yoda</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;



