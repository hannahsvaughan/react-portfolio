import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import React from "react";

function Home() {
  return (
    <div>
      <Stack align="middle">
        <div
          className="bg-light border"
          style={{
            lineHeight: "250px",
            display: "flex",
            flexDirection: "column",
            fontSize: "50px",
          }}
        >
          {" "}
          Hi There! I'm Hannah Vaughan.
          
            <Button
              variant="outline-secondary"
              size="lg"
              className="mx-auto"
            >
              View My Portfolio
            </Button>{" "}
            <br></br>
        </div>
      </Stack>
    </div>
  );
}

export default Home;
