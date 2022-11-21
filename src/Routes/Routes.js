import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import Home from "../pages/Home/Home"
const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
