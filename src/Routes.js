import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Signup from "./Signup";
import Navbar from "./Navbar";

const Routes = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
};

export default Routes;
