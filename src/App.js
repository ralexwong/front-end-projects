import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import history from './history';
import NoMatch from './NoMatch'
import home from './Home'

import StarRating from './projects/StarRating'
import Accordian from './projects/Accordian'
import Counter from './projects/Counter'
import Calculator from './projects/Calculator'
import Popover from './projects/Popover'
import TicTacToe from './projects/TicTacToe'





function App() {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/star-rating" component={StarRating} />
          <Route exact path="/accordian" component={Accordian} />
          <Route exact path="/counter" component={Counter} />
          <Route exact path="/calculator" component={Calculator} />
          <Route exact path="/popover" component={Popover} />
          <Route exact path="/tictactoe" component={TicTacToe} />



          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;