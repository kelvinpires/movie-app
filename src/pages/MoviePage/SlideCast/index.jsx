import React, { useEffect, useRef, useState } from "react";
import {
  SlideButton,
  SlideCarousel,
  SlideContainer,
  SlideImg,
  SlideItem,
  SliderGenreName,
} from "./styles";
import { API_KEY, getImage } from "../../../api";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useParams } from "react-router-dom";

function SlideCast({ cast }) {
  // const [cast, setCast] = useState([]);

  const userLanguage = navigator.language;
  const { type, id } = useParams();

  // useEffect(() => {
  //   getGenreMovies();
  // }, []);

  // const getGenreMovies = async () => {
  //   const res = await fetch(
  //     `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${API_KEY}&language=${userLanguage}`
  //   );
  //   const data = await res.json();

  //   setCast(data.cast);
  // };

  const carousel = useRef();

  let scrollFinal = 0;

  const handleScrollLeft = () => {
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
    scrollFinal--;
    if (scrollFinal < 0) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * cast.length;
      scrollFinal = cast.length - 1;
    }
  };

  const handleScrollRight = () => {
    carousel.current.scrollLeft += carousel.current.offsetWidth;
    scrollFinal++;

    if (scrollFinal == cast.length) {
      carousel.current.scrollLeft = 0;
      scrollFinal = 0;
    }
  };

  return (
    <SlideContainer>
      <SliderGenreName children="Elenco principal" />
      <SlideCarousel className="carousel" ref={carousel}>
        <SlideButton style={{ left: 0 }} onClick={handleScrollLeft}>
          <ArrowBackIosNewIcon style={{ color: "#FFF", fontSize: "4rem" }} />
        </SlideButton>
        {cast?.map((act) => {
          const actImg =
            act.profile_path !== null
              ? getImage(act.profile_path)
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXT05fi8hhDM3K386lZ1X5ohWlolSJV71FgMPySBO4XC9dcm5jD2AVAdd8gtRbgOQ-FdM&usqp=CAU";
          return (
            <SlideItem key={act.name}>
              <SlideImg src={actImg} />
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  textAlign: "center",
                  background: "#f4f4f4",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: ".5rem 0",
                }}
              >
                <p
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: "700",
                    fontFamily: "Inter",
                    flex: 1,
                    lineHeight: 2,
                  }}
                >
                  {act.name}
                </p>
                <p
                  style={{
                    fontSize: "1.4rem",
                    fontFamily: "Roboto",
                  }}
                >
                  {act.character}
                </p>
              </div>
            </SlideItem>
          );
        })}
        <SlideButton style={{ right: 0 }} onClick={handleScrollRight}>
          <ArrowForwardIosIcon style={{ color: "#FFF", fontSize: "4rem" }} />
        </SlideButton>
      </SlideCarousel>
    </SlideContainer>
  );
}

export { SlideCast };
