import React, { Component } from "react";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="profileTitleGrid">
          <div className="profileHeaderGrid">
            <div>
              <h2>Student Profile</h2>
            </div>
            <img className="profileTitleImage" src="images/profilepage.jpg" />
            <div className="profileBodyGrid">
              <div className="profileContentOne">
                <h3>Tutors</h3>
                <p>Associated</p>
              </div>
              <div className="profileContentTwo">
                <h3>About</h3>
                <p>
                  Attempting to gain a better understanding of software
                  development
                </p>
              </div>
              <div className="profileContentThree">
                <h3>Technologies</h3>
                <p>Learnt</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
