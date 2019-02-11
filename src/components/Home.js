import React, { Component } from "react";
import HeaderHome from './HeaderHome';
import logo from '../images/logo__gext.png';
import ApiLogin from './ApiLogin';

class Home extends Component {

  render() {
    const { clientId, discoveryDocs, scopes, updateStateLogin, signIn, loadingHome } = this.props;
    return (
      <div className="home-page">
        <div className="row">
          <HeaderHome />
        </div>
        <div className="row home-content">
          <main className="main-container container-fluid">
            <h1 className="d-none">Gext, presentations with superpowers</h1>
            <div className="col-12 d-flex flex-column align-items-center">
              <img src={logo} alt="Gext logo"></img>
              <div className="home-page__btn">
                <ApiLogin clientId={clientId} discoveryDocs={discoveryDocs} scopes={scopes} updateStateLogin={updateStateLogin} signIn={signIn} loadingHome={loadingHome} />
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Home;
