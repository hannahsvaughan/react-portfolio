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

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <AboutMe />
      <Card.Title className="mb-2 display-3 text-center">Projects</Card.Title>
      <CardGroup className="d-flex justify-content-center">
        <Row className="justify-content-center">
          <Col sm={12} md={4}>
            <Project title="TBD" />
          </Col>
          <Col sm={12} md={4}>
            <Project title="TBD"/>
          </Col>
          <Col sm={12} md={4}>
            <Project title="TBD" />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col sm={12} md={4}>
            <Project title="TBD" />
          </Col>
          <Col sm={12} md={4}>
            <Project title="TBD" />
          </Col>
          <Col sm={12} md={4}>
            <Project title="TBD" />
          </Col>
        </Row>
      </CardGroup>{" "}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
