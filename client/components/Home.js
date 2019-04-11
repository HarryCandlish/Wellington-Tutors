import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="homeTitleGrid">
          <div className="homeHeaderGrid">
            <div>
              <h2>Central Tutoring</h2>
            </div>
            <img className="homeTitleImage" src="images/teaching.jpg" />
          </div>
        </div>
        <div className="homeBodygrid">
          <div className="bodyContentGrid">
            <a href="#">
              <img className="homeImages" src="images/profile.jpg" />
            </a>
            <div className="homeTextBlock">
              <p>Profile</p>
            </div>
          </div>
          <div className="bodyContentGrid">
            <a href="#">
              <img className="homeImages" src="images/curriculum.jpg" />
            </a>
            <div className="homeTextBlock">
              <p>Curriculum</p>
            </div>
          </div>
          <div className="bodyContentGrid">
            <a href="#/tutors">
              <img className="homeImages" src="images/tutors.jpg" />
            </a>
            <div className="homeTextBlock">
              <p>Tutors</p>
            </div>
          </div>
          <div className="bodyContentGrid">
            <a href="#/tech">
              <img className="homeImages" src="images/software.jpg" />
            </a>
            <div className="homeTextBlock">
              <p>Software</p>
            </div>
          </div>
        </div>
        <div className="homeFooterGrid">
          <div className="homeAboutGrid">
            <h3> Our Purpose</h3>
          </div>
          <div className="homeAboutGrid">
            <p>Help people learn how to code</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
