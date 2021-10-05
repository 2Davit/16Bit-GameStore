import React, { useEffect, FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  onSaleFilter,
} from "../../redux/actions/products_action";
import { NavBar, Paginate, Filter, Catalog, Carousel } from "../../components";
import { Store } from "../../redux/reducer/";
import { Product } from "../../interfaces";
import { ContainerHome } from "./Home.style";

const Home = ({ setPage, currentProducts, productsPerPage, pages }: any) => {
  const dispatch = useDispatch();

  const onSaleProducts: any = useSelector(
    (state: Store) => state.productsReducer.onSaleProducts
  );

  const totalProducts: any = useSelector(
    (state: Store) => state.productsReducer.totalProducts
  );

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(onSaleFilter("carousel"));
  }, [dispatch]);

  // function handleOnSaleFilter() {
  //   dispatch(onSaleFilter());
  //   setCurrentPage(1);
  // }

  return (
    <ContainerHome>
      {onSaleProducts.length !== 0 && <Carousel products={onSaleProducts} />}
      <Filter setPage={setPage} />
      <Catalog currentProducts={currentProducts} />
      <Paginate
        amountPerPage={productsPerPage}
        totalAmount={totalProducts?.length}
        pageNumber={pages}
      />
    </ContainerHome>
  );
};

export default Home;
