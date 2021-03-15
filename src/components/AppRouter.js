import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import PageNotFound from "./PageNotFound";
import Header from "./Header";
import AddNewHero from "./forms/AddNewHero";
import CardHeroAll from "./CardHero/CardHeroAll";
import HeroUpdate from "./forms/HeroUpdate";
import CardView from "./CardHero/CardView";

class AppRouter extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/add" component={AddNewHero} />
            <Route path="/update/:id" component={HeroUpdate} />
            <Route path="/list" exact component={CardHeroAll} />
            <Route path="/list/:id" component={CardView} />
            <Route component={PageNotFound} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
