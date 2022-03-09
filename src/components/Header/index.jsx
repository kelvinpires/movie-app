import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FaDev } from "react-icons/fa";

import "./styles.css";

export const Header = () => {
  const { search, setSearch } = useContext(GlobalContext);

  return (
    <header className="header-menu">
      <Link
        onClick={() => setSearch("")}
        to="/"
        style={{ textDecoration: "none" }}
      >
        <div className="logo-content">
          <h1 className="logo-title">Movies.</h1>
          <FaDev className="logo" size="4.5rem" color="white" />
        </div>
      </Link>
      <Link className="page" to="/movies">
        Filmes
      </Link>
      <Link className="page" to="/series">
        Séries
      </Link>
      <Link className="page" to="/my-list">
        Minha lista
      </Link>

      <div className="input-search-content">
        <FiSearch size="2rem" color="white" />
        <input
          className="input-search"
          value={search}
          onChange={(e) => {
            e.preventDefault();
            setSearch(e.target.value);
          }}
          type="search"
          placeholder="Search a movie"
        />
      </div>
    </header>
  );
};
