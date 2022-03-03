import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { MoviePage } from "./pages/MoviePage";
import { SearchSection } from "./components/SearchSection";

import { MyListPage } from "./pages/MyListPage";
import { AllMoviesPage } from "./pages/AllMoviesPage";
// import "./mediacss/home.css";

// import { Footer } from "./components/Footer";

function App() {
  const [search, setSearch] = useState("");

  return (
    <Router basename="/movie-app">
      <Header setSearch={setSearch} search={search} />
      {search.length > 1 ? (
        <SearchSection search={search} setSearch={setSearch} />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:type/:id" element={<MoviePage />} />
            <Route path="/my-list" element={<MyListPage />} />
            <Route path="/movies" element={<AllMoviesPage type="movie" />} />
            <Route path="/series" element={<AllMoviesPage type="tv" />} />
          </Routes>
          {/* <Footer /> */}
        </>
      )}
    </Router>
  );
}

export default App;
