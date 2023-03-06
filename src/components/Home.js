import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Portfolio from "./Portfolio";
import React from "react";

function Home() {
  return (
    <div>
    <Stack align="middle">
        <div
          className="bg-light border, banner-container"
          style={{ lineHeight: "500px", display: "flex", flexDirection: "column", fontSize: "25px"}}
        >
          Hi There! I'm Hannah Vaughan.{" "}
          <div>
          <Button variant="outline-secondary" size="lg" width="auto"onClick={Portfolio}>
            View My Portfolio
          </Button>{" "}
          </div>
          </div>
    </Stack>
    </div>
  );
}

export default Home;
