import React, { Component } from "react";

class Success extends Component {
  render() {
    return (
      <div className="success-page container-fluid">
        <div className="success-page__icons">

        </div>
        <div className="row d-flex justify-content-around">
          <div className="success-page__btn view-btn bg-primary">
            <div className="btn btn-secondary"><a href="https://docs.google.com/presentation/d/1C3ThRHIdUdcgMKtsEAhEyOfYFmJcHHFHrXZX3QrxkXY/">View your presentation</a></div>
          </div>
          <div className="success-page__btn download-btn ">
            <div className="btn btn-secondary"><a href="https://docs.google.com/presentation/d/1C3ThRHIdUdcgMKtsEAhEyOfYFmJcHHFHrXZX3QrxkXY/edit?usp=download">Download your presentation</a></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Success;
