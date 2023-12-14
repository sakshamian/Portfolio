import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import infohub from "../../Assets/Projects/infohub.png";
import bruteforce from "../../Assets/Projects/bruteforce.png";
import countries from "../../Assets/Projects/countries.png";
import urlshorten from "../../Assets/Projects/urlshorten.png";
import contactify from "../../Assets/Projects/contactify.png";
import crypto from "../../Assets/Projects/crypto.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bruteforce}
              title="Brute Force"
              description="This project was made for Flipkart Grid 5.0 Hackathon for the problem statement Loyatly Program using Blockchain. We integrated MetaMask for seamless connection of user accounts to the blockchain, enabling users to earn, track, and spend their loyalty points effortlessly."
              ghLink="https://github.com/sakshamian/Brute_Force"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={contactify}
              title="Contactify"
              description="A full-stack web application where a user can signup and add, delete, search and manage personal
              contacts."
              ghLink="https://github.com/sakshamian/Contactify"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crypto}
              title="Cryptoverse"
              description="Cryptoverse allows users to access everything happening in cryptocurrency universe. It fetches data from Bing News and Coin Ranking APIs. It uses Charts.js to display coin performance"
              ghLink="https://github.com/sakshamian/Crypto-Verse"
              demoLink="https://crypto-verse-ochre.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={urlshorten} 
              title="URL Shortener"
              description="A website which uses Shrtcode API to shorten URLs with invalid URL detection functionality. It has a fluid and responsive UI with ability to copy URLs for future use."
              ghLink="https://github.com/sakshamian/URL-shortener"
              demoLink="https://url-shortener-eta-wine.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={countries}
              title="Rest Countries"
              description="Display countries and their details using Rest-Countries-API. Made in vanilla Js this application uses hashchange to view detailed country page. It has easy navigation to border countries of any country"
              ghLink="https://github.com/sakshamian/Rest-countries-API-with-theme-switcher"
              demoLink="https://rest-countries-api-with-theme-switcher-rho.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={infohub}
              title="Infohub"
              description="Webapp to search any user by github username and get repositories and profile of the user in a appealing UI."
              ghLink="https://github.com/sakshamian/Info-hub"
              demoLink="https://info-hub-alpha.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
