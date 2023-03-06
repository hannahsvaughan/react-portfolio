import React from "react";
import { Card } from "react-bootstrap";

function AboutMe() {
  return (
    <Card className="mx-3 my-4">
      <Card.Body className="text-center">
        <Card.Title className="mb-2 display-3 text-center">About Me</Card.Title>
        <p>
          I am passionate about web development and skilled in HTML, CSS, JavaScript, React and more. The projects in my portfolio below demonstrate my skills as a
          junior web developer.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h2>Key Skills</h2>
        <p>
          HTML5, CSS3, JavaScript, Bootstrap, Bulma, jQuery, React, MySQL, MongoDB, Sequelize, Jest Testing, Git, GitHub, Insomnia, Salesforce & Microsoft Office.
        </p>
      </Card.Body>
    </Card>
  );
}

export default AboutMe;
