import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Link } from "react-router-dom";

const Headline = () => {
    const [movies, setMovies] = useState ([]);

    useEffect (() => {
        const API_KEY = '8759416bf7a3df8c1be2975ba95ab538';

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
        <Carousel className="home-banner" autoPlay showThumbs={false} infiniteLoop>
          {movies.map(movie => (
            <div key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
                alt={movie.title}
                className="image-container"
              />
              <div className="content-wrapper">
              <p1>{movie.title}</p1>
              <p>{movie.overview}</p>
              <Link to={`/movie/${movie.id}`}> <button variant="primary">More Detail</button></Link>
              </div>
            </div>
          ))}
        </Carousel>
        
      );
    };
    
    export default Headline