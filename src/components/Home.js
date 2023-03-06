import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Portfolio from "./Portfolio";
import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function HomeScreen() {
  return (
    <Stack gap={2} align="middle">
      <div>
        <div
          className="bg-light border, banner-container"
          style={{ lineHeight: "500px" }}
        >
          Hi There! I'm Hannah Vaughan.{" "}
          <Button variant="outline-secondary" href={Portfolio}>
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
            <FaGithub color="black" />
          </li>
        </a>
        <a href="https://www.linkedin.com/hannahsvaughan" target="blank">
          <li>
            <FaLinkedin color="black" />
          </li>
        </a>
        <a href="https://www.instagram.com" target="blank">
          <li>
            <FaInstagram color="black" />
          </li>
        </a>
      </div>
      <br></br>
    </Stack>
  );
}

export default HomeScreen;
