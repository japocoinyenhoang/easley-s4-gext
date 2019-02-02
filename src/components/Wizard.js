import React, {Component} from "react";
import {Link} from 'react-router-dom';


class Wizard extends Component {
  render() {
    return (
      <div className="wizard">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="wizard-list collapse navbar-collapse navbar-nav">
            <li className="wizard__item step1 nav-item active nav-link">
              <Link to={`${this.props.match.url}/choose`}>Choose your template</Link>
            </li>
            <li className="wizard__item step2 nav-item nav-link">
              <Link to={`${this.props.match.url}/fill`}>Fill the fields</Link>
            </li>
            <li className="wizard__item step3 nav-item nav-link">
              <Link to={`${this.props.match.url}/success`}>Review and download</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Wizard;
