import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Home from './components/Home';
import Steps from './components/Steps';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientId: '754675357649-76ar45tndb0lcbqr59v1hqlm4aea3lrs.apps.googleusercontent.com',
      discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/slides/v1/rest"],
      scopes: "https://www.googleapis.com/auth/presentations https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.appdata https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.photos.readonly",
      inputs: [],
      imagesInputs: [],
      images: [],
      signIn: false,
      selectedTemplate: '',
      loadingHome: true,
      presentationId:'',
      copyId: '',
      open: false,
      name: ''
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
    this.handleCopyId = this.handleCopyId.bind(this);
    this.listSlidesReplace = this.listSlidesReplace.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.uploadImageDrive =this.uploadImageDrive.bind(this);
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

  handleTripleMoustaches(name, file) {
    console.log('esto es file', file);
    const target = name;
    //tranformar file a base64 y asignar eso a la constante value
    const { imagesInputs } = this.state;
    const url = [];
    const imageSave = this.state.images;
    let newValue = [];
    url.push(imageSave);
    const fr = new FileReader();
    const value = ()=> {fr.readAsDataURL(file).then( () => {
      newValue = imagesInputs.map(item => {
        if (item[0] === target){
          item[1] = value
        }
        return item;
      });
      console.log('funciono! estoy dentro de triplemoust');
      this.setState({
        imagesInputs: newValue,
        images: url
      })
    })};
  }

    handleChangeFile(event){
      console.log ('hasta aqui hemos llegado');
      const name = event.currentTarget.id;
      const myFile = event.currentTarget.files[0];
      const url = [];
      url.push(myFile);
      console.log('este es el archivo', myFile);
      this.setState({
        name: name,
        images: [...this.state.images, ...url],
      }, () => window.gapi.client.load('drive', 'v2').then(this.uploadImageDrive),
      console.log(this.state.images));
    }

    uploadImageDrive(){
      let file = this.state.images[0];
      console.log (file);
      console.log ('ya hemos entrado');
          // var file = $('#fileToUpload')[0].files[0];
      let metadata = {
        'name': file.name, // Filename at Google Drive
        'mimeType': file.type, // mimeType at Google Drive
        //'parents': ['### folder ID ###'], // Folder ID at Google Drive
      };
      let accessToken = window.gapi.auth.getToken().access_token; // Here gapi is used for retrieving the access token.
      let form = new FormData();
      form.append('metadata', new Blob([JSON.stringify(metadata)], {type: 'application/json'}));
      form.append('file', file);
      const xhr = new XMLHttpRequest();
      xhr.open('post', 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id');
      xhr.setRequestHeader('Authorization', 'Bearer' + accessToken);
      xhr.responseType = 'json';

      xhr.send(form);
      xhr.onload = () => {
        const body = {
          'value': "default",
          'type': "anyone",
          'role': "reader"
        };
        const request = window.gapi.client.drive.permissions.insert({
          'fileId': xhr.response.id,
          'resource': body
        })
        .then(() => {
          const name = this.state.name;
          const idImage = xhr.response.id;
          this.handleTripleMoustaches(name, idImage)})
        console.log(xhr.response); // Retrieve uploaded file ID.
          return request;
      };
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

  handleCopyId(id){
    this.setState ({
      copyId: id
    },() => {
      this.listSlidesReplace();
    }
    );
  }

  listSlidesReplace() {
    console.log('cojo input', this.state.inputs);
    let requests = [];
    this.state.inputs.map(item => {
      requests.push({
        replaceAllText: {
          containsText: {
            text: `{{${item[0]}}}`
          },
          replaceText: item[1]
        }
      });

      return requests;
    });
    this.state.imagesInputs.map(item =>{
      console.log('cojo imagesinput', this.state.imagesInputs);
      requests.push({
        replaceAllText:{
          containsText:{
            text: `{{{${item[0]}}}}`
          },
          replaceText: `https://drive.google.com/open?id=${item[1]}`
        }
      });
      console.log('esto es item1', item[1]);
      return requests;
    });
    window.gapi.client.slides.presentations.batchUpdate({
      presentationId: this.state.copyId,
      requests: requests
    }).then((response) => {
      console.log(response);
    });
  }

  render() {
    const { discoveryDocs, clientId, scopes, signIn, inputs, selectedTemplate, loadingHome, presentationId, copyId, open, imagesInputs } = this.state;
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
              handleCopyId={this.handleCopyId}
              copyId={copyId}
              handleOpen={this.handleOpen}
              handleClose={this.handleClose}
              open={open}
              />} />
          <Route path="/about" render={props =>
            <AboutUs/>} />
        </Switch>
        <div className="row">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
