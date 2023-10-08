import React, { useState, useEffect } from "react";
import axios from "axios";
import { TMDB_API_BASE_URL, API_KEY } from "../../utils/config";
import "../pagesStyle.css";
import CardList from "../../components/cardList/cardList";
import { movie } from "../../constants/constants";

interface popularMoviesProps {
  onMovieClick: (movie: movie) => void;
}

const PopularMovies = ({ onMovieClick }: popularMoviesProps) => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchPopularMovies = async (page: number) => {
      try {
        const response = await axios.get(
          `${TMDB_API_BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`
        );
        setPopularMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    };

    fetchPopularMovies(currentPage);
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="listContainer">
      <h2 className="header">Popular Movies</h2>
      <CardList movies={popularMovies} onMovieClick={onMovieClick} />
      <div className="pagination_footer">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={handleNextPage}>Next</button>
      </div>
    </div>
  );
};

export default PopularMovies;
