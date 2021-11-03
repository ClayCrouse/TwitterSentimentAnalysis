import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../HomePage";
import PlotPage from "../PlotPage";
import AboutPage from "../AboutPage";

const Links = () => {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/plot">
              <PlotPage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default Links;
