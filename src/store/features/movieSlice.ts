import { movie } from "../../constants/constants";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MovieState {
  movies: movie[];
}

const initialState: MovieState = {
  movies: [],
};

export const MovieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addMovie: (state, action: PayloadAction<movie>) => {
      const existingMovie = state.movies.find(
        (movie) => movie.id === action.payload.id
      );

      if (!existingMovie) {
        state.movies.push(action.payload);
      }
    },
    removeMovie: (state, action: PayloadAction<movie>) => {
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload.id
      );
    },
  },
});

export const { addMovie, removeMovie } = MovieSlice.actions;
export default MovieSlice.reducer;
