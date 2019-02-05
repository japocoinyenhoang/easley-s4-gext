import React, { Component } from "react";

class Success extends Component {
  render() {
    return (
      <div className="success-page container-fluid">
        <div className="success-page__icons">

        </div>
        <div className="row d-flex justify-content-around">
          <div className="success-page__btn">
            <button className="btn btn-secondary"><a href="https://docs.google.com/presentation/d/1C3ThRHIdUdcgMKtsEAhEyOfYFmJcHHFHrXZX3QrxkXY/">View your presentation</a>
            </button>
          </div>
          <div className="success-page__btn download-btn">
            <button className="btn btn-secondary" ><a href="https://docs.google.com/presentation/d/1C3ThRHIdUdcgMKtsEAhEyOfYFmJcHHFHrXZX3QrxkXY/edit?usp=download">Download your presentation</a></button>
          </div>
        </div>
      </div>
    );
  }
}

export default Success;
