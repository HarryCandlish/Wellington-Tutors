import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import Home from "./Home";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={Home} />
        </Router>
      </div>
    );
  }
}

export default App;
