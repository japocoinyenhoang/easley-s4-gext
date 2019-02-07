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
          <a classname="link-success" href="https://docs.google.com/presentation/d/1C3ThRHIdUdcgMKtsEAhEyOfYFmJcHHFHrXZX3QrxkXY/"><button className="btn btn-outline-primary">View your presentation
          </button></a>
          </div>
          <div className="success-page__btn download-btn">
          <a classname="link-success" href="https://docs.google.com/presentation/d/1C3ThRHIdUdcgMKtsEAhEyOfYFmJcHHFHrXZX3QrxkXY/export/pptx" download="test.pptx"><button className="btn btn-outline-primary">Download your presentation</button></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Success;
