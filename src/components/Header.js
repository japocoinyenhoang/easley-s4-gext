import React, {Component} from "react";
import logoHeader from '../images/logo__gext_header.png';

class Header extends Component {
  render() {
    return (
      <header className="header-container">
        <div className="header__logo">
          <img src={logoHeader} alt="Gext logo"></img>
        </div>
        <div className="header__link"><a>How it works</a></div>
      </header>
    );
  }
}

export default Header;
