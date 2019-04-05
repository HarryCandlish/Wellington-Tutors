import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="topgrid">
          <div className="headergrid">
            <h1 className="heading">Central Tutoring</h1>
          </div>
        </div>
        <div className="bodygrid">
          <div className="topic1">
            <h4>Profile</h4>
          </div>
          <div className="topic1">
            <h4>Criteria</h4>
          </div>
          <div className="topic1">
            <h4>Tutors</h4>
          </div>
          <div className="topic1">
            <h4>Software</h4>
          </div>
        </div>
        <div className="footergrid">
          <div className="aboutgrid">
            <h3>Our Purpose</h3>
          </div>
          <div className="aboutgrid">
            <p>Help people learn how to code</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
