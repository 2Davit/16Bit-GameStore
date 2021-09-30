import React, { useEffect, FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  onSaleFilter,
} from "../../redux/actions/products_action";
import { NavBar, Paginate, Filter, Catalog } from "../../components";
import { Store } from "../../redux/reducer/productsReducer";
import { Product } from "../../interfaces";
import { changeCurrentPage } from "../../redux/actions/global_actions";

const Home: FC = () => {
  const dispatch = useDispatch();
  const productsPerPage: number = 9;

  useEffect(() => {
    dispatch(getAllProducts({ limit: productsPerPage, offset: 0 }));
  }, [dispatch]);

  function handleOnSaleFilter(e: any) {
    dispatch(onSaleFilter(e.target.value));
    dispatch(changeCurrentPage(1));
  }

  return (
    <div>
      <NavBar />
      <Filter handleOnSaleFilter={handleOnSaleFilter} />
      <Catalog />
    </div>
  );
};

export default Home;
