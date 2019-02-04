import React, {Component} from "react";
import HeaderHome from './HeaderHome';
import logo from '../images/logo__gext_st.png';
import GoogleLogin from './GoogleLogIn';
import {Link} from 'react-router-dom';

class Home extends Component {

  render (){
    return (
      <div className="home-page">
        <div className="row">
          <HeaderHome />
        </div>
        <div className="row">
          <main className="main-container container-fluid">
            <div className="col-12 d-flex flex-column align-items-center">
              <img src={logo} alt="Gext logo"></img>
              <h2>Presentations with <span>superpowers</span></h2>
              <div className="home-page__btn">
                <Link to = "/steps/choose"><button type="button" className="btn-light btn-outline-secondary">Sign in</button></Link>
                <GoogleLogin/>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Home;
