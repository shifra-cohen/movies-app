import React, { useState } from "react";
import "./App.css";
import PopularMovies from "./pages/popularMovies/popularMovies";
import FavoriteMovies from "./pages/favoriteMovies/favoriteMovies";
import NowPlayingMovies from "./pages/nowPlayingMovies/nowPlayingMovies";
import { movie } from "./constants/constants";
import MovieDetails from "./pages/movieDetails/movieDetails";

function App() {
  const [currentPage, setCurrentPage] = useState("popular");
  const [chosenMovie, setChosenMovie] = useState<movie>();

  const onMovieClick = (movie: movie) => {
    setChosenMovie(movie);
    chosenMovie && setCurrentPage("details");
  };

  return (
    <div className="App">
      <div className="buttons">
        <button onClick={() => setCurrentPage("favorites")}>
          <span>favorites</span>
        </button>
        <button onClick={() => setCurrentPage("popular")}>
          <span>popular</span>
        </button>
        <button onClick={() => setCurrentPage("now_playing")}>
          <span>now playing</span>
        </button>
      </div>
      {currentPage === "popular" ? (
        <PopularMovies onMovieClick={onMovieClick} />
      ) : currentPage === "now_playing" ? (
        <NowPlayingMovies onMovieClick={onMovieClick} />
      ) : currentPage === "favorites" ? (
        <FavoriteMovies onMovieClick={onMovieClick} />
      ) : (
        <MovieDetails movie={chosenMovie} />
      )}
    </div>
  );
}

export default App;
