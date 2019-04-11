import React, { Component } from "react";

class Technologies extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="techGrid">
            <div className="techHeader">
              <h2>Technologies</h2>
            </div>
          </div>
        </div>
        <div className="techBodyGrid">
          <div className="techContent">
            <a href="#">
              <img className="techImages" src="images/profile.jpg" />
            </a>
            <div className="techTextBlock">
              <h3>React</h3>
              <p>Description:</p>
            </div>
          </div>
          <div className="techContent">
            <a href="#">
              <img className="techImages" src="images/curriculum.jpg" />
            </a>
            <div className="techTextBlock">
              <h3>Redux</h3>
              <p>Description:</p>
            </div>
          </div>
          <div className="techContent">
            <a href="#">
              <img className="techImages" src="images/tutors.jpg" />
            </a>
            <div className="techTextBlock">
              <h3>CSS/HTML</h3>
              <p>Description:</p>
            </div>
          </div>
          <div className="techContent">
            <a href="#">
              <img className="techImages" src="images/software.jpg" />
            </a>
            <div className="techTextBlock">
              <h3>Databases</h3>
              <p>Description:</p>
            </div>
          </div>
        </div>
        <div className="techBodyGrid">
          <div className="techContent">
            <a href="#">
              <img className="techImages" src="images/profile.jpg" />
            </a>
            <div className="techTextBlock">
              <h3>Back-End</h3>
              <p>Description:</p>
            </div>
          </div>
          <div className="techContent">
            <a href="#">
              <img className="techImages" src="images/curriculum.jpg" />
            </a>
            <div className="techTextBlock">
              <h3>Front-End</h3>
              <p>Description:</p>
            </div>
          </div>
          <div className="techContent">
            <a href="#">
              <img className="techImages" src="images/tutors.jpg" />
            </a>
            <div className="techTextBlock">
              <h3>Full-Stack</h3>
              <p>Description:</p>
            </div>
          </div>
          <div className="techContent">
            <a href="#">
              <img className="techImages" src="images/software.jpg" />
            </a>
            <div className="techTextBlock">
              <h3>Web-Design</h3>
              <p>Description:</p>
            </div>
          </div>
        </div>
        <div className="techBodyGrid">
          <div className="techContent">
            <a href="#">
              <img className="techImages" src="images/profile.jpg" />
            </a>
            <div className="techTextBlock">
              <h3>Testing</h3>
              <p>Description:</p>
            </div>
          </div>
          <div className="techContent">
            <a href="#">
              <img className="techImages" src="images/curriculum.jpg" />
            </a>
            <div className="techTextBlock">
              <h3>PHP</h3>
              <p>Description:</p>
            </div>
          </div>
          <div className="techContent">
            <a href="#">
              <img className="techImages" src="images/tutors.jpg" />
            </a>
            <div className="techTextBlock">
              <h3>Ruby</h3>
              <p>Description:</p>
            </div>
          </div>
          <div className="techContent">
            <a href="#">
              <img className="techImages" src="images/software.jpg" />
            </a>
            <div className="techTextBlock">
              <h3>React Native</h3>
              <p>Description:</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Technologies;
