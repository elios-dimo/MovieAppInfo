import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { MovieContext } from './MovieContext';

// MovieDetails component that fetches and displays movie details
export const MovieDetails = () => {
  // Get the imdbID from the URL params using the useParams hook
  const { imdbID } = useParams();
  // State to store the movie details, instead of context I could use this aswell
  // const [movieDetails, setMovieDetails] = useState(null);

  const { movieDetails, setMovieDetails } = useContext(MovieContext);
  useEffect(() => {
    const fetchMovieDetails = async () => {
      const url = `https://www.omdbapi.com/?apikey=d21d4aa1&i=${imdbID}&plot=full`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.log('ERROR', error);
      }
    };

    fetchMovieDetails();
  }, [imdbID]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  // Render the MovieDetails component UI
  return (
    <div>
      {movieDetails ? (
        <>
          <div className='details'>
            <h1>{movieDetails.Title}</h1>
            <p>Year: {movieDetails.Year}</p>
            <p>Director: {movieDetails.Director}</p>
            <img src={movieDetails.Poster} alt={movieDetails.Title} />
            <p className='plot'>{movieDetails.Plot}</p>
            {/* Add a Link back to the MovieList page */}
            <Link to='/MovieAppInfo'>
              <button className='backbut'>Back to Movie List</button>
            </Link>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
