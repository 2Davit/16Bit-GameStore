import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllFavorites,
  removeFavorites,
} from "../../redux/actions/favorite_actions";
import { Store } from "../../redux/reducer/";
import { Product } from "../../interfaces";
import { StyledContainer } from "./StyledFavorites";
import ProductFavorite from "../ProductFavorite/ProductFavorite";
import { useHistory } from "react-router";

const Favorites = () => {
  const dispatch = useDispatch();
  let idUser = JSON.parse(localStorage.getItem("userData")!);
  const history = useHistory();

  useEffect(() => {
    dispatch(getAllFavorites({ idUser: idUser.id }));
  }, []);

  const favProducts = useSelector(
    (state: Store) => state.favoriteReducer.favorites
  );

  function handleOnClose(e: any) {
    let idProduct = e;
    let ids = {
      idUser: idUser.id,
      idProduct: idProduct
    };
    dispatch(removeFavorites(ids));
    history.go(0);
  }
  return (
    <StyledContainer>
      {favProducts &&
        favProducts.map((game: Product) => {
          return (
            <ProductFavorite
              onClose={handleOnClose}
              key={game.id_product}
              game={game}
            />
          );
        })}
    </StyledContainer>
  );
};

export default Favorites;
