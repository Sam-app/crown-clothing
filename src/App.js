import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import HomePage from "./components/pages/homepage/HomePage.componenet";
import ShopPage from "./components/pages/shoppage/ShopPage.component";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
