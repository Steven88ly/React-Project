import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Users from "./user/pages/Users.js";
import NewPlace from "./places/pages/NewPlace.js";
import MainNavigation from "./places/shared/components/Navigation/MainNavigation.js";
import UserPlaces from "./places/pages/UserPlaces.js";

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact component={Users} />
          <Route path="/places/new" exact component={NewPlace} />
          <Route path='/:userId/places' exact component={UserPlaces}/>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
