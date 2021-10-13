import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllFavorites/* , removeFavorites  */} from "../../redux/actions/favorite_actions";
import { Store } from "../../redux/reducer/";
import  ProductCard  from "../ProductCard/ProductCard";
import { Product } from "../../interfaces";
import { StyledContainer} from "./StyledFavorites";


const Favorites = () => {

  const dispatch = useDispatch();
  const [favs, setFavs] = useState();
  let idUser = JSON.parse(localStorage.getItem("userData")!);

  useEffect(() => {
    dispatch(getAllFavorites({idUser: idUser.id}));
  }, []);

  const favProducts = useSelector(
    (state: Store) => state.favoriteReducer.favorites
  );
console.log("favoriot", favProducts)
  let ids = {
    idProduct: favProducts.idProduct, 
    idUser: idUser.id
  }

   /* let idProduct = favProducts.id_product;  */
 /*  function handleOnClose(){
    dispatch(removeFavorites({ids}))
  } */

  return (
  
  <StyledContainer>

    {

    favProducts && favProducts.map((game:Product) => {
        return (
          <>
        <ProductCard key={game.id_product}  game={game}/> 
          {/* <button onClick={handleOnClose}>x</button> */}
          </>
          )
    }
      
      )

    }

  </StyledContainer>
  
  
  )
};

export default Favorites;
