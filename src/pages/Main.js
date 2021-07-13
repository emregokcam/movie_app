import React, { useState, useEffect } from "react";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
// const IMG_API = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const Main = () => {
  const [movies, setMovies] = useState([]);
  console.log("movies", movies);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => setMovies(res.results));
  };

  if (searchTerm) {
    getMovies(SEARCH_API + searchTerm);
  }

  return (
    <>
      <form>
        <input
          type="search-input"
          className="search-input"
          placeholder="Search a movie..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <div className="movie-container">
        {movies.map((movie) => (
          <p>{movie.original_title}</p>
        ))}
      </div>
    </>
  );
};

export default Main;
