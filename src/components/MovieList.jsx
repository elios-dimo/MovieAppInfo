import React from 'react';
import { Link } from 'react-router-dom';

// MovieList component that renders the list of movies
export const MovieList = ({ movieData }) => {
  return (
    <div>
      {movieData.length > 0 && (
        <ul>
          {/* Render each movie as a list item and call onMovieClick when clicked */}
          {movieData.map((movie) => (
            <li key={movie.imdbID}>
              {/* Use Link to navigate to the MovieDetails page with the movie imdbID as the URL parameter */}
              <Link
                to={`/movie/${movie.imdbID}`}
                className='list_title movie_list'
              >
                {movie.Title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
