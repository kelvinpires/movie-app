import React, { useEffect, useState, useContext } from "react";
import { API_KEY } from "../../api";
import { Link, useParams } from "react-router-dom";
import { MdWatchLater } from "react-icons/md";
import { MdAdd } from "react-icons/md";
import { GlobalContext } from "../../context/GlobalState";

import { Loading } from "../../components/Loading";

import { SlideCast } from "./SlideCast";
import { FaPlay } from "react-icons/fa";
import { MovieTrailer } from "./MovieTrailer";
import axios from "axios";
import { SlideSimilar } from "./SlideSimilar";

import { MoviePageBg } from "./styles";
import "./styles.css";

function MoviePage() {
  const [movieDetails, setMovieDetails] = useState([]);
  const [movieCertification, setMovieCertification] = useState([]);
  const [loading, setLoading] = useState(true);
  const [movieTrailers, setMovieTrailers] = useState([]);

  const [displayTrailer, setDisplayTrailer] = useState("none");

  const userLang = navigator.language;

  let releaseDate;
  let filmTime;
  let haveTrailer;
  let releaseDatesColor;
  let certification;
  let tvShowCertification;
  let UStvShowCertification;

  let voteColorBg;
  let voteColorBgImg;

  const { type, id } = useParams();

  const getMovieDetails = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}&append_to_response=videos,images,release_dates,content_ratings,recommendations,credits,watch/providers&include_image_language=${userLang},null&include_video_language=${userLang},en&language=${userLang}`
      )
      .then(({ data }) => {
        setMovieDetails(data);
        setMovieTrailers(data.videos.results);
        data.release_dates && setMovieCertification(data.release_dates.results);
      })
      .catch((err) => {
        console.warn(err);
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  };

  useEffect(() => {
    getMovieDetails();
    window.scrollTo(1, 0);
  }, [id]);

  const countryCertification = movieCertification?.filter(
    (cert) => cert.iso_3166_1 == userLang.slice(3)
  );

  const USCertification = movieCertification?.filter(
    (cert) => cert.iso_3166_1 == "US"
  );

  if (movieDetails.content_ratings) {
    tvShowCertification = movieDetails.content_ratings.results.filter(
      (country) => country.iso_3166_1 == userLang.slice(3)
    );
    UStvShowCertification = movieDetails.content_ratings.results.filter(
      (country) => country.iso_3166_1 == "US"
    );
    if (tvShowCertification != false) {
      certification = tvShowCertification?.[0].rating;
    } else if (tvShowCertification != false && UStvShowCertification) {
      certification = UStvShowCertification?.[0].rating;
    } else {
      certification = null;
    }
  }

  if (!movieDetails.content_ratings) {
    certification =
      countryCertification != false
        ? countryCertification[0]?.release_dates[0].certification
        : USCertification[0]?.release_dates[0].certification;
  }

  switch (certification) {
    case "L":
      releaseDatesColor = "#20bf55";
      break;
    case "10":
      releaseDatesColor = "#009ffd";
      break;
    case "12":
      releaseDatesColor = "#fbd72b";
      break;
    case "14":
      releaseDatesColor = "#ef5734";
      break;
    case "16":
      releaseDatesColor = "#a40606";
      break;
    case "18":
      releaseDatesColor = "#28313b";
      break;
    default:
      releaseDatesColor = "#9795ef";
      break;
  }

  if (movieDetails.vote_average >= 5) {
    voteColorBg = "#7ee8fa";
    voteColorBgImg = "linear-gradient(315deg, #7ee8fa 0%, #80ff72 74%)";
  } else if (movieDetails.vote_average == 0) {
    voteColorBg = "#b8c6db";
    voteColorBgImg = "linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%)";
  } else {
    voteColorBg = "#feae96";
    voteColorBgImg = "linear-gradient(315deg, #feae96 0%, #fe0944 74%)";
  }

  const getRuntime = (runtimeMin) => {
    const num = runtimeMin;
    const movieTotalHours = num / 60;
    const movieRealHour = Math.floor(movieTotalHours);
    const movieRestMinutes = (movieTotalHours - movieRealHour) * 60;
    let minutes =
      movieRestMinutes.toFixed() > 0 && movieRestMinutes.toFixed() <= 9
        ? `0${movieRestMinutes.toFixed()}m`
        : `${movieRestMinutes.toFixed()}m`;
    if (movieRestMinutes == 0) minutes = "";
    let movieRealTime = `${movieRealHour}h ${minutes}`;

    if (movieRealTime.startsWith("NaN")) {
      movieRealTime = "Em breve";
    }

    return movieRealTime;
  };

  const isTrailerOfficial = movieTrailers.filter(
    (movie) => movie.type == "Trailer" && movie.iso_3166_1 == userLang.slice(3)
  );
  const isTrailerOfficialDublado = movieTrailers.filter(
    (movie) =>
      movie.type == "Trailer" &&
      movie.official &&
      movie.name.toLowerCase().includes("dub")
  );

  const isTrailerOfficialEN = movieTrailers.filter(
    (movie) => movie.type == "Trailer" && movie.iso_3166_1 == "US"
  );

  if (isTrailerOfficial.length > 1) {
    haveTrailer = isTrailerOfficial[isTrailerOfficial.length - 1];
  } else {
    haveTrailer = isTrailerOfficial;
  }

  if (isTrailerOfficialDublado != false) {
    if (isTrailerOfficialDublado.length > 1) {
      haveTrailer =
        isTrailerOfficialDublado[isTrailerOfficialDublado.length - 1];
    }
    haveTrailer = isTrailerOfficialDublado;
  }

  if (isTrailerOfficial.length == 0) {
    haveTrailer =
      isTrailerOfficialEN.length > 1
        ? isTrailerOfficialEN[isTrailerOfficialEN.length - 1]
        : isTrailerOfficialEN;
  }

  if (type == "tv") {
    filmTime = movieDetails.episode_run_time;
    if (typeof filmTime == "object") {
      filmTime = filmTime[0];
    }
    releaseDate = new Date(movieDetails.first_air_date).toLocaleDateString();
  } else {
    filmTime = movieDetails.runtime;
    releaseDate = new Date(movieDetails.release_date).toLocaleDateString();
  }

  const handleDisplayTrailer = () => {
    displayTrailer == "none"
      ? setDisplayTrailer("flex")
      : setDisplayTrailer("none");
  };

  const { addMovieToWatchList, watchlist } = useContext(GlobalContext);

  let storedMovie = watchlist.find((obj) => obj.id === movieDetails.id);

  const watchlistDisabled = storedMovie ? true : false;

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="movie-page-container">
          <div className="movie-page-details">
            <MoviePageBg
              bg={`https://www.themoviedb.org/t/p/w1280${movieDetails.backdrop_path}`}
            ></MoviePageBg>
            <div className="movie-img-container">
              <img
                className="movie-img"
                src={`https://www.themoviedb.org/t/p/w780${movieDetails.poster_path}`}
              />
            </div>
            <div className="movie-description">
              <h1 className="movie-title">
                {movieDetails.title || movieDetails.name}
              </h1>
              <div className="movie-info">
                <div className="movie-runtime-container">
                  {certification && (
                    <div
                      className="movie-certification"
                      style={{
                        border: `0.2rem solid ${releaseDatesColor}`,
                        backgroundColor: `${releaseDatesColor}80`,
                      }}
                      children={certification}
                    />
                  )}
                  <MdWatchLater
                    style={{
                      color: "#fff",
                      opacity: 0.8,
                      fontSize: "2rem",
                      marginLeft: "1rem",
                    }}
                  />

                  <span
                    className="movie-runtime-span"
                    children={getRuntime(filmTime)}
                  />
                </div>
                <span className="movie-release-date" children={releaseDate} />

                {/* trailer div */}

                {haveTrailer != false && (
                  <div className="see-trailer" onClick={handleDisplayTrailer}>
                    <FaPlay color="#fff" size="2rem" />
                    <h3
                      className="play-trailer"
                      children="Reproduzir Trailer"
                    />
                  </div>
                )}
              </div>
              <div className="movie-release-genre">
                {/* votaçao */}
                <div
                  className="vote-container"
                  style={{
                    backgroundColor: `${voteColorBg}`,
                    backgroundImage: `${voteColorBgImg}`,
                  }}
                >
                  <div
                    className="vote-done"
                    children={
                      movieDetails.vote_average !== 0
                        ? movieDetails.vote_average
                        : "SN"
                    }
                  />
                </div>
                {/* votaçao */}
                <div className="movie-genres-container">
                  {movieDetails.genres.map((genre) => (
                    <Link
                      className="movie-genre"
                      to={`/movies/?gen=${genre.id}`}
                      key={genre.id}
                      children={genre.name}
                    />
                  ))}
                </div>
              </div>

              {/* add to list */}

              <button
                className="add-list-btn"
                disabled={watchlistDisabled}
                onClick={() => addMovieToWatchList({ ...movieDetails, type })}
              >
                <MdAdd size="2.5rem" />
                Adicionar à lista
              </button>
              {/* add to list */}

              <h3 className="movie-tagline" children={movieDetails.tagline} />
              <h2 className="sinopse-sbt" children="Sinopse" />
              <p className="sinopse-content" children={movieDetails.overview} />
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#030b17",
              width: "100%",
              height: "100%",
            }}
          >
            <SlideCast cast={movieDetails.credits.cast} />
            {movieDetails.recommendations.results != false && (
              <SlideSimilar
                type={type}
                recommendationsContent={movieDetails.recommendations.results}
              />
            )}
          </div>
          <MovieTrailer
            displayTrailer={displayTrailer}
            displayHandler={handleDisplayTrailer}
            movieTitle={movieDetails.title || movieDetails.name}
            haveTrailer={haveTrailer}
          />
        </div>
      )}
    </>
  );
}

export { MoviePage };
