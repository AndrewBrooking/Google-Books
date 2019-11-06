import React, { Component } from "react";
import AppNav from "./components/AppNav";
import Home from "./pages/Home";
import Saved from "./pages/Saved";

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <AppNav />

        <Switch>
          <Route exact path="/api/books" component={Saved} />
          <Route component={Home} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
