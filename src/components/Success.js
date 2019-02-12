import React, { Component } from "react";


class Success extends Component {

  render() {

    let urlSlide = `https://docs.google.com/presentation/d/${this.props.presentationId}/`
    let urlDownload = `https://docs.google.com/presentation/d/${this.props.presentationId}/export/pptx`
    return (
      <div className="success-page container-fluid">
        <div className="success-page__icons">
          <i className="fas fa-check"></i>
          <i className="fas fa-thumbs-up"></i>
        </div>
        <div className="row d-flex justify-content-around">
          <div className="success-page__btn">
          <a className="link-success" href={urlSlide}><button className="btn btn-outline-primary">View your presentation
          </button></a>
          </div>
          <div className="success-page__btn download-btn">
          <a className="link-success" href= {urlDownload}
         download="test.pptx"><button className="btn btn-outline-primary">Download your presentation</button></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Success;
