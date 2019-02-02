import React, { Component } from "react";

class Success extends Component {
  render() {
    return (
      <div className="success-page container-fluid">
        <div className="success-page__icons">

        </div>
        <div className="row d-flex justify-content-around">
          <div className="success-page__btn view-btn bg-primary">
            <button type="button" className="btn btn-secondary">View your presentation</button>
          </div>
          <div className="success-page__btn download-btn ">
            <button type="button" className="btn btn-secondary">Download your presentation</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Success;
