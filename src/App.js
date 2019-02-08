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
      inputs: {
        name: '',
        email: '',
        phoneNumber: '',
      },
      signIn: false,
      selectedTemplate: '',
      loadingHome: true,
      presentationId:''
    }

    this.updateStateLogin = this.updateStateLogin.bind(this);
    this.handleSignoutClick = this.handleSignoutClick.bind(this);
    this.handleInputName = this.handleInputName.bind(this);
    this.handleInputEmail = this.handleInputEmail.bind(this);
    this.handleInputPhone = this.handleInputPhone.bind(this);
    this.handleTemplate = this.handleTemplate.bind(this);
    this.handlePresentationId = this.handlePresentationId.bind(this);
  }

  handleInputName(e) {
    const { inputs } = this.state;
    const newName = { ...inputs, name: e.currentTarget.value };
    this.setState({
      inputs: newName
    })
  }

  handleInputEmail(e) {
    const { inputs } = this.state;
    const newEmail = { ...inputs, email: e.currentTarget.value };
    this.setState({
      inputs: newEmail
    })
  }


  handleInputPhone(e) {
    const { inputs } = this.state;
    const newPhone = { ...inputs, phoneNumber: e.currentTarget.value };
    this.setState({
      inputs: newPhone
    })
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

  handleTemplate(msg){
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
              handleInputName={this.handleInputName}
              handleInputEmail={this.handleInputEmail}
              handleInputPhone={this.handleInputPhone}
              name={inputs.name}
              email={inputs.email}
              phoneNumber={inputs.phoneNumber}
              selectedTemplate={selectedTemplate}
              handleTemplate={this.handleTemplate}
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
