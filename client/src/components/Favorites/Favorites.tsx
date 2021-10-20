import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Btn } from "../../GlobalStyles/GlobalStyles";
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
import { textDecoration } from "@chakra-ui/styled-system";

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
          <h5  style={{ fontSize:"50px",  display: "flex", justifyContent: "center" }} >No favorites games yet!</h5>
          <Link  style={{textDecoration:"none"}} to="/home">
          <Btn
                  style={{ fontSize:"20px",  display: "flex", justifyContent: "center", marginLeft: "30%" }}
                  className="btn-card btn-img"
                  onClick={() => window.scrollTo(0, 435)}
                >
                  <div style={{ fontSize:"20px",  display: "flex", justifyContent: "center", marginLeft: "50%" }} >
                  Go Home
                  </div>
                </Btn>
          </Link>
        </div>
      )}
    </StyledContainer>
  );
};

export default Favorites;
