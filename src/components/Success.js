import React, { Component } from "react";

class Success extends Component {
  render() {
    return (
      <div className="success-page">
        <div className="success-page__icons">

        </div>
        <div className="success-page__btn view-btn">
          <button>View your presentation</button>
        </div>
        <div className="success-page__btn download-btn">
          <button>Download your presentation</button>
        </div>
      </div>
    );
  }
}

export default Success;
