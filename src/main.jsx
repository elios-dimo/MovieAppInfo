import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { MovieDetails } from './components/MovieDetails';
import { MovieProvider } from './components/MovieContext';

// Render the main application wrapped in the MovieProvider for context
ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <React.StrictMode>
      <MovieProvider>
        {/* Define the routes using react-router-dom */}
        <Routes>
          <Route path='/MovieAppInfo/' element={<App />} />
          {/* Render App component at the root route */}
          <Route path='/movie/:imdbID' element={<MovieDetails />} />
          {/* Render MovieDetails component at /movie/:imdbID route */}
        </Routes>
      </MovieProvider>
    </React.StrictMode>
  </Router>
);
