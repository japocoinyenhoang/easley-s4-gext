import React, { Component } from "react";
import Header from './Header';
import Footer from './Footer';
import Wizard from './Wizard';

class Success extends Component {
  render() {
    return (
      <div className="success-page">
        <Header />
        <Wizard />
        <div className="success-page__icons">

        </div>
        <div className="success-page__btn view-btn">
          <button>View your presentation</button>
        </div>
        <div className="success-page__btn download-btn">
          <button>Download your presentation</button>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Success;
