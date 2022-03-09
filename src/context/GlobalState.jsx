import React, { createContext, useReducer, useEffect, useState } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  watchlist: localStorage.watchlist ? JSON.parse(localStorage.watchlist) : [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [search, setSearch] = useState("");
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
  }, [state]);

  const addMovieToWatchList = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        addMovieToWatchList,
        search,
        setSearch,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
