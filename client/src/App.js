import React, { Component } from "react";
import AppNav from "./components/AppNav";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import API from "./API";

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

class App extends Component {
  state = {
    books: {}
  }

  search = term => {
    API.search(term)
      .then(res => this.setState({ books: res.data.results }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Router>
        <div className="container-fluid">
          <AppNav search={search} />

        <Switch>
          <Route exact path="/api/books">
            <Saved />
          </Route>
          <Route>
            <Home  />
          </Route>
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
