import React, { useState } from "react";
import { useEffect } from "react";
import MovieCard from './MovieCard1';
import './App.css'

const API_URL = 'http://www.omdbapi.com/?apikey=a81c514f';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');

    const searchMovies = async (title) => {
        if (title.trim() !== "") {
            const response = await fetch(`${API_URL}&s=${title}`);
            const data = await response.json();
            setMovies(data.Search);
        }
    };

    useEffect(() => {
        searchMovies('Avengers');
    }, []);


    return (
        <div className="app">
          <h1>MovieSpace</h1>
    
          <div className="search">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for movies"
            />
            <img
              src='https://gist.githubusercontent.com/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg'
              alt="search"
              onClick={() => searchMovies(search)}
            />
          </div>
    
          {movies?.length > 0 ? (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </div>
          ) : (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )}
        </div>
      );
    };
    
    export default App;