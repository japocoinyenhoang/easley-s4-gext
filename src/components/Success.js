import React, { Component } from "react";

class Success extends Component {
  render() {
    return (
      <div className="success-page container-fluid">
        <div className="success-page__icons">
          <i class="fas fa-check"></i>
          <i class="fas fa-thumbs-up"></i>
        </div>
        <div className="row d-flex justify-content-around">
          <div className="success-page__btn">
            <button className="btn btn-outline-primary"><a classname="link-success" href="https://docs.google.com/presentation/d/1C3ThRHIdUdcgMKtsEAhEyOfYFmJcHHFHrXZX3QrxkXY/">View your presentation</a>
            </button>
          </div>
          <div className="success-page__btn download-btn">
            <button className="btn btn-outline-primary"><a classname="link-success" href="https://docs.google.com/presentation/d/1C3ThRHIdUdcgMKtsEAhEyOfYFmJcHHFHrXZX3QrxkXY/edit?usp=download">Download your presentation</a></button>
          </div>
        </div>
      </div>
    );
  }
}

export default Success;
