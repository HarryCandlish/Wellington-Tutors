import React, { Component } from "react";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="tutorDashTitleGrid">
          <div className="tutorDashHeaderGrid">
            <div>
              <h2>Tutor Profile</h2>
            </div>
            <img
              className="tutorDashTitleImage"
              src="images/tutorprofile.jpg"
            />
            <div className="tutorDashBodyGrid">
              <div className="tutorDashContentOne">
                <h3>Students</h3>
                <p>Associated</p>
              </div>
              <div className="tutorDashContentTwo">
                <h3>Details</h3>
                <p>Teach javaScript based technologies.</p>
              </div>
              <div className="tutorDashContentThree">
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
