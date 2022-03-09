import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { MoviePage } from "./pages/MoviePage";
import { SearchSection } from "./components/SearchSection";

import { MyListPage } from "./pages/MyListPage";
import { AllMoviesPage } from "./pages/AllMoviesPage";
import { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";

function App() {
  const { search } = useContext(GlobalContext);

  return (
    <Router>
      <Header />
      {search.length > 1 ? (
        <SearchSection />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:type/:id" element={<MoviePage />} />
            <Route path="/my-list" element={<MyListPage />} />
            <Route path="/movies" element={<AllMoviesPage type="movie" />} />
            <Route path="/series" element={<AllMoviesPage type="tv" />} />
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
