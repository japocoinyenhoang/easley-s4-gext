import React, {Component} from "react";
import {Link} from 'react-router-dom';


class Wizard extends Component {
  render() {
    return (
      <div className="wizard">
        <nav>
          <ul className="wizard-list">
            <li className="wizard__item step1">
              <Link to="steps/choose">Choose your template</Link>
            </li>
            <li className="wizard__item step2">
              <Link to="steps/fill">Fill the fields</Link>
            </li>
            <li className="wizard__item step3">
              <Link to="steps/success">Review and download</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Wizard;
