import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Home from './components/Home';
import Steps from './components/Steps';
import Footer from './components/Footer';

const fr = new FileReader();


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientId: '754675357649-76ar45tndb0lcbqr59v1hqlm4aea3lrs.apps.googleusercontent.com',
      discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/slides/v1/rest"],
      scopes: "https://www.googleapis.com/auth/presentations https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.appdata https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.photos.readonly",
      inputs: [],
      imagesInputs: [],
      images: {photos:''},
      signIn: false,
      selectedTemplate: '',
      loadingHome: true,
      presentationId:'',
      open: false
    }

    this.fileInput = React.createRef();


    this.updateStateLogin = this.updateStateLogin.bind(this);
    this.handleSignoutClick = this.handleSignoutClick.bind(this);
    this.handleInputs = this.handleInputs.bind(this);
    this.handleTripleMoustaches = this.handleTripleMoustaches.bind(this);
    this.handleChangeFile = this.handleChangeFile.bind(this);
    this.handleTemplate = this.handleTemplate.bind(this);
    this.handleInitInputs = this.handleInitInputs.bind(this);
    this.handleImagesInputs = this.handleImagesInputs.bind(this);
    this.handlePresentationId = this.handlePresentationId.bind(this);
    this.fakeClick = this.fakeClick.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
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
  handleImagesInputs(data) {
    let newArray = [];
    if(data !== undefined) {
      data.map(item => {
        newArray.push([item,'']);
        return newArray
      });

      this.setState({
        imagesInputs: newArray
      });
      console.log('aqui capturo los inputs de las imagenes')
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
      imagesInputs: newValue
    });
  }

  handleTripleMoustaches(e) {
    const target = e.currentTarget.id;
    const value = e.currentTarget.value;
    const { inputs, images } = this.state;
    const url = fr.result;
    const newImages={...images, photos: url};
    let newValue = [];
    newValue = inputs.map(item => {
      if (item[0] === target){
        item[1] = value
      }
      return item;
    });

    this.setState({
      inputs: newValue,
      images: newImages
    });
    console.log('hemos sido engañaos');
    console.log (newImages);
  }
    // Loading image
    fakeClick(){
      this.fileInput.current.click();
    }


    handleChangeFile(event){
      console.log ('hasta aqui hemos llegado');
      const myFile = event.currentTarget.files[0];
      fr.addEventListener('load', this.handleTripleMoustaches);
      fr.readAsDataURL(myFile);
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
    const { discoveryDocs, clientId, scopes, signIn, inputs, selectedTemplate, loadingHome, presentationId, open, imagesInputs } = this.state;
    return (
      <div className="app-container container-fluid">
        <Switch>
          <Route exact path="/" render={props =>
            <Home clientId={clientId}
              discoveryDocs={discoveryDocs}
              scopes={scopes}
              updateStateLogin={this.updateStateLogin}
              signIn={signIn}
              loadingHome={loadingHome}
              handleOpen={this.handleOpen}
              handleClose={this.handleClose}
              open={open}
              />} />
          <Route path="/steps" render={props =>
            <Steps handleSignoutClick={this.handleSignoutClick}
              signIn={signIn}
              clientId={clientId}
              scopes={scopes}
              handleInputs={this.handleInputs}
              handleTripleMoustaches={this.handleTripleMoustaches}
              inputs={inputs}
              imagesInputs={imagesInputs}
              selectedTemplate={selectedTemplate}
              handleTemplate={this.handleTemplate}
              handleInitInputs={this.handleInitInputs}
              handleImagesInputs={this.handleImagesInputs}
              handleChangeFile={this.handleChangeFile}
              presentationId= {presentationId}
              handlePresentationId={this.handlePresentationId}
              photos={this.state.images.photos}
              fakeClick={this.fakeClick}
              fileInput={this.fileInput}
              handleOpen={this.handleOpen}
              handleClose={this.handleClose}
              open={open}
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
