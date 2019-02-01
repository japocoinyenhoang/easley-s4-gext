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
        <div className="fill-page__btn back-btn">
          <button type="button"><Link to="/choose">Back</Link></button>
        </div>
        <div className="fill-page__btn next-btn">
          <button type="button"><Link to="/success">Next</Link></button>
        </div>
      </div>
    );
  }
}

export default Fill;
