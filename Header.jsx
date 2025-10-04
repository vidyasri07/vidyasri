import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
    const expand = 'sm';
    return (
        <div
            className="position-fixed w-100"
            style={{ zIndex: 1050 }}   // Bootstrap modal uses 1050, so this is safe
        >

            <Navbar
                key={expand}
                expand={expand}
                className="bg-dark navbar-dark"
                sticky="top"
            >
                <Container fluid>
                    {/* Brand Logo */}

                    <Navbar.Brand src="images/starflix.png"
                        alt="Profile" className="d-flex align-items-center">
                        <span style={{ color: 'gold', fontSize: '24px', marginRight: '5px' }}>★</span>
                        <span style={{ color: '#00AEEF', fontWeight: 'bold' }}>Star</span>
                        <span style={{ color: '#F9A825', fontWeight: 'bold' }}>Flix</span>
                    </Navbar.Brand>

                    {/* Toggle for mobile */}

                    <Navbar.Toggle aria-controls={`offcanvasNavbar - expand - ${expand}`} />

                    {/* Offcanvas for smaller screens */}

                    <Navbar.Offcanvas>
                        id={`offcanvasNavbar - expand - ${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel - expand - ${expand}`}
                        placement="end"

                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel - expand - ${expand}`}>
                                Menu
                            </Offcanvas.Title>
                        </Offcanvas.Header>

                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                              <Nav.Link as={Link} to="/" className="fw-bold text-white">HOME</Nav.Link>
                              <Nav.Link as={Link} to="/movies" className="fw-bold text-white">MOVIES</Nav.Link>
                              <Nav.Link as={Link} to="/tvshows" className="fw-bold text-white">TV SHOWS</Nav.Link>
                              <Nav.Link as={Link} to="/popular" className="fw-bold text-white">NEW & POPULAR</Nav.Link>


                                {/* Profile Icon */}

                                <Nav.Link className="ms-3">
                                    <img
                                        src="images/digit_icon.png"
                                        alt="Profile"
                                        style={{
                                            width: '35px',
                                            height: '35px',
                                            borderRadius: '50%',
                                            backgroundColor: '#fff',
                                            padding: '5px',
                                        }}
                                    />
                                </Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar >


        </div >
    )
}

export default Header
