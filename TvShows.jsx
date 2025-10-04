import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap";
import '../Styles/Common.css';

function TvShows() {
  const movies = [
    { title: 'BIG BOSS', image: '/images/bigg boss.jpg' },
    { title: 'KOFFEE WITH KARAN', image: '/images/koffeewithkaran.jpg' },
    { title: 'ISHMART JODI', image: '/images/ismartjodi.jpg' },
    { title: 'SHERLOCK', image: '/images/sherlock.jpg' },
    { title: 'DANCE+', image: '/images/dance.jpg' },
    { title: 'SUPERSINGER JUNIOR', image: '/images/supersinger_junior.png' },
    { title: 'BIG BOSS 2', image: '/images/bigg boss.jpg' },
    { title: 'KOFFEE WITH KARAN 2', image: '/images/koffeewithkaran.jpg' },
    { title: 'ISHMART 2', image: '/images/ismartjodi.jpg' },
    { title: 'SHERLOCK 2', image: '/images/sherlock.jpg' },
    { title: 'DANCE+ 2', image: '/images/dance.jpg' },
    { title: 'SUPERSINGER JUNIOR 2', image: '/images/supersinger_junior.png' },
  ];

  const chunkArray = (array, size) => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };

  const movieGroups = chunkArray(movies, 6);

  return (
    <div style={{ backgroundColor: '#0d1b2a' }} className="py-4 m-0"> 
      {/* 🔹 py-4 = padding top/bottom, m-0 removes margin (kills white line) */}
      <Container fluid>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="text-light">POPULAR TV SHOWS</h2>
          <span className="text-light view-all">VIEW ALL &gt;</span>
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
                  <Col
                    xs={6}
                    sm={4}
                    md={3}
                    lg={2}
                    key={movieIndex}
                    className="mb-4 d-flex justify-content-center"
                  >
                    <Card className="movie-card border-0 bg-transparent text-light">
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
  );
}

export default TvShows;
