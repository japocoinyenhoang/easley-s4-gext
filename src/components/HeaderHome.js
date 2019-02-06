import React, { Component } from "react";

class HeaderHome extends Component {
  render() {
    return (
      <header className="header-container container-fluid">
        <div className="col-12 d-flex justify-content-end">
          <div className="header__link">
            <a href="#jj">How it works</a>
          </div>
        </div>
      </header>
    );
  }
}

export default HeaderHome;
