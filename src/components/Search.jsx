import React, { useContext, useState } from 'react';
import './Search.css';
import { MovieForm } from './MovieForm';
import { MovieList } from './MovieList';
import { MovieContext } from './MovieContext';

export const Search = () => {
  // State for the movie search input and movie data
  const [title, setTitle] = useState('');
  // Use the useContext hook to access the shared movie data state
  const { movieData, setMovieData } = useContext(MovieContext);

  // Function to fetch movie data from the API
  const getMovieRequest = async () => {
    if (title.trim() !== '') {
      const url = `https://www.omdbapi.com/?apikey=d21d4aa1&s=${title}`;
      try {
        const response = await fetch(url);
        const responseJSON = await response.json();

        if (responseJSON.Search) {
          setMovieData(responseJSON.Search);
        } else {
          setMovieData([]);
        }
      } catch (error) {
        console.log('ERROR', error);
      }
    } else {
      setMovieData([]);
    }
  };

  function listClear() {
    setMovieData([]);
  }

  // Function to handle form submission
  const formHandler = (e) => {
    e.preventDefault();
    getMovieRequest();
  };

  // Render the Search component UI
  return (
    <div className='form_container'>
      <MovieForm
        formHandler={formHandler}
        title={title}
        setTitle={setTitle}
        listClear={listClear}
      />
      <MovieList movieData={movieData} />
    </div>
  );
};
