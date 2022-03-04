import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { getImage } from "../../api";

import { Link } from "react-router-dom";
import "./styles.css";

export const MyListPage = () => {
  const { watchlist } = useContext(GlobalContext);
  const userLang = navigator.language;

  const handleRemoveItem = (movie) => {
    let itemsList = watchlist;
    const index = watchlist.indexOf(movie);
    itemsList.splice(index, 1);

    itemsList = JSON.stringify(itemsList);
    localStorage.setItem("watchlist", itemsList);
    location.reload();
  };

  const streams = watchlist.map(
    (movie) => movie["watch/providers"]?.results[userLang.slice(3)]?.flatrate
  );
  const platforms = streams.map((item) => item);

  return (
    <div className="container">
      <h3
        className="item-title"
        style={{ fontSize: "3rem" }}
        as="h2"
        children="Minha Lista"
      />
      <ul className="item-container">
        {watchlist.map((movie, index) => (
          <li className="item-list" key={movie.id}>
            <Link to={`/${movie.type}/${movie.id}`} key={movie.id}>
              <img
                className="item-img"
                src={`https://www.themoviedb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title || movie.name}
              />
            </Link>

            <div className="item-info">
              <div>
                <h3
                  className="item-title"
                  children={movie.title || movie.name}
                />
                <p
                  className="item-date"
                  children={
                    movie.release_date
                      ? new Date(movie.release_date).getFullYear()
                      : new Date(movie.first_air_date).getFullYear()
                  }
                />
              </div>
              <div>
                <h3 className="platforms-availables">
                  Plataformas disponíveis:
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                  {platforms[index]?.map((platform) => (
                    <div key={Math.random() * 100}>
                      <img
                        src={`https://image.tmdb.org/t/p/w45${platform.logo_path}`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <button
                className="delete-btn"
                style={{ height: "4rem", width: "max-content" }}
                onClick={() => handleRemoveItem(movie)}
              >
                Remover
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
