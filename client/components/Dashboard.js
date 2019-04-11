import React, { Component } from "react";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="profileTitleGrid">
          <div className="profileHeaderGrid">
            <div>
              <h2>Profile</h2>
            </div>
            <img className="profileTitleImage" src="images/profilepage.jpg" />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
