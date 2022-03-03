import React, { useEffect, useState, useContext } from "react";
import { API_KEY, getImage } from "../../api";
import { useParams } from "react-router-dom";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AddIcon from "@mui/icons-material/Add";
import { GlobalContext } from "../../context/GlobalState";

import { Loading } from "../../components/Loading";

import {
  MoviePageContainer,
  MovieImg,
  MovieDescription,
  MovieImgDiv,
  MovieTitle,
  MoviePageDetails,
  MoviePageBg,
  MovieTagLine,
  MovieInfo,
  MovieRuntimeDiv,
  MovieRuntimeSpan,
  MovieReleaseDate,
  MovieReleaseGenre,
  MovieGenresDiv,
  MovieGenre,
  SinopseSbt,
  SinopseContent,
  VoteDiv,
  VoteDone,
  SeeTrailer,
  PlayTrailer,
  MovieCertification,
  AddListBtn,
} from "./styles";
import { SlideCast } from "./SlideCast";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import { MovieTrailer } from "./MovieTrailer";
import axios from "axios";
import { SlideSimilar } from "./SlideSimilar";

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

  let voteColor;

  const { type, id } = useParams();

  const getMovieDetails = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}&append_to_response=videos,images,release_dates,content_ratings,recommendations,credits&include_image_language=${userLang},null&include_video_language=${userLang},en&language=${userLang}`
      )
      .then(({ data }) => {
        setMovieDetails(data);
        setMovieTrailers(data.videos.results);
        data.release_dates
          ? setMovieCertification(data.release_dates.results)
          : "";
      })
      .catch((err) => {
        console.warn(err);
      })
      .finally(() => {
        setLoading(false);
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

  voteColor =
    movieDetails.vote_average >= 5
      ? `background-color: #7ee8fa;
  background-image: linear-gradient(315deg, #7ee8fa 0%, #80ff72 74%);`
      : `background-color: #feae96;
background-image: linear-gradient(315deg, #feae96 0%, #fe0944 74%);;
`;

  if (movieDetails.vote_average == 0) {
    voteColor = `background-color: #b8c6db;
background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);`;
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
        <MoviePageContainer>
          <MoviePageDetails className="moviepage-details">
            <MoviePageBg
              bg={getImage(movieDetails.backdrop_path)}
            ></MoviePageBg>
            <MovieImgDiv className="movie-imgdiv">
              <MovieImg src={getImage(movieDetails.poster_path)} />
            </MovieImgDiv>
            <MovieDescription>
              <MovieTitle className="movie-title">
                {movieDetails.title || movieDetails.name}
              </MovieTitle>
              <MovieInfo>
                <MovieRuntimeDiv>
                  {certification && (
                    <MovieCertification
                      certificationColor={releaseDatesColor}
                      children={certification}
                    />
                  )}
                  <AccessTimeIcon
                    style={{
                      color: "#fff",
                      opacity: 0.8,
                      fontSize: "2rem",
                      marginLeft: "1rem",
                    }}
                  />

                  <MovieRuntimeSpan children={getRuntime(filmTime)} />
                </MovieRuntimeDiv>
                <MovieReleaseDate children={releaseDate} />

                {/* trailer div */}

                {haveTrailer != false && (
                  <SeeTrailer onClick={handleDisplayTrailer}>
                    <PlayArrowRoundedIcon
                      style={{ color: "#fff", fontSize: "3rem" }}
                    />
                    <PlayTrailer children="Reproduzir Trailer" />
                  </SeeTrailer>
                )}
              </MovieInfo>
              <MovieReleaseGenre>
                {/* votaçao */}
                <VoteDiv bgColor={voteColor}>
                  <VoteDone
                    children={
                      movieDetails.vote_average !== 0
                        ? movieDetails.vote_average
                        : "SN"
                    }
                  />
                </VoteDiv>
                {/* votaçao */}
                <MovieGenresDiv>
                  {movieDetails.genres.map((genre) => (
                    <MovieGenre
                      to={`/movies/?gen=${genre.id}`}
                      key={genre.id}
                      children={genre.name}
                    />
                  ))}
                </MovieGenresDiv>
              </MovieReleaseGenre>

              {/* add to list */}

              <AddListBtn
                disabled={watchlistDisabled}
                onClick={() => addMovieToWatchList({ ...movieDetails, type })}
              >
                <AddIcon style={{ fontSize: "2.5rem" }} />
                Adicionar à lista
              </AddListBtn>
              {/* add to list */}

              <MovieTagLine children={movieDetails.tagline} />
              <SinopseSbt children="Sinopse" />
              <SinopseContent children={movieDetails.overview} />
            </MovieDescription>
          </MoviePageDetails>
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
        </MoviePageContainer>
      )}
    </>
  );
}

export { MoviePage };
