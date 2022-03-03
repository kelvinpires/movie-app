import React from "react";
import { Link } from "react-router-dom";

import LiveTvIcon from "@mui/icons-material/LiveTv";
import SearchIcon from "@mui/icons-material/Search";

import "./styles.css";

export const Header = ({ setSearch, search }) => {
  return (
    <header className="header-menu">
      <Link
        onClick={() => setSearch("")}
        to="/"
        style={{ textDecoration: "none" }}
      >
        <div className="logo-content">
          <LiveTvIcon
            className="logo"
            style={{ fontSize: "40px", color: "#FFF" }}
          />
          <h1 className="logo-title">What is that movie</h1>
        </div>
      </Link>
      <a
        style={{
          color: "white",
          fontSize: "1.8rem",
          textDecoration: "none",
          fontFamily: "Inter",
        }}
        href="/movies"
      >
        Filmes
      </a>
      <a
        style={{
          color: "white",
          fontSize: "1.8rem",
          textDecoration: "none",
          fontFamily: "Inter",
        }}
        href="/series"
      >
        Séries
      </a>
      <Link
        style={{
          color: "white",
          fontSize: "1.8rem",
          textDecoration: "none",
          fontFamily: "Inter",
        }}
        to="/my-list"
      >
        Minha lista
      </Link>

      <div className="input-search-content">
        <SearchIcon style={{ fontSize: "2.4rem", color: "white" }} />
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
