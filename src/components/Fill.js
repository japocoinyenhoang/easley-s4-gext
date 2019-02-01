import React, { Component } from "react";

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
          <button type="button">Back</button>
        </div>
        <div className="fill-page__btn next-btn">
          <button type="button">Next</button>
        </div>
      </div>
    );
  }
}

export default Fill;
