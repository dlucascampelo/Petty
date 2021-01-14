import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import About from "./pages/About";
import SheltersMap from "./pages/SheltersMap";
import Shelter from "./pages/Shelter";
import CreateShelter from "./pages/CreateShelter";
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/about" component={About} />
        <Route path="/app" component={SheltersMap} />
        <Route path="/shelters/create" component={CreateShelter} />
        <Route path="/shelters/:id" component={Shelter} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
