import React, { Component } from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

const mockData = ['name', 'email', 'phoneNumber'];

class Fill extends Component {
  constructor(props) {
    super(props);

    this.loadSlidesApi = this.loadSlidesApi.bind(this);
    this.listSlides = this.listSlides.bind(this);
  }

  componentDidMount() {
    const data = mockData;
    this.props.handleInitInputs(data);
  }

  loadSlidesApi() {
    window.gapi.client.load('slides', 'v1').then(this.listSlides);
  }

  listSlides() {
    const presentationId = '1C3ThRHIdUdcgMKtsEAhEyOfYFmJcHHFHrXZX3QrxkXY';

    let requests = [];

    this.props.inputs.map(item => {
      requests.push({
        replaceAllText: {
          containsText: {
            text: `{{${item[0]}}}`
          },
          replaceText: item[1]
        }
      });

      return requests;
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
    const { handleInputs } = this.props;

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
            {mockData.map(item => {
              return (
                <div key={item} className="form-group">
                  <label htmlFor={item}>{item.toUpperCase()}:</label>
                  <input className="form-control " id={item} type="text" onKeyUp={handleInputs} />
                </div>
              );
            })}
          </form>
        </div>
        <div className="row d-flex justify-content-around">
          <div className="fill-page__btn back-btn">
          <Link to="/steps/choose"><button type="button" className="btn btn-light">Back</button></Link>
          </div>
          <div className="fill-page__btn next-btn">
          <Link to="/steps/success"><button type="button" className="btn btn-light" onClick={this.loadSlidesApi}>Next</button></Link>
          </div>
        </div>
      </div>
    );
  }
}
Fill.propTypes = {
  handleInputName: PropTypes.func,
  handleInputEmail: PropTypes.func,
  handleInputPhone: PropTypes.func,
  name: PropTypes.string,
  email: PropTypes.string,
  phoneNumber: PropTypes.number
};

export default Fill;

