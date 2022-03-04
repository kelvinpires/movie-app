import React, { useRef, useEffect } from "react";

import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";

import { Link } from "react-router-dom";

export function SlideSimilar({ type, recommendationsContent }) {
  let scrollFinal = 0;

  useEffect(() => {
    scrollFinal = 4;
    carousel.current.scrollLeft = 0;
  }, [recommendationsContent]);

  const carousel = useRef();

  const contentType = type == "movie" ? "Filmes" : "Séries";

  const handleScrollLeft = () => {
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
    scrollFinal--;
    if (scrollFinal <= 0) {
      carousel.current.scrollLeft =
        carousel.current.offsetWidth * recommendationsContent.length;
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
    <div className="slide-container">
      <h2
        className="slider-genre-name"
        children={`${contentType} semelhantes`}
      />
      <div className="slide-carousel" ref={carousel}>
        <button
          className="slide-button"
          style={{ left: 0 }}
          onClick={handleScrollLeft}
        >
          <MdOutlineNavigateBefore size="4rem" color="white" />
        </button>
        {recommendationsContent.map((movie) => {
          return (
            <Link to={`/${type}/${movie.id}`} key={movie.id}>
              <div className="slide-item">
                <img
                  className="slide-img"
                  src={`https://www.themoviedb.org/t/p/w342${movie.poster_path}`}
                />
              </div>
            </Link>
          );
        })}
        <button
          className="slide-button"
          style={{ right: 0 }}
          onClick={handleScrollRight}
        >
          <MdOutlineNavigateNext size="4rem" color="white" />
        </button>
      </div>
    </div>
  );
}
