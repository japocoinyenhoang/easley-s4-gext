import React, {Component} from "react";
import HeaderHome from './HeaderHome';
import logo from '../images/logo__gext_st.png';
import Steps from './Steps';
import {Link} from 'react-router-dom';

class Home extends Component {
  render (){
    return (
      <div className="home-page">
          <HeaderHome/>
          <main className="main-container">
            <img src={logo} alt="Gext logo"></img>
            <h2>Presentations with <span>superpowers</span></h2>
            <div className="home-page__btn">
              <Link to = "/steps/choose"><button type="button">Sign in</button></Link>
            </div>
          </main>
      </div>
    );
  }
}

export default Home;
