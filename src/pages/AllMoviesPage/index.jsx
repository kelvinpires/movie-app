import React, { useEffect, useState } from "react";
import { API_KEY, getImage } from "../../api";
import { api } from "../../services/api";
import { Loading } from "../../components/Loading";

import { Link } from "react-router-dom";
import "../../components/SearchSection/styles.css";

import "./styles.css";

export const AllMoviesPage = ({ type }) => {
  const [loading, setLoading] = useState(true);
  const [genres, setGenres] = useState([]);
  const [genreActive, setGenreActive] = useState([]);
  const [genreActiveBtn, setGenreActiveBtn] = useState("");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const genreRefact = genreActiveBtn.toString();
  const userLang = navigator.language;

  useEffect(() => {
    api
      .get(`genre/${type}/list?api_key=${API_KEY}&language=pt-BR`)
      .then(({ data }) => setGenres(data.genres))
      .finally(() => setLoading(false));
  }, [type]);

  useEffect(() => {
    api
      .get(
        `discover/${type}?api_key=${API_KEY}&language=${userLang}&region=${userLang.slice(
          3
        )}&sort_by=popularity.desc&include_adult=false&page=${page}&with_genres=${genreRefact}&with_watch_monetization_types=flatrate`
      )
      .then(({ data }) => {
        const moviesId = movies.map((movie) => movie.id);
        const moviesFiltered = data.results.filter(
          (movie) => !moviesId.includes(movie.id)
        );

        setMovies((prev) => [...prev, ...moviesFiltered]);
      });
  }, [page]);

  useEffect(() => {
    api
      .get(
        `discover/${type}?api_key=${API_KEY}&language=${userLang}&region=${userLang.slice(
          3
        )}&sort_by=popularity.desc&include_adult=false&page=1&with_genres=${genreRefact}&with_watch_monetization_types=flatrate`
      )
      .then(({ data }) => {
        // const moviesId = movies.map((movie) => movie.id);
        // const moviesFiltered = data.results.filter(
        //   (movie) => !moviesId.includes(movie.id)
        // );

        setMovies(data.results);
      });
  }, [genreActiveBtn || type]);

  const handleLoad = () => {
    setPage(page + 1);
  };

  const handleGenre = (e, genreState) => {
    e.preventDefault();
    const genresAct = genreState.map((genre) =>
      genre.toLocaleString().replace(".", "")
    );
    setGenreActiveBtn(genresAct);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section
          className="search-container"
          style={{
            padding: "2rem 0",
            backgroundColor: "#030b17",
          }}
        >
          <div className="genres-container">
            {genres.map((genre) => (
              <a
                className="genre-link"
                key={genre.id}
                onClick={(e) => {
                  e.preventDefault();
                  e.target.classList.toggle("active");

                  if (e.target.classList.contains("active")) {
                    setGenreActive((prev) => [...prev, genre.id]);
                  }
                  if (genreActive.includes(genre.id)) {
                    let index = genreActive.indexOf(genre.id);
                    genreActive.splice(index, 1);
                    setGenreActive((prev) => [...prev]);
                  }
                  if (genreActive == []) {
                    setGenreActive("");
                  }
                }}
                href={`/${genre.id}`}
                children={genre.name}
              />
            ))}
          </div>
          <div className="genre-search-container">
            <a
              className="genre-search-item"
              onClick={(e) => handleGenre(e, genreActive)}
              children="Procurar"
            />
          </div>

          <div
            className="movies-group"
            style={{
              display: "flex",
              justifyContent: "center",
              margin: 0,
            }}
          >
            {movies.map((movie) => (
              <div
                className="item"
                style={{ width: "18rem", height: "28rem" }}
                key={movie.id}
              >
                <Link to={`/${type}/${movie.id}`}>
                  <img
                    className="item-img"
                    src={getImage(movie.poster_path)}
                    alt={movie.title || movie.name}
                  />
                </Link>
              </div>
            ))}
            <div className="button-container">
              <button
                className="load-button"
                onClick={handleLoad}
                children="Carregar mais"
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
};
