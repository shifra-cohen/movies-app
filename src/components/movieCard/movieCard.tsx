import { movie } from "../../constants/constants";
import "./movieCard.css";

interface movieCard {
  movie: movie;
  onClick: (movie: movie) => void;
}

const MovieCard = ({ movie, onClick }: movieCard) => {
  return (
    <div className="movieCard">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={`${movie.title} Poster`}
        onClick={() => onClick(movie)}
      />
      {movie.title}
    </div>
  );
};

export default MovieCard;
