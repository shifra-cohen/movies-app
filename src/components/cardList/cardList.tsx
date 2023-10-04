import "./cardList.css";
import { movie } from "../../constants/constants";
import MovieCard from "../movieCard/movieCard";

interface cardListProps {
  movies: movie[];
  onMovieClick: (movie: movie) => void;
}

const CardList = ({ movies, onMovieClick }: cardListProps) => {
  return (
    <div className="list">
      {movies.map((movie: movie) => (
        <MovieCard key={movie.id} movie={movie} onClick={onMovieClick} />
      ))}
    </div>
  );
};

export default CardList;
