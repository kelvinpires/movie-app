const API_KEY = "518e7f0f7d540796b4aed902d41c42c9";

const getImage = (movieImage) =>
  `https://www.themoviedb.org/t/p/original${movieImage}`;

const getTrending = (API_KEY, language) =>
  `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=${language}`;

const getMovies = (type, genre, API_KEY, language) =>
  `https://api.themoviedb.org/3/${type}/${genre}?api_key=${API_KEY}&language=${language}&page=1`;

const getVideo = (id, API_KEY, language) =>
  `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=${language}`;

const getBanner = async (id, API_KEY, setBanner) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/images?api_key=${API_KEY}&language=en`
  );
  const data = await res.json();

  return setBanner(data.backdrops[0]);
};

export { API_KEY, getImage, getMovies, getVideo, getBanner, getTrending };
