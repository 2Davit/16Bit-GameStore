import React, { FC } from "react";
import { Home, NotFound, Landing } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App: FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path = '/' component={Landing} />
        <Route exact path = '/home' component={Home} />
        <Route path = '*' component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
