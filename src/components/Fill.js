import React, { Component } from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

class Fill extends Component {

  render() {
    const { handleInputName, handleInputEmail, handleInputPhone, presentationId } = this.props;
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
};

export default Fill;
