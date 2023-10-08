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
        <div
          className="movie-details_container"
          style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/w500${movie.poster_path}')`,
          }}
        >
          <div className="movie-details_shadow">
            <div className="movie-details_info">
              <img
                className="movie-details_img"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={`${movie.title} poster`}
              />
              <h2>{movie.title}</h2>
              <p
                style={{
                  fontSize: movie.overview.length > 250 ? "0.75rem" : "0.9rem",
                }}
              >
                {movie.overview}
              </p>
              <p>Popularity: {movie.popularity}</p>
              <p>Release date: {movie.release_date}</p>
              <label htmlFor="checkbox">
                <div className="label">
                  <input
                    type="checkbox"
                    id="checkbox"
                    checked={!!isMovieInRedux}
                    onInput={() =>
                      isMovieInRedux
                        ? handleRemoveFromRedux(movie)
                        : handleAddToRedux(movie)
                    }
                  />
                  <div className="heart">
                    <svg viewBox="0 0 544.582 544.582">
                      <path
                        d="M448.069,57.839c-72.675-23.562-150.781,15.759-175.721,87.898C247.41,73.522,169.303,34.277,96.628,57.839
		C23.111,81.784-16.975,160.885,6.894,234.708c22.95,70.38,235.773,258.876,263.006,258.876
		c27.234,0,244.801-188.267,267.751-258.876C561.595,160.732,521.509,81.631,448.069,57.839z"
                      />
                    </svg>
                    <svg viewBox="0 0 544.582 544.582">
                      <path
                        d="M448.069,57.839c-72.675-23.562-150.781,15.759-175.721,87.898C247.41,73.522,169.303,34.277,96.628,57.839
		C23.111,81.784-16.975,160.885,6.894,234.708c22.95,70.38,235.773,258.876,263.006,258.876
		c27.234,0,244.801-188.267,267.751-258.876C561.595,160.732,521.509,81.631,448.069,57.839z"
                      />
                    </svg>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
