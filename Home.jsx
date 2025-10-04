import React from 'react';
import MovieCarousel from '../Components/MovieCursoule';
import MovieItem from '../Components/MovieItem';
import TvShows from '../Components/TvShows';
import Theater from '../Components/Theater';

const Home = () => {
  return (
    <div>
      <MovieCarousel />
      <MovieItem />
      <TvShows />
      <Theater />
    </div>
  );
};

export default Home;
