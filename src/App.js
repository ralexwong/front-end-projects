import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import history from './history';
import NoMatch from './NoMatch'
import home from './Home'

import StarRating from './projects/StarRating'
import Accordian from './projects/Accordian'


function App() {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/star-rating" component={StarRating} />
          <Route exact path="/accordian" component={Accordian} />

          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;