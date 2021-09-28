import React, { FC } from "react";
import { Home, NotFound, Landing } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from "./components";

const App: FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route path="/" component={NavBar} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
