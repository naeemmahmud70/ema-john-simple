import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import Error from './components/Error/Error';
import Details from './components/Details/Details';



function App() {
  return (
    <div>
      <Header></Header>

      <Router>
        <Switch>

          <Route path="/shop">
            <Shop></Shop>
          </Route>

          <Route path="/review">
            <Review></Review>
          </Route>

          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>

          <Route path="/product/:productKey">
            <Details></Details>
          </Route>

          <Route  path="*">
            <Error></Error>
          </Route>

          <Route exact path="/">
            <Shop></Shop>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
