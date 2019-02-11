import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from "prop-types";
import '../index.scss';
import btn_google from '../images/btn_google_signin.png';
import ReactLoading from 'react-loading';

class ApiLogin extends Component {
  constructor(props) {
    super(props);

    this.handleClientLoad = this.handleClientLoad.bind(this);
    this.initClient = this.initClient.bind(this);
    this.updateSigninStatus = this.updateSigninStatus.bind(this);
    this.handleAuthClick = this.handleAuthClick.bind(this);
    this.homeOrSteps = this.homeOrSteps.bind(this);
  }

  componentDidMount() {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    script.src = 'https://apis.google.com/js/api.js';
    script.onload = this.handleClientLoad;
    script.onreadystatechange = this.handleClientLoad;

    const tag = document.getElementsByTagName('script')[0];
    tag.parentNode.insertBefore(script, tag);

  }

  handleClientLoad() {
    window.gapi.load('client:auth2', this.initClient);
  }

  initClient() {
    window.gapi.client
      .init({
        discoveryDocs: this.props.discoveryDocs,
        clientId: this.props.clientId,
        scope: this.props.scopes
      })
      .then(() => {
        window.gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus);

        this.updateSigninStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get());
      });
  }

  updateSigninStatus(isSignedIn) {
    this.props.updateStateLogin(isSignedIn);
  }

  handleAuthClick() {
    window.gapi.auth2.getAuthInstance().signIn();
  }

  homeOrSteps(){
    if(this.props.signIn !== true){
      return  <ReactLoading type={'spinningBubbles'} color={'#990099'} height={100} width={100} />
    } else {
      return <Redirect to= '/steps/choose' />
    }
  }

  render() {
    if (!this.props.loadingHome){
      if(!this.props.signIn){
        return <button onClick={this.handleAuthClick} className="btn-login btn btn-light"><img className="google-signin" src={btn_google} alt="google logo" /></button>
      } else{
        return <Redirect to= '/steps/choose' />
      }
    } else {
      return(
        <Fragment>
          {this.homeOrSteps()}
        </Fragment>
      )
    }
  }
}

ApiLogin.propTypes = {
  discoveryDocs: PropTypes.arrayOf(PropTypes.string),
  clientId: PropTypes.string,
  scopes: PropTypes.string,
  updateStateLogin: PropTypes.func,
  signIn: PropTypes.bool,
  loadingHome: PropTypes.bool,
};

export default ApiLogin;
