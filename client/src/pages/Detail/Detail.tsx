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

  return (
    <div>
      <h1>{detailProduct.name_product}</h1>
      <h2>{detailProduct.price_product}</h2>
    </div>
  );
};

export default Detail;
