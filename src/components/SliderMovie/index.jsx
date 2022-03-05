import React, { useEffect, useRef, useState } from "react";
import { Loading } from "../Loading";

import { API_KEY } from "../../api";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import "./styles.css";

import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";

function SliderMovie({ Type, Genre, GenreName }) {
  const [genreMovies, setGenreMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const userLanguage = navigator.language;

  useEffect(() => {
    getGenreMovies();
  }, []);

  const getGenreMovies = () => {
    api
      .get(
        `${Type}/${Genre}?api_key=${API_KEY}&language=${userLanguage}&page=1`
      )
      .then(({ data }) => setGenreMovies(data.results))
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  };

  const carousel = useRef();

  let scrollFinal = 0;

  const handleScrollLeft = () => {
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
    scrollFinal--;
    if (scrollFinal < 0) {
      carousel.current.scrollLeft =
        carousel.current.offsetWidth * genreMovies.length;
      scrollFinal = 3;
    }
  };

  const handleScrollRight = () => {
    carousel.current.scrollLeft += carousel.current.offsetWidth;
    scrollFinal++;

    if (scrollFinal == 4) {
      carousel.current.scrollLeft = 0;
      scrollFinal = 0;
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="slide-container">
          <h2 className="slider-genre-name" children={GenreName} />
          <ul className="slide-carousel" ref={carousel}>
            <button
              className="slide-button"
              style={{ left: 0 }}
              onClick={handleScrollLeft}
            >
              <MdOutlineNavigateBefore size="5rem" color="white" />
            </button>
            {genreMovies.map((movie) => {
              return (
                <li key={movie.id} className="slide-item">
                  <Link to={`/${Type}/${movie.id}`}>
                    <img
                      className="slide-img"
                      src={`https://www.themoviedb.org/t/p/w342${movie.poster_path}`}
                      alt={movie.title || movie.name}
                    />
                  </Link>
                </li>
              );
            })}
            <button
              className="slide-button"
              style={{ right: 0 }}
              onClick={handleScrollRight}
            >
              <MdOutlineNavigateNext size="5rem" color="white" />
            </button>
          </ul>
        </div>
      )}
    </>
  );
}

export { SliderMovie };
