import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardGroup, Card, Row, Col } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutMe from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ComingSoon from "../src/Images/comingsoon.jpeg";
import { Element } from "react-scroll";

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Element name="about-section">
        <AboutMe />
      </Element>
      <Element name="portfolio-section">
        <Card.Title className="mb-2 display-3 text-center">Projects</Card.Title>
        <CardGroup className="d-flex justify-content-center">
          <Row className="justify-content-center">
            <Col sm={12} md={4}>
              <Project
                title="Currency Converter"
                image={ComingSoon}
                description="A simple online currency converter that also includes current cryptocurrency prices. Users are able to input any country's currency type and convert to their currency of choice."
                githubLink="https://github.com/hannahsvaughan/Project-1.git"
              />
            </Col>
            <Col sm={12} md={4}>
              <Project
                title="Grocery List App"
                image={ComingSoon}
                description="An application that allows users to keep track of their grocery lists. The user is able to input the grocery item needed, quantity, and any additional comments, along with the ability to delete, edit, and add items."
                githubLink="https://github.com/hannahsvaughan/bc-project2.git"
              />
            </Col>
            <Col sm={12} md={4}>
              <Project
                title="README Creator"
                image={ComingSoon}
                description="A command-line application that dynamically generates a professional README.md file from a user's input using the inquirer package."
                githubLink="https://github.com/hannahsvaughan/readme-creator"
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm={12} md={4}>
              <Project
                title="eCommerce Back-End"
                image={ComingSoon}
                description="Back-end for an e-commerce site using Express.js and Sequelize. Utilizes a working Express.js API configured to use Sequelize to interact with a MySQL database."
                githubLink="https://github.com/hannahsvaughan/eCommerce-back-end.git"
              />
            </Col>
            <Col sm={12} md={4}>
              <Project
                title="Social Network API"
                image={ComingSoon}
                description="An API for a social network web application where users can share their thoughts, reach to friends' thoughts, and create a friend list. Utilizes Express and Mongoose."
                githubLink="https://github.com/hannahsvaughan/social-network-API.git"
              />
            </Col>
            <Col sm={12} md={4}>
              <Project
                title="Password Generator"
                image={ComingSoon}
                description="A random password generator created to display JavaScript skills. The prompts included ask user if they would like lower case letters, upper case letters, numbers, and spcial characters."
                githubLink="https://github.com/hannahsvaughan/password-generator-activity.git"
              />
            </Col>
          </Row>
        </CardGroup>{" "}
      </Element>
      <Element name="contact-section">
        <Contact />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
