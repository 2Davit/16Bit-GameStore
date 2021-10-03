import React, { FC } from "react";
import { Home, NotFound, Landing, CartSideBar, ProductDetail } from "./pages/";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyles/GlobalStyles";
import { Theme } from "./Theme";
import FormProduct from "./components/Forms/FormProduct";
import {FormGenre} from './components/Forms/FormGenre'
import {FormPlatform} from './components/Forms/FormPlatform'
import AdminPanel from "./components/AdminPanel/AdminPanel";
import FormUser from "./components/Forms/FormUser";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App: FC = () => {
  return (
    <Theme /* none="none" */>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/cart" component={CartSideBar} />
          <Route exact path="/game/:id" component={ProductDetail} />
          <Route exact path="/form" component={FormProduct} />
          <Route exact path="/admin" component={AdminPanel} />
          <Route exact path="/createUser" component={FormUser} />
          <Route exact path="/createGenre" component={FormGenre} />
          <Route exact path="/createPlatform" component={FormPlatform} />


          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
      <ToastContainer />
      <GlobalStyle />
    </Theme>
  );
};

export default App;
