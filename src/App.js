import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.scss';
import Home from './components/Home';
import Steps from './components/Steps';
import Footer from './components/Footer';
import {sendApiKey} from './components/Credentials';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      presentationId: '1C3ThRHIdUdcgMKtsEAhEyOfYFmJcHHFHrXZX3QrxkXY',
      API_KEY : {sendApiKey},
      CLIENT_ID : '754675357649-76ar45tndb0lcbqr59v1hqlm4aea3lrs.apps.googleusercontent.com',
      DISCOVERY_DOCS : ["https://www.googleapis.com/discovery/v1/apis/slides/v1/rest"],
      SCOPES : "https://www.googleapis.com/auth/presentations https://www.googleapis.com/auth/drive",
      inputs: {
        name: '',
        email: '',
        phoneNumber: '',
      }
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.loadGapi();
  }

  loadGapi() {
    const script = document.createElement("script");

    script.src = "https://apis.google.com/js/client.js";

    script.onload = () => {
      window.gapi.load('client', () => {
        window.gapi.client.setApiKey(this.state.API_KEY);
        window.gapi.client.load('slides', 'v1', () => {
          this.setState({ gapiReady: true });
        });
      });
    };

    document.body.appendChild(script);
  }

  // loadClientWhenGapiReady= (script) => {
  //   if(script.getAttribute('gapi_processed')){
  //     if(window.location.hostname==='localhost'){
  //       gapi.client.load("http://localhost:8080/_ah/api/discovery/v1/apis/metafields/v1/rest")
  //     }
  //   }
  //   else{
  //     setTimeout(() => {this.loadClientWhenGapiReady(script)}, 100);
  //   }
  // }


  handleClick(e){
    console.log('has clicado');
    window.gapi.auth2.getAuthInstance().signIn();
    window.gapi.load('client:auth2', this.initClient());
  }

  initClient() {
    window.gapi.client.init({
      discoveryDocs: this.state.DISCOVERY_DOCS,
      clientId: this.state.CLIENT_ID,
      scope: this.state.SCOPES
    }).then(function () {
      // Listen for sign-in state changes.
      window.gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus());

      // Handle the initial sign-in state.
      this.updateSigninStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get());
      this.authorizeButton.onclick = this.handleAuthClick;
      this.signoutButton.onclick = this.handleSignoutClick;
    });
  }

  updateSigninStatus(isSignedIn){
     // if(isSignedIn){
    //   //pasame a "/steps/choose"
    //   //<Route path="/steps" render={props => <Steps />}/>
    //   loadSlidesApi();
    // } else {
    //   //pintas Home "/"
    // }
  }

  signIn(){

  }




  render() {
    return (
      <div className="app-container">
        <div className="container-fluid">
          <Switch>
            <Route exact path="/" render={props => <Home handleClick={this.handleClick}/>}/>
            <Route path="/steps" render={props => <Steps />}/>
          </Switch>
          <div className="row">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
