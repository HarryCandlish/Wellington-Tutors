import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="topGrid">
          <div className="headerGrid">
            <div>
              <h2 className="title">Central Tutoring</h2>
            </div>
            <img className="titleImage" src="images/teaching.jpg" />
          </div>
        </div>
        <div className="bodygrid">
          <div className="topic1">
            <a href="#">
              <img className="images" src="images/profile.jpg" />
            </a>
            <div className="text-block">
              <p className="titleGrids">Profile</p>
            </div>
          </div>
          <div className="topic1">
            <a href="#">
              <img className="images" src="images/curriculum.jpg" />
            </a>
            <div className="text-block">
              <p className="titleGrids">Curriculum</p>
            </div>
          </div>
          <div className="topic1">
            <a href="#/tutors">
              <img className="images" src="images/tutors.jpg" />
            </a>
            <div className="text-block">
              <p className="titleGrids">Tutors</p>
            </div>
          </div>
          <div className="topic1">
            <a href="#/tech">
              <img className="images" src="images/software.jpg" />
            </a>
            <div className="text-block">
              <p className="titleGrids">Software</p>
            </div>
          </div>
        </div>
        <div className="footergrid">
          <div className="aboutgrid">
            <h3> Our Purpose</h3>
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
