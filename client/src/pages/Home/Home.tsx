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

const Home: FC = () => {
  const dispatch = useDispatch();
  const totalProducts: any = useSelector(
    (state: Store) => state.productsReducer.totalProducts
  );

  const onSaleProducts: any = useSelector(
    (state: Store) => state.productsReducer.onSaleProducts
  );

  //Paginate
  // const [order, setOrder] = useState<string>("");
  //uso estados locales para el paginado
  const [currentPage, setCurrentPage] = useState<number>(1); // empiezo en la pag 1
  const pages = (pageNum: number): void => {
    setCurrentPage(pageNum);
  };
  const productsPerPage: number = 9;
  let lastIdx: number = currentPage * productsPerPage; // en la primera página, lastIdx = 1 * 9 = 9
  let firstIdx: number = lastIdx - productsPerPage; // en la primera página, firstIdx = 9 - 9 = 0
  let currentProducts: Array<Product> = totalProducts.slice(firstIdx, lastIdx); // en la primera página, currentCharacters = countries.slice(0,9)
  ///////////

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(onSaleFilter());
  }, [dispatch]);

  // function handleOnSaleFilter() {
  //   dispatch(onSaleFilter());
  //   setCurrentPage(1);
  // }

  return (
    <ContainerHome>
      <NavBar />
      {onSaleProducts.length !== 0 && <Carousel products={onSaleProducts} />}
      <Filter /*handleOnSaleFilter={handleOnSaleFilter}*/ />
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
