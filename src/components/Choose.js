import React, {Component} from "react";
import Header from './Header';
import Footer from './Footer';
import Wizard from './Wizard';

class Choose extends Component {
  render() {
    return (
      <div className="choose-page">
        <Header />
        <Wizard />
        <div className="choose-page__btn select-btn">
          <button type="button">Select template</button>
        </div>
        <div className="choose-page__btn upload-btn">
          <button type="button">Upload template</button>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Choose;
