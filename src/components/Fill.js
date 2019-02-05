import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Fill extends Component {
  render() {
    const {handleInputName, handleInputEmail, handleInputPhone} = this.props;
    return (
      <div className="fill-page">
        <div className="fill-page__form">
          <form>
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" onKeyUp={handleInputName}/>
            <label htmlFor="email">Email </label>
            <input id="email" type="email" onKeyUp={handleInputEmail}></input>
            <label htmlFor="phone">Phone Number: </label>
            <input id="phone" type="number" onKeyUp={handleInputPhone}></input>


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
