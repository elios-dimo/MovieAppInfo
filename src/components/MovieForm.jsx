import React from 'react';

// MovieForm component that renders the search form
export const MovieForm = ({ formHandler, title, setTitle, listClear }) => {
  return (
    <form onSubmit={formHandler} className='movie_form'>
      <label htmlFor='searchbar' onClick={listClear}>
        <h1>MOVIE FRIEND</h1>
      </label>
      <input
        type='text'
        placeholder='Enter a movie name.'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>SEARCH</button>
    </form>
  );
};
