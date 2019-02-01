import React, {Component} from "react";
import Header from './Header';
import Wizard from './Wizard';
import Choose from './Choose';
import Fill from './Fill';
import Success from './Success';
import Footer from './Footer';

class Steps extends Component {
  render() {
    return (
      <div className="steps-container">
        <Header />
        <main className="main-container">
          <Wizard />
          <Choose />
          <Fill />
          <Success />
        </main>
        <Footer />
      </div>
    );
  }
}

export default Steps;
