import React, { useEffect, useRef, useState } from "react";

import { getImage, API_KEY } from "../../api";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";

import { Link } from "react-router-dom";
import { api } from "../../services/api";
import "./styles.css";

function HeaderBanner() {
  const [moviesTrendings, setMoviesTrendings] = useState([]);
  const userLang = navigator.language;
  let scrollFinal = 0;

  const getMoviesTrendings = () => {
    api
      .get(`trending/all/day?api_key=${API_KEY}&language=${userLang}`)
      .then(({ data }) => {
        setMoviesTrendings(data.results.slice(0, 4));
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  useEffect(() => {
    getMoviesTrendings();
  }, []);

  const carousel = useRef();

  const handleScrollLeft = () => {
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
    scrollFinal--;
    if (scrollFinal < 0) {
      carousel.current.scrollLeft =
        carousel.current.offsetWidth * moviesTrendings.length;
      scrollFinal = moviesTrendings.length - 1;
    }
  };

  const handleScrollRight = () => {
    carousel.current.scrollLeft += carousel.current.offsetWidth;
    scrollFinal++;

    if (scrollFinal == moviesTrendings.length) {
      carousel.current.scrollLeft = 0;
      scrollFinal = 0;
    }
  };

  return (
    <>
      <div
        className="handle-slide"
        style={{ left: ".1rem" }}
        onClick={handleScrollLeft}
      >
        <MdOutlineNavigateBefore size="5rem" color="#f03a47" />
      </div>
      <div className="banner-container" ref={carousel}>
        <ul className="banner-carousel">
          {moviesTrendings.map((movie) => {
            const movieDesc =
              movie.overview.length > 250
                ? movie.overview.slice(0, 250) + "..."
                : movie.overview;
            return (
              <li className="banner-slider" key={movie.id}>
                <div className="slider-content">
                  <Link to={`/${movie.media_type}/${movie.id}`}>
                    <h1 className="slider-content-title">
                      {movie.title || movie.name}
                    </h1>
                  </Link>
                  <p className="slider-content-description">{movieDesc}</p>
                  <Link
                    className="button-more"
                    to={`/${movie.media_type}/${movie.id}`}
                  >
                    Saiba mais
                  </Link>
                </div>
                <Link to={`/${movie.media_type}/${movie.id}`}>
                  <img
                    className="slider-img"
                    src={getImage(movie.backdrop_path)}
                    alt={movie.title || movie.name}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className="handle-slide"
        style={{ right: ".1rem" }}
        onClick={handleScrollRight}
      >
        <MdOutlineNavigateNext size="5rem" color="#f03a47" />
      </div>
    </>
  );
}

export { HeaderBanner };
