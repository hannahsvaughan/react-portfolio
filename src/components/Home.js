import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Portfolio from "./Portfolio";
import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function HomeScreen() {
  return (
    <Stack align="middle">
        <div
          className="bg-light border, banner-container"
          style={{ lineHeight: "100px", display: "flex", flexDirection: "column", fontSize: "25px"}}
        >
          Hi There! I'm Hannah Vaughan.{" "}
          <div>
          <Button variant="outline-secondary" size="lg" onClick={Portfolio}>
            View My Portfolio
          </Button>{" "}
          </div>
        </div>
      <div
        className="bg-light border"
        style={{
          listStyle: "none",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          lineHeight: "100px",
        }}
      >
        <a href="https://github.com/hannahsvaughan" target="blank">
          <li>
            <FaGithub color="black" size="50px" />
          </li>
        </a>
        <a href="https://www.linkedin.com/hannahsvaughan" target="blank">
          <li>
            <FaLinkedin color="black" size="50px" />
          </li>
        </a>
        <a href="https://www.instagram.com" target="blank">
          <li>
            <FaInstagram color="black" size="50px"/>
          </li>
        </a>
      </div>
      <br></br>
    </Stack>
  );
}

export default HomeScreen;
