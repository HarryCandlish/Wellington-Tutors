import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="nav">
          <ul>
            <li>
              <a href="#">Content</a>
              <ul>
                <li>
                  <a href="#">Tutors</a>
                </li>
                <li>
                  <a href="#">Software</a>
                </li>
                <li>
                  <a href="#">Guidelines</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
