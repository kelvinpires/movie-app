import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { getImage } from "../../api";
import {
  Container,
  ItemContainer,
  ItemDate,
  ItemImg,
  ItemList,
  ItemTitle,
  ItemInfo,
  DeleteBtn,
} from "./styles";
import { Link } from "react-router-dom";

export const MyListPage = () => {
  const { watchlist } = useContext(GlobalContext);

  console.log(watchlist);

  const handleRemoveItem = (movie) => {
    let itemsList = watchlist;
    const index = watchlist.indexOf(movie);
    itemsList.splice(index, 1);

    itemsList = JSON.stringify(itemsList);
    localStorage.setItem("watchlist", itemsList);
    location.reload();
  };

  return (
    <Container>
      <ItemTitle style={{ fontSize: "3rem" }} as="h2" children="Minha Lista" />
      <ItemContainer>
        {watchlist.map((movie) => (
          <ItemList key={movie.id}>
            <Link to={`/${movie.type}/${movie.id}`} key={movie.id}>
              <ItemImg
                src={getImage(movie.poster_path)}
                alt={movie.title || movie.name}
              />
            </Link>

            <ItemInfo>
              <div>
                <ItemTitle children={movie.title || movie.name} />
                <ItemDate
                  children={
                    movie.release_date
                      ? new Date(movie.release_date).getFullYear()
                      : new Date(movie.first_air_date).getFullYear()
                  }
                />
              </div>

              <DeleteBtn
                style={{ height: "4rem", width: "max-content" }}
                onClick={() => handleRemoveItem(movie)}
              >
                Remover filme
              </DeleteBtn>
            </ItemInfo>
          </ItemList>
        ))}
      </ItemContainer>
    </Container>
  );
};
