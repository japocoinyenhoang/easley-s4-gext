import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Home from './components/Home';
import Steps from './components/Steps';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientId: '754675357649-76ar45tndb0lcbqr59v1hqlm4aea3lrs.apps.googleusercontent.com',
      discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/slides/v1/rest"],
      scopes: "https://www.googleapis.com/auth/presentations https://www.googleapis.com/auth/drive",
      inputs: [],
      signIn: false,
      selectedTemplate: '',
      loadingHome: true,
      presentationId:''
    }

    this.updateStateLogin = this.updateStateLogin.bind(this);
    this.handleSignoutClick = this.handleSignoutClick.bind(this);
    this.handleInputs = this.handleInputs.bind(this);
    this.handleTemplate = this.handleTemplate.bind(this);
    this.handleInitInputs = this.handleInitInputs.bind(this);
    this.handlePresentationId = this.handlePresentationId.bind(this);
  }

  handleInitInputs(data) {
    let newArray = [];
    if(data !== undefined) {
      data.map(item => {
        newArray.push([item,'']);
        return newArray
      });

      this.setState({
        inputs: newArray
      });
    }

  }

  handleInputs(e) {
    const target = e.currentTarget.id;
    const value = e.currentTarget.value;
    const { inputs } = this.state;

    let newValue = [];
    newValue = inputs.map(item => {
      if (item[0] === target){
        item[1] = value
      }
      return item;
    });

    this.setState({
      inputs: newValue
    });
  }

  updateStateLogin(isSignedIn) {
    if (isSignedIn) {
      this.setState({
        signIn: true,
        loadingHome: true
      })
    } else {
      this.setState({
        signIn: false,
        loadingHome: false
      })
    }
  }

  handleSignoutClick() {
    window.gapi.auth2.getAuthInstance().signOut();
    this.setState({
      signIn: false,
      loadingHome: false,
    })
  }

  handleTemplate(msg, id){
    this.setState ({
      selectedTemplate: msg
    });
  }

  handlePresentationId(id){
    this.setState ({
      presentationId: id
    });
  }

  render() {
    const { discoveryDocs, clientId, scopes, signIn, inputs, selectedTemplate, loadingHome, presentationId } = this.state;
    return (
      <div className="app-container container-fluid">
        <Switch>
          <Route exact path="/" render={props =>
            <Home clientId={clientId}
              discoveryDocs={discoveryDocs}
              scopes={scopes}
              updateStateLogin={this.updateStateLogin}
              signIn={signIn}
              loadingHome={loadingHome}/>} />
          <Route path="/steps" render={props =>
            <Steps handleSignoutClick={this.handleSignoutClick}
              signIn={signIn}
              clientId={clientId}
              scopes={scopes}
              handleInputs={this.handleInputs}
              inputs={inputs}
              selectedTemplate={selectedTemplate}
              handleTemplate={this.handleTemplate}
              handleInitInputs={this.handleInitInputs}
              presentationId= {presentationId}
              handlePresentationId={this.handlePresentationId}
              />} />
        </Switch>
        <div className="row">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
