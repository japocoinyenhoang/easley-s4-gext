import React, { Component } from "react";
import logoHeader from '../images/logo__gext_header.png';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import btn_google from '../images/btn_google.svg';

class Header extends Component {
  render() {
    return (
      <header className="header-container fluid-container row">
        <div className="header__logo col-auto mr-auto">
          <Link to="/"><img src={logoHeader} alt="Gext logo"></img></Link>
        </div>
        <button type="button" className="btn-signout btn btn-light" onClick={this.props.handleSignoutClick}><img src={btn_google} className="google-logo" alt="google logo" />Sign Out</button>
        <div className="header__link col-auto"><a href="#j">How it works</a></div>
        <div className='header__about-us'>
            <Link className="link__about-us" to="/about">About us</Link>
        </div>
      </header>
    );
  }
}
Header.propTypes={
  handleSignoutClick: PropTypes.func
}

export default Header;
