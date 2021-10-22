import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Btn } from "../../GlobalStyles/GlobalStyles";
import {
  removeFavorites,
} from "../../redux/actions/favorite_actions";
import { Product } from "../../interfaces";
import { StyledContainer, TextFavorite } from "./StyledFavorites";
import ProductFavorite from "../ProductFavorite/ProductFavorite";
import { Link } from "react-router-dom";
import axios from "axios";

const Favorites = () => {
  const dispatch = useDispatch();
  let idUser = JSON.parse(localStorage.getItem("userData")!);

  const [favs, setFavs] = useState<any>(false);

  useEffect(() => {
    axios(`/favorites/${idUser.id}`)
      .then((res) => setFavs(res.data))
  }, [])

  function handleOnClose(id: any) {
    let idProduct = id;
    let ids = {
      idUser: idUser.id,
      idProduct: idProduct,
    };

    dispatch(removeFavorites(ids));
    setFavs(favs.filter((index: any) =>
      index.id_product !== id
    ))
  }
  return (
    <>

      <Link style={{ textDecoration: "none" }} to="/home">
        <Btn style={{ marginTop: "2rem", marginLeft: "2rem" }} className=" btn-card">
          <i className="fas fa-caret-left"></i> Go back
        </Btn>
      </Link>
      <StyledContainer>

        {favs?.length > 0 ? (
          favs.map((game: Product) => {
            return (
              <ProductFavorite
                onClose={() => handleOnClose(game.id_product)}
                key={game.id_product}
                game={game}
              />
            );
          })
        ) : (
          <div>
            <TextFavorite
              style={{ display: "flex", justifyContent: "center" }}>
              No favorites games yet!
            </TextFavorite>
            <Link style={{ textDecoration: "none" }} to="/home">
              <Btn style={{ marginTop: "2rem", marginLeft: "2rem" }} className=" btn-card">
                <i className="fas fa-caret-left"></i> Go back
              </Btn>
            </Link>
          </div>
        )}
      </StyledContainer>
    </>
  );
};

export default Favorites;
