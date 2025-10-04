import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, BrowserRouter, useLocation } from 'react-router-dom';
import LoginPage from './Authentication/Loginpage';
import Home from './Pages/Home';
import MovieItem from "./Components/MovieItem";
import MoviePage from "./Pages/MoviePage";
import TvShows from "./Components/TvShows";
import TvShowPage from "./Pages/TvShowsPage";
import Footer from "./Components/Footer";
import Header from './Components/Header';

function AppWrapper() {
  const location = useLocation();
  const hideHeaderPaths = ['/'];   // hide header on login
  const hideFooterPaths = ['/Home'];   // hide footer on login

  return (
    <>
      {!hideHeaderPaths.includes(location.pathname) && <Header />}

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<MovieItem />} />
        <Route path="/movie/:title" element={<MoviePage />} />
        <Route path="/tvshows" element={<TvShows />} />
        <Route path="/tvshow/:title" element={<TvShowPage />} />
      </Routes>

      {!hideFooterPaths.includes(location.pathname) && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}

export default App;
