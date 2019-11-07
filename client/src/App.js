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
    searchTerm: "",
    searchResults: []
  };

  search = event => {
    event.preventDefault();

    API.search(this.state.searchTerm)
      .then(res => {
        this.setState({
          searchTerm: "",
          searchResults: res.data.items
        })
      })
      .catch(err => console.log(err));
  }

  handleInput = (event) => {
    const searchTerm = event.target.value;
    this.setState({
      searchTerm
    });
  }

  render() {
    return (
      <Router>
        <div className="container-fluid">
          <AppNav
            onChange={this.handleInput}
            onClick={this.search}
            value={this.state.searchTerm}
          />

          <Switch>
            <Route exact path="/api/books">
              <Saved />
            </Route>
            <Route>
              <Home searchResults={this.state.searchResults} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
