import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { API_KEY, getImage } from "../../api";
import { api } from "../../services/api";

import "./styles.css";

function SearchSection({ search, setSearch }) {
  const [moviesSearch, setMoviesSearch] = useState([]);

  const userLanguage = navigator.language;

  useEffect(() => {
    setTimeout(() => {
      getSearch();
    }, 1000);
  }, [search]);

  const getSearch = () => {
    api
      .get(
        `search/multi?api_key=${API_KEY}&language=${userLanguage}&query=${search}&page=1&include_adult=false`
      )
      .then(({ data }) => setMoviesSearch(data.results));
  };

  return (
    <section className="search-container">
      <h1 className="search-title">Resultados da busca: "{search}"</h1>
      <div className="movies-group">
        {moviesSearch.map((movie) => {
          return (
            <>
              {movie.poster_path ? (
                <div className="item">
                  <Link
                    onClick={() => setSearch("")}
                    to={`/${movie.media_type}/${movie.id}`}
                    key={movie.id}
                  >
                    <img
                      className="item-img"
                      src={getImage(movie.poster_path)}
                      alt={movie.title || movie.name}
                    />
                  </Link>
                </div>
              ) : (
                ""
              )}
            </>
          );
        })}
      </div>
    </section>
  );
}

export { SearchSection };
