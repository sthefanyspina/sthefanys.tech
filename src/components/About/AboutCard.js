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
            and my postgraduate degree in <span className="purple">Data Engineering </span> and <span className="purple">Machine Learning Engineering</span>
            <br />
            And I am doing my postgraduate studies in <span className="purple"> Data Analytics. </span> and <span className="purple"> Applied Statistics </span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              - Playing VideoGames
            </li>
            <li className="about-activity">
              - Reading books and comics
            </li>
            <li className="about-activity">
              - Playing Music
            </li>
            </ul>
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


