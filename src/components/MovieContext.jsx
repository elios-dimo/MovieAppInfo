import React, { createContext, useState } from 'react';

// Create a new context for movie data
export const MovieContext = createContext();

// Create a provider component to wrap the app and manage the movie data state
export const MovieProvider = ({ children }) => {
  const [movieData, setMovieData] = useState([]);
  const [movieDetails, setMovieDetails] = useState(null);

  return (
    <MovieContext.Provider
      value={{ movieData, setMovieData, movieDetails, setMovieDetails }}
    >
      {children}
    </MovieContext.Provider>
  );
};
