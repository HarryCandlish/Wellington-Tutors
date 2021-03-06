import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import Tutors from "./Tutors";
import Home from "./Home";
import Nav from "./Nav";
import Technologies from "./Technologies";
import Dashboard from "./Dashboard";
import TutorDash from "./TutorDash";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route path="/" component={Nav} />
            <Route exact path="/" component={Home} />
            <Route exact path="/tutors" component={Tutors} />
            <Route exact path="/technologies" component={Technologies} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/tutor" component={TutorDash} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
