import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './MovieList.css';
import Headline from './Headline';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Efek untuk mengambil daftar film populer saat komponen pertama kali dimuat
  useEffect(() => {
    const API_KEY = '8759416bf7a3df8c1be2975ba95ab538';

    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []); // Efek ini akan berjalan hanya saat komponen pertama kali dimuat

  // Efek untuk mengambil daftar film berdasarkan pencarian
  useEffect(() => {
    const API_KEY = '8759416bf7a3df8c1be2975ba95ab538';

    // Cek apakah pencarian kosong, jika ya, tampilkan daftar film populer
    if (searchTerm === '') {
      axios
        .get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
        .then(response => {
          setMovies(response.data.results);
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      // Jika ada kata kunci pencarian, ambil daftar film berdasarkan kata kunci
      axios
        .get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}`)
        .then(response => {
          setMovies(response.data.results);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [searchTerm]);

  const handleSearchChange = e => {
    setSearchTerm(e.target.value);
  };

  return (

    <div className="movie-list">
      <h1>MovieList</h1>
      <input className='search-input'
        type="text"
        placeholder="Search for a movie"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <Headline/>
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
        <Link to={'/AllMovies'}className='link-allmovies'> See All Movie </Link>
        <Link to={'/Login'} className='link-login'><button type='primary'>Login</button></Link>
        <Link to={'/Register'} className='link-register'><button type='primary'>Register</button></Link>
      </div>
    </div>
  );
};

export default MovieList;
