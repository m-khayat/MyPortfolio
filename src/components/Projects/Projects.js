import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import worldwise from "../../Assets/Projects/worldwise.png";
import usePopcorn from "../../Assets/Projects/usePopcorn .png";
import travilList from "../../Assets/Projects/travilList.png";
import eatAndSplit from "../../Assets/Projects/eatAndSplit.png";
import reactQuiz from "../../Assets/Projects/reactQuiz.png";
import planetFact from "../../Assets/Projects/planetFact.png";
import lookForCountry from "../../Assets/Projects/lookForCountry.png";
import burgerBuilder from "../../Assets/Projects/burgerBuilder.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={worldwise}
              title="WorldWise"
              description="Explore the world and document your adventures with an interactive world map built with React, React-Leaflet, and Context API. Allows users to click on cities, share thoughts about each location, and add cities to a personalized list of visited places.  smooth navigation with React Router, and a responsive design for a seamless experience across devices."
              ghLink="https://github.com/m-khayat/worldwise"
              demoLink="https://m-khayat.github.io/worldwise/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reactQuiz}
              title="React Quiz"
              description="A 15-question quiz to test your mastery of React, built with React using useReducer, and Context API. The app features multiple states: Loading, Error, Ready, Active, and Finish. Users can track their progress throughout the quiz and view their high score upon completion. Responsive and interactive, this app provides a seamless quiz experience."
              ghLink="https://github.com/m-khayat/ReactQuiz"
              demoLink="https://m-khayat.github.io/ReactQuiz/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={planetFact}
              title="Planets Fact"
              description="Discover detailed information about all the planets in the solar system, presented with a visually appealing design. Built with React and React Router, this app offers an engaging way to learn about planets."
              ghLink="https://github.com/m-khayat/PlanetFact"
              demoLink="https://m-khayat.github.io/PlanetFact/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={usePopcorn}
              title="usePopcorn"
              description="A responsive movie app built with React and the OMDb API. Search for your favorite movies by name, rate them, and add them to your personal list. With a clean and intuitive design, UsePopcorn makes managing your movie watchlist easy and enjoyable."
              ghLink="https://github.com/m-khayat/usePopcorn"
              demoLink="https://m-khayat.github.io/usePopcorn/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lookForCountry}
              title="look for country"
              description="A country explorer app built with React, React Router, and the REST Countries API. Search for countries by name, filter them by continent, and click on any country to get detailed information. The app also features both dark and light mode for a customizable browsing experience."
              ghLink="https://github.com/m-khayat/Look_for_country"
              demoLink="https://m-khayat.github.io/Look_for_country/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={burgerBuilder}
              title="Burger Builder"
              description="A responsive burger customization app, built using React 17 with class-based components. Users can add or remove ingredients to build their perfect burger and place an order. As my first project, it showcases the fundamentals of React and delivers a smooth user experience."
              ghLink="https://github.com/m-khayat/Burger-Builder"
              demoLink="https://m-khayat.github.io/Burger-Builder/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travilList}
              title="Far Away"
              description="A trip packing list app where you can organize all the items you need for your journey. Add items with their names and quantities, remove them as needed, or mark them as packed. This app helps ensure you never forget anything on your trips."
              ghLink="https://github.com/m-khayat/Travel_List"
              demoLink="https://m-khayat.github.io/Travel_List/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eatAndSplit}
              title="Eat and Split"
              description="A React app designed to simplify bill splitting. Add friends to your list, select who to split the bill with, and see exactly how much you owe them or they owe you. A handy tool for dining out with friends and keeping track of expenses."
              ghLink="https://github.com/m-khayat/Eat_and_split"
              demoLink="https://m-khayat.github.io/Eat_and_split/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
