import React, {Component} from "react";
import logoHeader from '../images/logo__gext_header.png';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="header-container fluid-container row">
        <div className="header__logo col-auto mr-auto">
          <Link to="/"><img src={logoHeader} alt="Gext logo"></img></Link>
        </div>
        <div className="header__link col-auto"><a>How it works</a></div>
      </header>
    );
  }
}

export default Header;
