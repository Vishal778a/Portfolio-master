import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vishal Agarwal </span>
            from <span className="purple"> Lucknow U.P., India.</span>
            <br />I am a working as Senior Software Developer in Fakeeh Technologies Pvt Ltd.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "To learn and create a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Vishal A</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
