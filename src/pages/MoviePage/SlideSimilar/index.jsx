import React, { useRef, useEffect } from "react";
import {
  SlideButton,
  SlideCarousel,
  SlideContainer,
  SlideImg,
  SlideItem,
  SliderGenreName,
} from "./styles";
import { getImage } from "../../../api";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

export function SlideSimilar({ type, recommendationsContent }) {
  let scrollFinal = 0;

  useEffect(() => {
    scrollFinal = 0;
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
    <SlideContainer>
      <SliderGenreName children={`${contentType} semelhantes`} />
      <SlideCarousel className="carousel" ref={carousel}>
        <SlideButton
          className="slide-btn"
          style={{ left: 0 }}
          onClick={handleScrollLeft}
        >
          <ArrowBackIosNewIcon style={{ color: "#FFF", fontSize: "4rem" }} />
        </SlideButton>
        {recommendationsContent.map((movie) => {
          return (
            <Link to={`/${type}/${movie.id}`} key={movie.id}>
              <SlideItem className="slide-item">
                <SlideImg
                  className="slide-img"
                  src={getImage(movie.poster_path)}
                />
              </SlideItem>
            </Link>
          );
        })}
        <SlideButton
          className="slide-btn"
          style={{ right: 0 }}
          onClick={handleScrollRight}
        >
          <ArrowForwardIosIcon style={{ color: "#FFF", fontSize: "4rem" }} />
        </SlideButton>
      </SlideCarousel>
    </SlideContainer>
  );
}
