import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import Nav from "./Nav";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={Nav} />
        </Router>
      </div>
    );
  }
}

export default App;
