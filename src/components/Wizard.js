import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Wizard extends Component {
  render() {
    return (
      <div className="wizard">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="wizard-list nav">
            <li className="wizard__item step1 nav-item">
              <Link className="nav-link active" to="/steps/choose">Choose your template</Link>
            </li>
            <li className="wizard__item step2 nav-item">
              <Link className="nav-link" to="/steps/fill">Fill the fields</Link>
            </li>
            <li className="wizard__item step3 nav-item">
              <Link className="nav-link" to="/steps/success">Review and download</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Wizard;
