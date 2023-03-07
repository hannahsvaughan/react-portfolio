import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-scroll";

function NavBar() {
  return (
    <>
      <Navbar bg="light" className="nav-style">
        <Container>
          <Navbar.Brand
            className="hover-class text-black"
            href="https://github.com/hannahsvaughan"
            target="_blank"
            rel="noreferrer"
          >
            Hannah Vaughan
          </Navbar.Brand>

          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Nav className="me-auto">
                <Link
                  to="about-section"
                  className="nav-link hover-class text-black"
                  smooth={true}
                  offset={-70}
                  duration={200}
                >
                  About Me
                </Link>
                <Link
                  to="portfolio-section"
                  className="nav-link hover-class text-black"
                  smooth={true}
                  offset={-70}
                  duration={200}
                >
                  Portfolio
                </Link>
                <Link
                  to="contact-section"
                  className="nav-link hover-class text-black"
                  smooth={true}
                  offset={-70}
                  duration={200}
                >
                  Contact
                </Link>
              </Nav>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
