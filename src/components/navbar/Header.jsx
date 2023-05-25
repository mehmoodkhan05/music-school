import "./header.css"
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { MdPhone } from "react-icons/md";

const Header = () => {
    return (
        <>
            <header className="navbar-section">
                <Navbar bg="transparent" expand="lg" fixed="top">
                    <Container>
                        <Navbar.Brand href="#">
                            <img
                                src="/src/assets/images/nav-logo.png"
                                className="navbar-logo"
                                alt=""
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav className="ms-auto d-flex align-items-center nav-items" navbarScroll>
                                <Nav.Link href="#" className="ms-4 nav-link">
                                    Home
                                </Nav.Link>
                                <Nav.Link href="#" className="ms-4 nav-link">
                                    Services
                                </Nav.Link>
                                <Nav.Link href="#" className="ms-4 nav-link">
                                    Teachers
                                </Nav.Link>
                                <Nav.Link href="#" className="ms-4 nav-link">
                                    News
                                </Nav.Link>
                                <Nav.Link href="#" className="ms-4 nav-link">
                                    Contact Us
                                </Nav.Link>
                                <Nav.Link href="#" className="ms-4">
                                    <Button variant="border-0" className="nav-btn btn-w-180">
                                        Login/Register
                                    </Button>
                                </Nav.Link>
                                <Nav.Link href="#" className="ms-2 nav-link">
                                    <MdPhone className="me-2 navbar-icon" />
                                    (404) 924-8584
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    );
};

export default Header