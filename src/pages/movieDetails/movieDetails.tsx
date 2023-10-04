import { movie } from "../../constants/constants";
import "../pagesStyle.css";
import { useDispatch, useSelector } from "react-redux";
import { addMovie } from "../../store/features/movieSlice";
import { RootState } from "../../store/store";
import { removeMovie } from "../../store/features/movieSlice";

interface movieDetails {
  movie: movie | undefined;
}

const MovieDetails = ({ movie }: movieDetails) => {
  const dispatch = useDispatch();

  const handleAddToRedux = (movie: movie) => {
    dispatch(addMovie(movie));
  };

  const handleRemoveFromRedux = (movie: movie) => {
    dispatch(removeMovie(movie));
  };

  const movies = useSelector((state: RootState) => state.movie.movies);

  const isMovieInRedux = movies.find((favorite) => favorite.id === movie?.id);

  return (
    <>
      {movie && (
        <div className="movie-details_container">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={`${movie.title} Poster`}
            className="movie-details_img"
          />
          <div className="movie-details_info">
            <h2>{movie.title}</h2>
            <p>Original Title: {movie.original_title}</p>
            <p>Overview: {movie.overview}</p>
            <p>Popularity: {movie.popularity}</p>
            <button
              className="save-btn"
              onClick={() =>
                isMovieInRedux
                  ? handleRemoveFromRedux(movie)
                  : handleAddToRedux(movie)
              }
            >
              {isMovieInRedux ? "remove from " : "add to "} favorites
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
