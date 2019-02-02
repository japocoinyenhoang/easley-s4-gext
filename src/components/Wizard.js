import React, {Component} from "react";
import {Link} from 'react-router-dom';

class Wizard extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link active" to="/steps/choose">Choose your template</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/steps/fill">Fill the fields</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/steps/success">Review and download</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Wizard;
