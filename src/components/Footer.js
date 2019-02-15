import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <footer className="footer-container container-fluid">
        <div className="col-12 d-flex justify-content-center">
          <div className="footer-text">Developed in Adalab by <Link className="link__about-us" to="/about">Gext Team</Link> in colaboration with Triporate © | 2019</div>
        </div>
      </footer>
    );
  }
}

export default Footer;
