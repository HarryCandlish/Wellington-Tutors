import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import Teachers from "./Teachers";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/teachers" component={Teachers} />
        </Router>
      </div>
    );
  }
}

export default App;
