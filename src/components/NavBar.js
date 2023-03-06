import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-scroll";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Hannah Vaughan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
              <Link to="#About" smooth={true} duration={500}>About Me
              </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#Project">Portfolio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#Contact">Contact Me</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
