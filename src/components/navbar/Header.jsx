import "./header.css";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { MdPhone } from "react-icons/md";
import config from "../../config";
import { useState } from "react";

const Header = () => {
    const [collapsed, setCollapsed] = useState(false);

    const handleToggle = () => {
        setCollapsed(!collapsed);
    };

    return (
        <>
            <header className="navbar-section">
                <Navbar
                    expand="lg"
                    fixed="top"
                    className={collapsed ? "collapsed-navbar" : ""}
                >
                    <Container>
                        <Navbar.Brand href="#">
                            <img src={config.logo} className="navbar-logo" alt="" />
                        </Navbar.Brand>
                        <Navbar.Toggle
                            aria-controls="navbarScroll"
                            onClick={handleToggle}
                        />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="ms-auto d-flex align-items-center nav-items"
                                navbarScroll
                            >
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
                                    <Button
                                        variant="border-0"
                                        className="nav-btn button btn-w-180"
                                    >
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

export default Header;
