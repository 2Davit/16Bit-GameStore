import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Btn } from "../../GlobalStyles/GlobalStyles";
import {
  removeFavorites,
} from "../../redux/actions/favorite_actions";
import { Product } from "../../interfaces";
import { StyledContainer } from "./StyledFavorites";
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
    setFavs(favs.filter((index:any) => 
      index.id_product !== id
    ))
  }
  return (
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
          <h5
            style={{
              fontSize: "50px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            No favorites games yet!
          </h5>
          <Link style={{ textDecoration: "none" }} to="/home">
            <Btn
              style={{
                fontSize: "20px",
                display: "flex",
                justifyContent: "center",
                marginLeft: "30%",
              }}
              className="btn-card btn-img"
              onClick={() => window.scrollTo(0, 435)}
            >
              <div
                style={{
                  fontSize: "20px",
                  display: "flex",
                  justifyContent: "center",
                  marginLeft: "50%",
                }}
              >
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
