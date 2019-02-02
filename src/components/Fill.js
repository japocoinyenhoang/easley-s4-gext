import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Fill extends Component {
  render() {
    return (
      <div className="fill-page">
        <div className="fill-page__form">
          <form>
            <label for=""></label>
            <input id="" type="text"></input>
          </form>
        </div>
        <div className="row d-flex justify-content-around">
          <div className="fill-page__btn back-btn">
            <button type="button" className="btn btn-light"><Link to="/steps/choose">Back</Link></button>
          </div>
          <div className="fill-page__btn next-btn">
            <button type="button" className="btn btn-light"><Link to="/steps/success">Next</Link></button>
          </div>
        </div>
      </div>
    );
  }
}

export default Fill;
