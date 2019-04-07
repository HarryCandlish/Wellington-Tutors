import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="nav">
          <div className="one">
            <a href="#" className="navLinks">
              Home
            </a>
          </div>
          <div className="two">
            <a href="#" className="navLinks">
              Tutors
            </a>
          </div>
          <div className="three">
            <a href="#" className="navLinks">
              About
            </a>
          </div>
          <div className="four">
            <a href="#" className="navLinks">
              Guidelines
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
