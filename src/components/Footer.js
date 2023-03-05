import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import Navbar from "react-bootstrap/Navbar";

export default function Footer() {
    return (
        <footer>
            <Navbar bg="light" variant="light">
                <Container fluid>
                    <Stack align="middle">
                    <h6>
                        <span className="text-black">© 2023 Hannah Vaughan</span>
                    </h6>
                    </Stack>
                </Container>
            </Navbar>
        ;</footer>
    )
}