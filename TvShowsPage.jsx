import React from 'react'
import { Container, Row, Col, Card, Nav,Navbar,Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Button, Badge } from "react-bootstrap";
import '../Styles/Common.css';



function TvShows() {
    const shows = [
        { title: 'BIG BOSS', image: '/images/bigg boss.jpg' },
        { title: 'KOFFEE WITH KARUN', image: '/images/koffewithkaran.jpg' },
        { title: 'ISHMART JODI', image: '/images/ismartjodi.jpg' },
        { title: 'SHERLOCK', image: '/images/sherlock.jpg' },
        { title: 'DANCE+', image: '/images/dance.jpg' },
        { title: 'SUPERSINGER JUNIOR', image: '/images/supersinger_junior.png' },
        { title: 'BIGBOSS', image: '/images/bigg boss.png' },
        { title: 'KOFFEE WITH KARUN', image: '/images/koffeewithkaran.jpg' },
        { title: 'ISHMART', image: '/images/ismartjodi.jpg' },
        { title: 'SHERLOCK', image: '/images/sherlock.jpg' },
        { title: 'DANCE+', image: '/images/dance.jpg' },
        { title: 'SUPERSINGER JUNIOR', image: '/supersinger_junior.png' },
    ];


    // Helper function to chunk the movies into groups for each carousel slide
    const chunkArray = (array, size) => {
        const chunkedArr = [];
        for (let i = 0; i < array.length; i += size) {
            chunkedArr.push(array.slice(i, i + size));
        }
        return chunkedArr;
    };


    // Group movies into rows of 6 cards each
    const movieGroups = chunkArray(shows, 6);
    const expand = "sm";
    return (
        <>
         <Navbar
        key={expand}
        expand={expand}
        className="bg-black w-100 position-fixed z-3"
        sticky="top"
    >
        <Container fluid>

            <Navbar.Brand href="#home" className="d-flex align-items-center">
                <span style={{ color: 'gold', fontSize: '24px', marginRight: '5px' }}>★</span>
                <span style={{ color: '#00AEEF', fontWeight: 'bold' }}>Star</span>
                <span style={{ color: '#F9A825', fontWeight: 'bold' }}>Flix</span>
            </Navbar.Brand>


            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end w-100">
                <Nav className="align-items-center">
                    <Nav.Link href="/home" className="fw-bold text-white me-3">HOME</Nav.Link>
                    <Nav.Link href="/movies" className="fw-bold text-white me-3">MOVIES</Nav.Link>
                    <Nav.Link href="/contact" className="fw-bold text-white me-3">TV SHOWS</Nav.Link>
                            <Nav.Link href="/Theater" className="fw-bold text-white me-3">NEW & POPULAR</Nav.Link>
                            <Dropdown align="end">
                                <Dropdown.Toggle
                                    as="a"
                                    id="profile-dropdown-toggle"
                                    className="nav-link p-0"
                                    style={{ cursor: 'pointer', backgroundColor: 'transparent', border: 'none' }}
                                >
                                    <img
                                        src="images/digit.logo.png"
                                        alt="Profile"
                                        style={{
                                            width: '35px',
                                            height: '35px',
                                            borderRadius: '50%',
                                            backgroundColor: '#fff',
                                            padding: '5px',
                                        }}
                                    />
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="bg-dark p-0" style={{ border: '1px solid #333', minWidth: '200px' }}>
                                    <Dropdown.Item
                                        href="#digitit"
                                        className="text-white py-3"
                                        style={{ backgroundColor: 'transparent', borderBottom: '1px solid #333' }}
                                        active={false}
                                    >
                                        <strong>DIGIT IT</strong>
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        href="#account"
                                        className="text-white py-3"
                                        style={{ backgroundColor: 'transparent', borderBottom: '1px solid #333' }}
                                        active={false}
                                    >
                                        <strong>ACCOUNT</strong>
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        href="#signout"
                                        className="text-white py-3"
                                        style={{ backgroundColor: 'transparent' }}
                                        active={false}
                                    >
                                        <strong className="d-flex align-items-center">
                                            <span className="me-2" style={{ fontSize: '1.2em' }}>⟲</span>
                                            SIGN OUT OF STARFLIX
                                        </strong>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                </Nav>
            </Navbar.Collapse>
            </Container>
     </Navbar>
        <div className="bg-black vh-100">
            <div className="movies-container bg-dark ">
                <Container fluid>
                    <div className="d-flex justify-content-between align-items-center mt-4">
                        <h2 className="text-white">POPULAR TV SHOWS</h2>
                        <span className="text-white view-all">VIEW ALL &gt;</span>
                    </div>


                    <Carousel
                        indicators={false}
                        nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}
                        prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}
                    >
                        {movieGroups.map((group, index) => (
                            <Carousel.Item key={index}>
                                <Row className="justify-content-center">
                                    {group.map((movie, movieIndex) => (
                                        <Col xs={6} sm={4} md={3} lg={2} key={movieIndex} className="mb-4 d-flex justify-content-center">
                                            <Card className="movie-card bg-dark text-white border-0">
                                                <Card.Img
                                                    variant="top"
                                                    src={movie.image}
                                                    alt={`${movie.title} poster`}
                                                />
                                                <Card.Body className="p-0 mt-2 text-center">
                                                    <Card.Title className="movie-title">{movie.title}</Card.Title>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Container>
            </div>
        </div>

        </>

    )
}



export default TvShows