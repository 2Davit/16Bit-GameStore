import React, { FC } from "react";
import { Home, NotFound, Landing, CartSideBar, ProductDetail } from "./pages/";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyles/GlobalStyles";
import { Theme } from "./Theme";
import FormProduct from "./components/Forms/FormProduct";
import AdminPanel from "./components/AdminPanel/AdminPanel";


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
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
      <GlobalStyle />
    </Theme>
  );
};

export default App;
