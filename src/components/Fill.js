import React, { Component } from "react";
import Header from './Header';
import Footer from './Footer';
import Wizard from './Wizard';

class Fill extends Component {
  render() {
    return (
      <div className="fill-page">
        <Header />
        <Wizard />
        <div className="fill-page__form">
          <form>
            <label for=""></label>
            <input id="" type="text"></input>
          </form>
        </div>
        <div className="fill-page__btn back-btn">
          <button type="button">Back</button>
        </div>
        <div className="fill-page__btn next-btn">
          <button type="button">Next</button>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Fill;
