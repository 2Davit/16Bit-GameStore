import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetail } from "../../redux/actions/products_action";
import { Store } from "../../redux/reducer/productsReducer";

interface Props {
  id: string;
}

const Detail: FC = () => {
  const { id } = useParams<Props>();

  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(getProductDetail(parseInt(id)));
  }, [dispatch, id]);

  const detailProduct = useSelector(
    (state: Store) => state.productsReducer.detailProduct
  );


interface Platform {
  name_platform: string
}

interface Genre {
  name_genre: string
}


  return (
    <div>
    {  <h1>{detailProduct.name_product}</h1>}
      <h2>{detailProduct.price_product}</h2>
      <h2>{detailProduct.description_product}</h2>
      <h2>{detailProduct.release_year}</h2>
     {detailProduct.image_product?.map((e:string, i:number)=><img key={i} src={e} alt={detailProduct.name_product}/> )}
     {detailProduct.platforms?.map((e:Platform, i:number)=><h2 key={i}>Console: {e.name_platform}</h2> )}
    <ul> {detailProduct.genres?.map((e:Genre, i:number)=><li key={i}>{e.name_genre}</li> )} </ul>
   </div>
  );
};

export default Detail;