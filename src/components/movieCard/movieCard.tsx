import { movie } from "../../constants/constants";
import "./movieCard.css";

interface movieCard {
  movie: movie;
  onClick: (movie: movie) => void;
}

const MovieCard = ({ movie, onClick }: movieCard) => {
  return (
    <div className="flip flip-vertical" onClick={() => onClick(movie)}>
      <div
        className="front"
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/w500${movie.poster_path}')`,
        }}
      ></div>
      <div
        className="back"
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/w500${movie.backdrop_path}')`,
        }}
      >
        <div className="back-info">
          <h2
            style={{
              fontSize: movie.title.length > 20 ? "1.1rem" : "1.3em",
            }}
          >
            {movie.title}
          </h2>
          <p>{`(${movie.release_date.slice(0, 4)})`}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
