import React, { Component } from "react";
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
        </div>
      </header>
    );
  }
}

export default HeaderHome;
