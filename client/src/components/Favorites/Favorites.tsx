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
import { Link } from "react-router-dom";

const Favorites = () => {
  const dispatch = useDispatch();
  let idUser = JSON.parse(localStorage.getItem("userData")!);
  const history = useHistory();

  useEffect(() => {
    dispatch(getAllFavorites({ idUser: idUser.id }));
  }, [dispatch, idUser.id]);

  const favProducts = useSelector(
    (state: Store) => state.favoriteReducer.favorites
  );

  function handleOnClose(e: any) {
    let idProduct = e;
    let ids = {
      idUser: idUser.id,
      idProduct: idProduct,
    };
    dispatch(removeFavorites(ids));
    history.go(0);
  }
  return (
    <StyledContainer>
      {favProducts.length > 0 ? (
        favProducts.map((game: Product) => {
          return (
            <ProductFavorite
              onClose={handleOnClose}
              key={game.id_product}
              game={game}
            />
          );
        })
      ) : (
        <div>
          <h5>No favorites games yet!</h5>
          <Link to="/home">
            <button>GO HOME</button>
          </Link>
        </div>
      )}
    </StyledContainer>
  );
};

export default Favorites;
