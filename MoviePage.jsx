import React, { useState } from 'react'
import { Container, Row, Col, Card, Nav, Carousel,Navbar,Dropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../Styles/Common.css'
import { link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
// import MovieItem from "../Components/MovieItem";



function MovieItem() {
    // Movies by language
    const moviesByLang = {
        ENGLISH: [
            { title: 'HOBBIT', image: '/images/hobbit.jpg', link: '../Pages/Movies.jsx' },
            { title: 'BACK TO THE FUTURE', image: '/images/backtothefurther.jpg', link: 'https://youtu.be/77vRyWNqZjM' },
            { title: 'JURASSIC PARK', image: '/images/jurrassicpark.jpg' },
            { title: 'PULSE', image: '/images/pulse.jpg' },
            { title: 'SICARIO', image: '/images/sicario.jpg' },
            { title: 'STAR WARS', image: '/images/starwar.jpg' },

            { title: 'HOBBIT', image: '/images/hobbit.jpg' },
            { title: 'BACK TO THE FUTURE', image: '/images/backtothefuture.jpg' },
            { title: 'JURASSIC PARK', image: '/images/jurrassicpark.jpg' },
            { title: 'PULSE', image: '/images/pulse.jpg' },
            { title: 'SICARIO', image: '/images/sicario.jpg' },
            { title: 'STAR WARS', image: '/images/starwar.jpg' }
        ],
        HINDI: [
            { title: '12TH FAIL', image: '/images/12th fail.jpg' },
            { title: 'CHHAAVA', image: '/images/chhava.jpg' },
            { title: 'JAAT', image: '/images/jaat.jpg' },
            { title: 'THE DIPLOMAT', image: '/images/thediplomat.jpg' },

        ],
        TELUGU: [
            { title: 'COURT', image: '/images/court.jpg' },
            { title: 'PUSHPA2', image: '/images/pushpa.jpg' },
            { title: 'KALKI', image: '/images/kalki.jpg' },
            { title: 'SALAAR', image: '/images/salaar.jpg' }
        ],
        TAMIL: [
            { title: 'INDIAN2', image: '/images/indian.jpg' },
            { title: 'GOOD BAD UGLY', image: '/images/goodbad.jpg' },
            { title: 'DRAGON', image: '/images/dragon.jpg' },
            { title: 'MAHARAJA', image: '/images/maharaja.jpg' }
        ],
        MALAYALAM: [
            { title: 'MANJUMMUL BOYS', image: '/images/manjumal.jpg' },
            { title: '2018', image: '/images/2018.jpg' },
            { title: 'PONMAN', image: '/images/ponman.jpg' },
            { title: 'REKHA CHITHRAM', image: '/images/rekhachithram.jpg' }
        ]
    }

    // Active language tab
    const [activeLang, setActiveLang] = useState('ENGLISH')

    // Helper to chunk movies into groups of 6
    const chunkArray = (array, size) => {
        const chunkedArr = []
        for (let i = 0; i < array.length; i += size) {
            chunkedArr.push(array.slice(i, i + size))
        }
        return chunkedArr
    }
    const navigate = useNavigate();

    // Current movie groups
    const movieGroups = chunkArray(moviesByLang[activeLang] || [], 6)
    const expand = "sm";
    // const Footer = () => {
    //     const scrollToTop = () => {
    //         window.scrollTo({ top: 0, behavior: "smooth" });
    //     };

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
        
                <div className="bg-black py-4 vh-100">
                    <div className="movies-container bg-dark py-4">
                        <Container fluid>
                            <div className="d-flex justify-content-between align-items-center mt-2">
                                <h2 className="text-white">MOVIES</h2>
                                <span className="text-white view-all">VIEW ALL &gt;</span>
                            </div>

                            {/* Language Tabs */}
                            <Nav
                                variant="tabs"
                                activeKey={activeLang}
                                onSelect={(selectedKey) => setActiveLang(selectedKey)}
                                className="movie-langs mt-3"
                            >
                                {Object.keys(moviesByLang).map((lang) => (
                                    <Nav.Item key={lang}>
                                        <Nav.Link eventKey={lang} className="text-orange">
                                            {lang}
                                        </Nav.Link>
                                    </Nav.Item>
                                ))}
                            </Nav>

                            {/* Carousel */}
                            <Carousel
                                interval={null}
                                indicators={false}
                                nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}
                                prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}
                                className="mt-3"
                            >
                                {movieGroups.map((group, index) => (
                                    <Carousel.Item key={index}>
                                        <Row className="justify-content-center">
                                            {group.map((movie, movieIndex) => (

                                                <Col
                                                    xs={6}
                                                    sm={4}
                                                    md={3}
                                                    lg={2}
                                                    key={movieIndex}
                                                    className="mb-4 d-flex justify-content-center"
                                                >
                                                    <Card
                                                        className="movie-card bg-dark text-white border-0"
                                                        style={{ cursor: 'pointer' }}
                                                        onClick={() => navigate(`/movie/${movie.title}`, { state: { movie } })}
                                                    >
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
                {/* <footer
                    style={{
                        backgroundColor: "#0b1622", // dark blackish-blue background
                        color: "#ccc", // light grey text
                        padding: "15px 40px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: "14px",
                    }}
                >
                    <p style={{ margin: 0 }}>© 2025 StarFlix. All Rights Reserved.</p>
                    <button
                        onClick={scrollToTop}
                        style={{
                            background: "none",
                            border: "none",
                            color: "#ccc",
                            cursor: "pointer",
                            fontSize: "14px",
                        }}
                    >
                        Back to top ↑
                    </button>
                </footer> */}
            </>
        
        );
    }


    export default MovieItem;