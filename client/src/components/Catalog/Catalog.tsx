import React, { FC } from "react";
import { Store } from "../../redux/reducer/productsReducer";
import { useSelector, useDispatch } from "react-redux";
import { changeCurrentPage } from "../../redux/actions/global_actions";
import { Product } from "../../interfaces";
import { ProductCard } from "../index";
import { StyledCatalog, StyledPagination } from "./StyledCatalog";
import ReactPaginate from "react-paginate";
import { getAllProducts } from "../../redux/actions/products_action";
import { StyledSVG } from "../../GlobalStyles/GlobalStyles";
import arrowLeft from "../../assets/img/svg/arrow-left.svg";
import arrowRight from "../../assets/img/svg/arrow-right.svg";

interface Props {
  currentProducts: any;
}

const Catalog = () => {
  const totalProducts: any = useSelector(
    (state: Store) => state.productsReducer.totalProducts
  );
  const count: number = useSelector(
    (state: Store) => state.productsReducer.count
  );
  const currentPage: any = useSelector(
    (state: Store) => state.globalReducer.currentPage
  );

  const productsPerPage = 9;

  const limitPerPage = Math.ceil(count / productsPerPage);
  const dispatch = useDispatch();
  const handlePageChange = (e: any) => {
    const offset = e.selected !== 0 ? productsPerPage * e.selected : 0;
    dispatch(changeCurrentPage(e.selected));
    dispatch(getAllProducts({ limit: productsPerPage, offset }));
  };

  return (
    <StyledCatalog id="catalog">
      {totalProducts?.map((product: Product) => (
        <ProductCard
          key={product.id_product}
          image={product.thumbnail_product}
          name={product.name_product}
          price={product.price_product}
          id={product.id_product}
        />
      ))}
      <StyledPagination>
        <ReactPaginate
          forcePage={currentPage}
          pageCount={limitPerPage}
          onPageChange={handlePageChange}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          breakLabel={"..."}
          breakClassName={"break-me"}
          previousLabel={<StyledSVG src={arrowLeft} />}
          nextLabel={<StyledSVG src={arrowRight} />}
          containerClassName={"pagination"}
          activeClassName={"active"}
          disabledClassName={"disabled"}
          previousClassName={"controls"}
          nextClassName={"controls"}
        />
      </StyledPagination>
    </StyledCatalog>
  );
};

export default Catalog;
