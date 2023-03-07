// import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import React from "react";
import Brick from "../Images/brickbackground.jpeg"

function Home () {
  return (
    <div>
      {" "}
      <div
        className="bg-light border"
        style={{
          lineHeight: "500px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          fontSize: "50px",
        }}
      >
        {" "}
        Hi There! I'm Hannah Vaughan.
        <Button variant="outline-secondary" size="lg" className="mx-auto">
          View My Portfolio
        </Button>{" "}
        <br></br>
      </div>
      {" "}
    </div>
  );
}

export default Home;
