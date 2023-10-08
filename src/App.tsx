import { useState } from "react";
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
      <div className="favorites" onClick={() => setCurrentPage("favorites")}>
        <svg viewBox="0 0 544.582 544.582">
          <path
            d="M448.069,57.839c-72.675-23.562-150.781,15.759-175.721,87.898C247.41,73.522,169.303,34.277,96.628,57.839
		C23.111,81.784-16.975,160.885,6.894,234.708c22.95,70.38,235.773,258.876,263.006,258.876
		c27.234,0,244.801-188.267,267.751-258.876C561.595,160.732,521.509,81.631,448.069,57.839z"
          />
        </svg>
      </div>
      <button
        className="button popular_btn"
        onClick={() => setCurrentPage("popular")}
      >
        <span>popular</span>
      </button>
      <button
        className="button now-playing_btn"
        onClick={() => setCurrentPage("now_playing")}
      >
        <span>now playing</span>
      </button>
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
