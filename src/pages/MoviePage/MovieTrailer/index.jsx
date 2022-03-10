import React from "react";
import { MdClose } from "react-icons/md";
import "./styles.css";

export function MovieTrailer({
  displayTrailer,
  displayHandler,
  movieTitle,
  haveTrailer,
}) {
  const displayFlex = displayTrailer == "flex";

  return (
    <div
      className="movie-trailer-container"
      style={{ display: displayTrailer }}
    >
      <div className="movie-trailer-content">
        <div className="movie-content-action">
          <h2 className="movie-trailer-tag" children={movieTitle} />
          <div className="movie-content-exit">
            <MdClose
              onClick={displayHandler}
              size="3rem"
              color="white"
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        {haveTrailer && displayFlex ? (
          <>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${
                haveTrailer.key || haveTrailer[0].key
              }`}
              title={haveTrailer.name}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ border: "none" }}
            ></iframe>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
