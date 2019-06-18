import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Dashboard from "./features/dashboard";
import Highcharts from "./features/highcharts/hooks";

const Router = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/highcharts" component={Highcharts} />
    </BrowserRouter>
  );
};

export default Router;
