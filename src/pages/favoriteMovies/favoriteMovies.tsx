import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { movie } from "../../constants/constants";
import CardList from "../../components/cardList/cardList";
import "../pagesStyle.css";

interface favoriteMoviesProps {
  onMovieClick: (movie: movie) => void;
}

const FavoriteMovies = ({ onMovieClick }: favoriteMoviesProps) => {
  const favoriteMovies = useSelector((state: RootState) => state.movie.movies);

  return (
    <div className="listContainer">
      <h2 className="header">My favorites</h2>
      <CardList movies={favoriteMovies} onMovieClick={onMovieClick} />
    </div>
  );
};

export default FavoriteMovies;
