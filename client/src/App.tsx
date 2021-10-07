import React, { FC, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Home,
  NotFound,
  Landing,
  ProductDetail,
  AdminPanel,
  FormProduct,
  FormRegister,
  FormLogin,
  FormGenre,
  FormPlatform,
  Terms,
  Privacy,
  Legal,
  Order
} from "./pages/";
import { NavBar, Footer, About, CartSideBar } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyles/GlobalStyles";
import { Theme } from "./Theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Store } from "./redux/reducer";
import { Product } from "./interfaces";
import { toggleCart } from "./redux/actions/global_actions";
import { getCart } from "../src/redux/actions/cart_actions";



const App: FC = () => {
  const dispatch = useDispatch();
  const totalProducts: any = useSelector(
    (state: Store) => state.productsReducer.totalProducts
  );

  //Paginate
  // const [order, setOrder] = useState<string>("");
  //uso estados locales para el paginado
  const [currentPage, setCurrentPage] = useState(1); // empiezo en la pag 1
  const pages = (pageNum: number): void => {
    setCurrentPage(pageNum);
  };
  const productsPerPage: number = 9;
  let lastIdx: number = currentPage * productsPerPage; // en la primera página, lastIdx = 1 * 9 = 9
  let firstIdx: number = lastIdx - productsPerPage; // en la primera página, firstIdx = 9 - 9 = 0
  let currentProducts: Array<Product> = totalProducts.slice(firstIdx, lastIdx); // en la primera página, currentCharacters = countries.slice(0,9)
  ///////////

  const showCart = useSelector((state: Store) => state.globalReducer.showCart);
  //cart modal -
  const toggleModal: any = () => {
    dispatch(toggleCart());
  };
  // <-

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  return (
    <Theme /* none="none" */>
      <GlobalStyle />
      <Router>
        <NavBar setPage={setCurrentPage} toggleModal={toggleModal} />
        <CartSideBar closeCallback={toggleModal} show={showCart} />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/home">
            <Home
              setPage={setCurrentPage}
              currentProducts={currentProducts}
              productsPerPage={productsPerPage}
              pages={pages}
            />
          </Route>
          <Route exact path="/cart" component={CartSideBar} />
          <Route exact path="/game/:id" component={ProductDetail} />
          <Route exact path="/form" component={FormProduct} />
          <Route exact path="/admin" component={AdminPanel} />
          <Route exact path="/login" component={FormLogin} />
          <Route exact path="/register" component={FormRegister} />
          <Route exact path="/createGenre" component={FormGenre} />
          <Route exact path="/createPlatform" component={FormPlatform} />
          <Route exact path="/terms" component={Terms} />
          <Route exact path="/privacy" component={Privacy} />
          <Route exact path="/legal" component={Legal} />
          <Route exact path="/about" component={About} />
          <Route exact path="/order" component={Order} />

          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </Router>
      <ToastContainer />
      <GlobalStyle />
    </Theme>
  );
};

export default App;
