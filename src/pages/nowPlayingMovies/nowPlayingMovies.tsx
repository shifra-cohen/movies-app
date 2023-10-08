import React, { useState, useEffect } from "react";
import axios from "axios";
import { movie } from "../../constants/constants";
import { TMDB_API_BASE_URL, API_KEY } from "../../utils/config";
import "../pagesStyle.css";
import CardList from "../../components/cardList/cardList";

interface nowPlayingMoviesProps {
  onMovieClick: (movie: movie) => void;
}

const NowPlayingMovies = ({ onMovieClick }: nowPlayingMoviesProps) => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchNowPlayingMovies = async (page: number) => {
      try {
        const response = await axios.get(
          `${TMDB_API_BASE_URL}/movie/now_playing?api_key=${API_KEY}&page=${page}`
        );
        setNowPlayingMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching now playing movies:", error);
      }
    };

    fetchNowPlayingMovies(currentPage);
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
      <h2 className="header">Now playing</h2>
      <CardList movies={nowPlayingMovies} onMovieClick={onMovieClick} />
      <div className="pagination_footer">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={handleNextPage}>Next</button>
      </div>
    </div>
  );
};

export default NowPlayingMovies;
