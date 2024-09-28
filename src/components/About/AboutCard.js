import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mohamad Khayat </span>
            from <span className="purple"> Damascus, Syria.</span>
            <br />
            I am a 5th-year IT engineering student with a passion for frontend
            development, particularly in React.
            <br />
            While I don't have professional work experience yet, I have spent
            significant time honing my skills through academic projects and
            personal initiatives.
            <br />
            I am continuously learning and exploring new technologies in the web
            development ecosystem.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Swimming
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
