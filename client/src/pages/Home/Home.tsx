import React, { useEffect, FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions/products_action";
import { toggleCart } from "../../redux/actions/global_actions";
import { NavBar, Card, Paginate, CartSideBar } from "../../components";
import { Store } from "../../redux/reducer/productsReducer";
import { Product } from "../../interfaces";
import SearchBar from "../../components/SearchBar/SearchBar";

const Home: FC = () => {
  const dispatch = useDispatch();
  const totalProducts = useSelector(
    (state: Store) => state.productsReducer.totalProducts
  );

  const cart: Array<number> = useSelector(
    (state: Store) => state.cartReducer.cart.list
  );
  const showCart: boolean = useSelector(
    (state: Store) => state.globalReducer.showCart
  );


  //Paginate
  // const [order, setOrder] = useState<string>("");
  //uso estados locales para el paginado
  const [currentPage, setCurrentPage] = useState<number>(1); // empiezo en la pag 1
  const pages = (pageNum: number): void => {
    setCurrentPage(pageNum);
  };
  const productsPerPage: number = 10;
  let lastIdx: number = currentPage * productsPerPage; // en la primera página, lastIdx = 1 * 9 = 9
  let firstIdx: number = lastIdx - productsPerPage; // en la primera página, firstIdx = 9 - 9 = 0
  let currentProducts: Array<Product> = totalProducts.slice(firstIdx, lastIdx); // en la primera página, currentCharacters = countries.slice(0,9)
  ///////////

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const toggleModal = () => {
    dispatch(toggleCart());
  };

  return (
    <div>
      <NavBar toggleModal={toggleModal} />
      <SearchBar />
      <CartSideBar closeCallback={toggleModal} show={showCart} cart={cart} />
      <Paginate
        amountPerPage={productsPerPage}
        totalAmount={totalProducts?.length}
        pageNumber={pages}
      />
      <div style={{ display: "flex", flexWrap: "wrap" }}>

        {currentProducts?.length !== 0 &&
          currentProducts?.map((product) => (

            <Card
              key={product.id_product}
              image={product.thumbnail_product}
              name={product.name_product}
              price={product.price_product}
              id={product.id_product}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
