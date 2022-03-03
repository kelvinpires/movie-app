import React from "react";
import { HeaderBanner } from "../../components/HeaderBanner";
import { SliderMovie } from "../../components/SliderMovie";

function HomePage() {
  return (
    <>
      <HeaderBanner />
      <SliderMovie Type="movie" Genre="popular" GenreName="Filmes populares" />
      <SliderMovie Type="tv" Genre="popular" GenreName="Série populares" />
      <SliderMovie Type="movie" Genre="top_rated" GenreName="Clássicos" />
      <SliderMovie Type="movie" Genre="now_playing" GenreName="Em cartaz" />
    </>
  );
}

export { HomePage };
