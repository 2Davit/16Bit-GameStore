import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllGenres,
  getAllPlatforms,
  getAllProducts,
  onSaleFilter,
} from "../../redux/actions/products_action";
/* import { getRole } from "../../redux/actions/auth_actions"; */
import { Paginate, Filter, Catalog, Carousel } from "../../components";
import { Store } from "../../redux/reducer/";
import { ContainerHome } from "./Home.style";
import { createNavbar } from "../../redux/actions/admin_actions";
import { getCart } from "../../redux/actions/cart_actions";

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
    dispatch(getAllGenres());
    dispatch(getAllPlatforms());
    dispatch(createNavbar());
    dispatch(getCart());
  }, [dispatch]);

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
