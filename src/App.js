import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/pages/homepage/HomePage.componenet";

const HatsPage = () => (
  <div>
    <h1>Hats page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop/hats" component={HatsPage} />
    </div>
  );
}

export default App;
