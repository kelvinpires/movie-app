import React from "react";
import {
  MovieTrailerContainer,
  MovieTrailerContent,
  MovieContentAction,
  MovieTrailerIframe,
  MovieTrailerTag,
  MovieContentExit,
} from "./styles";
import CloseIcon from "@mui/icons-material/Close";

export function MovieTrailer({
  displayTrailer,
  displayHandler,
  movieTitle,
  haveTrailer,
}) {
  const displayFlex = displayTrailer == "flex";

  return (
    <MovieTrailerContainer style={{ display: displayTrailer }}>
      <MovieTrailerContent>
        <MovieContentAction>
          <MovieTrailerTag children={movieTitle} />
          <MovieContentExit>
            <CloseIcon
              onClick={displayHandler}
              style={{ cursor: "pointer", fontSize: "3rem", color: "#fff" }}
            />
          </MovieContentExit>
        </MovieContentAction>
        {haveTrailer && displayFlex ? (
          <>
            <MovieTrailerIframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${
                haveTrailer.key || haveTrailer[0].key
              }`}
              title={haveTrailer.name}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              style={{ border: "none" }}
            ></MovieTrailerIframe>
          </>
        ) : (
          ""
        )}
      </MovieTrailerContent>
    </MovieTrailerContainer>
  );
}
