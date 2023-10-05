import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const API_KEY = '8759416bf7a3df8c1be2975ba95ab538'; // Ganti dengan API key Anda

    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="movie-list">
      <h1>All Movies</h1>
      <div className="movie-grid">
        {movies.map(movie => (
          <div key={movie.id} className="movie-card">
            <Link to={`/movie/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
              />
              <h2>{movie.title}</h2>
              <p>{movie.overview}</p>
            </Link>
          </div>
        ))}
        <Link to={`/`} className='link-back'> <button>Back</button></Link>
      </div>
    </div>
  );
};

export default AllMovies;
