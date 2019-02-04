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
      },
      signIn: false,
    }

  }

  componentDidMount() {

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
