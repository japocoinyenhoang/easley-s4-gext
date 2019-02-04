import React, {Component} from "react";
import HeaderHome from './HeaderHome';
import logo from '../images/logo__gext_st.png';
// import GoogleLogin from './GoogleLogIn';
import ApiLogin from './ApiLogin';

class Home extends Component {

  render (){
    const {clientId, discoveryDocs, scopes, updateStateLogin, signIn } = this.props;
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
                {/* <GoogleLogin signIn={this.props.signIn} clientId={this.props.clientId}/> */}
                <ApiLogin  clientId={clientId} discoveryDocs={discoveryDocs} scopes={scopes} updateStateLogin={updateStateLogin} signIn={signIn}/>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Home;
