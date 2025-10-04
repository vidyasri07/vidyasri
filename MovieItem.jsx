import React, { useState } from "react";
import { Container, Row, Col, Card, Nav, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function MovieItem() {
  const moviesByLang = {
    ENGLISH: [
      { title: "HOBBIT", image: "/images/hobbit.jpg" },
      { title: "BACK TO THE FUTURE", image: "/images/backtothefurther.jpg" },
      { title: "JURASSIC PARK", image: "/images/jurrassicpark.jpg" },
      { title: "PULSE", image: "/images/pulse.jpg" },
      { title: "SICARIO", image: "/images/sicario.jpg" },
      { title: "STAR WARS", image: "/images/starwar.jpg" },
    ],
    HINDI: [
      { title: "12TH FAIL", image: "/images/12th fail.jpg" },
      { title: "CHHAAVA", image: "/images/chhava.jpg" },
      { title: "JAAT", image: "/images/jaat.jpg" },
      { title: "THE DIPLOMAT", image: "/images/thediplomat.jpg" },
    ],
    TELUGU: [
      { title: "COURT", image: "/images/court.jpg" },
      { title: "PUSHPA2", image: "/images/pushpa.jpg" },
      { title: "KALKI", image: "/images/kalki.jpg" },
      { title: "SALAAR", image: "/images/salaar.jpg" },
    ],
    TAMIL: [
      { title: "INDIAN2", image: "/images/indian.jpg" },
      { title: "GOOD BAD UGLY", image: "/images/goodbad.jpg" },
      { title: "DRAGON", image: "/images/dragon.jpg" },
      { title: "MAHARAJA", image: "/images/maharaja.jpg" },
    ],
    MALAYALAM: [
      { title: "MANJUMMUL BOYS", image: "/images/manjumal.jpg" },
      { title: "2018", image: "/images/2018.jpg" },
      { title: "PONMAN", image: "/images/ponman.jpg" },
      { title: "REKHA CHITHRAM", image: "/images/rekhachithram.jpg" },
    ],
  };

  const [activeLang, setActiveLang] = useState("ENGLISH");

  const chunkArray = (array, size) => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };

  const movieGroups = chunkArray(moviesByLang[activeLang] || [], 6);

  const styles = {
    bgDarkBlue: { backgroundColor: '#0d1b2a', padding: "2rem 0" },
    card: { backgroundColor:'#0d1b2a', border: "none" },
    title: { color: "#fff", fontSize: "0.9rem", fontWeight: "500" },
    viewAll: { color: "#fff", cursor: "pointer", fontWeight: "500" },
    navLink: (active) => ({
      color: active ? "#0d6efd" : "#fff",
      fontWeight: active ? "700" : "500",
      cursor: "pointer",
      borderBottom: "none", // remove underline
      borderRadius: 0,
    }),
    nav: { borderBottom: "none" }, // remove bottom border of Nav
  };

  return (
    <div style={styles.bgDarkBlue}>
      <Container fluid>
        <div className="d-flex justify-content-between align-items-center mt-2">
          <h2 style={{ color: "#fff" }}>MOVIES</h2>
          <span style={styles.viewAll}>VIEW ALL &gt;</span>
        </div>

        {/* Language Tabs */}
        <Nav
          variant="tabs"
          activeKey={activeLang}
          onSelect={(selectedKey) => setActiveLang(selectedKey)}
          className="mb-3"
          style={styles.nav}
        >
          {Object.keys(moviesByLang).map((lang) => (
            <Nav.Item key={lang}>
              <Nav.Link style={styles.navLink(activeLang === lang)} eventKey={lang}>
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
                    <Link
                      to={`/movie/${encodeURIComponent(movie.title)}`}
                      state={{ movie }}
                      style={{ textDecoration: "none" }}
                    >
                      <Card style={styles.card}>
                        <Card.Img variant="top" src={movie.image} alt={`${movie.title} poster`} />
                        <Card.Body className="p-0 mt-2 text-center">
                          <Card.Title style={styles.title}>{movie.title}</Card.Title>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </div>
  );
}

export default MovieItem;
