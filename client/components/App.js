import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import Teachers from "./Teachers";
import Home from "./Home";
import Nav from "./Nav";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={Nav} />
            <Route exact path="/" component={Home} />
            <Route exact path="/teachers" component={Teachers} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
