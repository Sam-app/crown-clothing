import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import HomePage from "./components/pages/homepage/HomePage.componenet";
import ShopPage from "./components/pages/shoppage/ShopPage.component";
import SignInAndSignUpPage from "./components/pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
