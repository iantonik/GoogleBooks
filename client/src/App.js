import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

import Search from "./pages/Search";


class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Search} />

        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
