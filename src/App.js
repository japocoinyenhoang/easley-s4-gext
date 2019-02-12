import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Home from './components/Home';
import Steps from './components/Steps';
import Footer from './components/Footer';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';


const themeApp = createMuiTheme({
  palette: {
    primary: {
      light: '#ad33ad',
      main: '#990099',
      dark: '#6b006b',
      contrastText: '#fff',
    },
    secondary: {
      light: '#5b5b5b',
      main: '#333333',
      dark: '#232323',
      contrastText: '#000',
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      'sans-serif'
    ].join(','),
    fontSize: 16
  }
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeStep: 0,
      chooseRoute: "/steps/choose",
      clientId: '754675357649-76ar45tndb0lcbqr59v1hqlm4aea3lrs.apps.googleusercontent.com',
      discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/slides/v1/rest"],
      scopes: "https://www.googleapis.com/auth/presentations https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.appdata https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.photos.readonly",
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

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

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
      <React.Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={themeApp}>
          <div className="app-container container-fluid">
            <Switch>
              <Route exact path="/" render={props =>
                <Home clientId={clientId}
                  discoveryDocs={discoveryDocs}
                  scopes={scopes}
                  updateStateLogin={this.updateStateLogin}
                  signIn={signIn}
                  loadingHome={loadingHome} />} />
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
                  presentationId={presentationId}
                  handlePresentationId={this.handlePresentationId}
                  handleBack={this.handleBack} handleNext={this.handleNext}
                />} />
            </Switch>
            <div className="row">
              <Footer />
            </div>
          </div>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default App;
