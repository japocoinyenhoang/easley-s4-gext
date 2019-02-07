import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Fill extends Component {
  constructor(props) {
    super(props);

    this.loadSlidesApi = this.loadSlidesApi.bind(this);
    this.listSlides = this.listSlides.bind(this);
  }

  loadSlidesApi() {
    window.gapi.client.load('slides', 'v1').then(this.listSlides);
  }

  listSlides() {
    const presentationId = '1C3ThRHIdUdcgMKtsEAhEyOfYFmJcHHFHrXZX3QrxkXY';

    let requests = [];
    requests.push({
      replaceAllText: {
        containsText: {
          text: '{{name}}'
        },
        replaceText: this.props.name
      }
    });
    requests.push({
      replaceAllText: {
        containsText: {
          text: '{{email}}'
        },
        replaceText: this.props.email
      }
    });
    requests.push({
      replaceAllText: {
        containsText: {
          text: '{{phoneNumber}}'
        },
        replaceText: this.props.phoneNumber
      }
    });

    window.gapi.client.slides.presentations.batchUpdate({
      presentationId: presentationId,
      requests: requests
    }).then((response) => {
      console.log(response);
      console.log("??????");
    });
  }

  render() {
    const { handleInputName, handleInputEmail, handleInputPhone } = this.props;
    return (
      <div className="fill-page">
        <div className="fill-template__result">
          <div id="result">{this.props.selectedTemplate}</div>
          <div className="fill-page__btn back-btn">
              <button type="button" className="btn btn-light"><Link to="/steps/choose">Choose another template</Link></button>
          </div>
        </div>
        <div className="fill-page__form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input className="form-control " id="name" type="text" onKeyUp={handleInputName} />
              <label htmlFor="email">Email:</label>
              <input className="form-control" id="email" type="email" onKeyUp={handleInputEmail}></input>
              <label htmlFor="phone">Phone Number:</label>
              <input className="form-control" id="phone" type="number" onKeyUp={handleInputPhone}></input>
            </div>
          </form>
        </div>
        <div className="row d-flex justify-content-around">
          <div className="fill-page__btn back-btn">
            <button type="button" className="btn btn-light"><Link to="/steps/choose">Back</Link></button>
          </div>
          <div className="fill-page__btn next-btn">
            <button type="button" className="btn btn-light" onClick={this.loadSlidesApi}><Link to="/steps/success">Next</Link></button>
          </div>
        </div>
      </div>
    );
  }
}

export default Fill;
