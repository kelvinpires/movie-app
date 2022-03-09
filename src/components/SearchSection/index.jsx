import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { API_KEY } from "../../api";
import { GlobalContext } from "../../context/GlobalState";
import { api } from "../../services/api";

import "./styles.css";

function SearchSection() {
  const { search, setSearch } = useContext(GlobalContext);
  const [moviesSearch, setMoviesSearch] = useState([]);

  const userLanguage = navigator.language;

  useEffect(() => {
    getSearch();
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
      <ul className="movies-group">
        {moviesSearch.map((movie) => {
          return (
            <>
              {movie.poster_path ? (
                <li className="item" key={movie.id}>
                  <Link
                    onClick={() => setSearch("")}
                    to={`/${movie.media_type}/${movie.id}`}
                  >
                    <img
                      className="item-img"
                      src={`https://www.themoviedb.org/t/p/w342${movie.poster_path}`}
                      alt={movie.title || movie.name}
                    />
                  </Link>
                </li>
              ) : (
                ""
              )}
            </>
          );
        })}
      </ul>
    </section>
  );
}

export { SearchSection };
