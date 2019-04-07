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
            <img className="images" src="images/profile.png" />
            <div className="text-block">
              <h3>Profile</h3>
            </div>
          </div>
          <div className="topic1">
            <img className="images" src="images/criteria.png" />
            <div className="text-block">
              <h3>Criteria</h3>
            </div>
          </div>
          <div className="topic1">
            <img className="images" src="images/tutors.jpg" />
            <div className="text-block">
              <h3>Tutors</h3>
            </div>
          </div>
          <div className="topic1">
            <img className="images" src="images/software.jpg" />
            <div className="text-block">
              <h3>Software</h3>
            </div>
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
