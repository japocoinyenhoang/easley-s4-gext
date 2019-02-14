import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import SimpleModal from './SimpleModal';

class HeaderHome extends Component {
  render() {
    return (
      <header className="header-container container-fluid">
        <div className="col-12 d-flex justify-content-end">
          <div className="header__link">
          <Button onClick={this.props.handleOpen}>How it works</Button>
          <SimpleModal
              open={this.props.open}
              handleClose={this.props.handleClose}/>
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
