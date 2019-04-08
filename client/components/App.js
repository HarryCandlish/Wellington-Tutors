import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import Teachers from "./Teachers";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={Teachers} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
