import React, { Component } from "react";
import { Link } from 'react-router-dom';

class HeaderHome extends Component {
  render() {
    return (
      <header className="header-container container-fluid">
        <div className="col-12 d-flex justify-content-end">
          <div className="header__link">
            <a href="#jj">How it works</a>
          </div>
          <div className='header__about-us'>
            <Link className="link__about-us" to="/about">About us</Link>
          </div>
        </div>
      </header>
    );
  }
}

export default HeaderHome;
