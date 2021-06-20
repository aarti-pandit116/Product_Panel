import React, { Fragment } from "react";
import "./App.css";
import Home from "./components/Home.jsx";
import Details from "./components/Details.jsx";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Product from "./components/Product";
import Trash from './components/Trash';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/"  component={Home} />
          <Route exact path={`/Product/:id,:name,:price`} component={Details} />

          <Route exact path="/add"  component={Product} />
          <Route exact path={`/Product/:id,:name,:price`} component={Trash} />
          <Route exact path="/trash"  component={Trash} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
