import React, { Component } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header';
import Wizard from './Wizard';
import Choose from './Choose';
import Fill from './Fill';
import Success from './Success';

class Steps extends Component {
  render() {
<<<<<<< HEAD
    const { clientId, scopes, signIn, handleSignoutClick, inputs, handleInputs, handleTripleMoustaches, selectedTemplate, handleTemplate, presentationId, handlePresentationId, handleInitInputs, handleImagesInputs, handleChangeFile, fileInput, fakeClick, open, handleOpen, handleClose, imagesInputs} = this.props;
=======
   const { clientId, scopes, signIn, handleSignoutClick, inputs, handleInputs, selectedTemplate, handleTemplate, presentationId, handlePresentationId, handleInitInputs, handleImagesInputs, handleImages, open, handleOpen, handleClose, handleCopyId, copyId } = this.props;
>>>>>>> dev
    if (signIn) {
      return (
        <div className="steps-container">
          <Header handleSignoutClick={handleSignoutClick}
                  handleOpen={handleOpen}
                  handleClose={handleClose}
                  open={open} />
          <main className="main-container">
            <Wizard />
            <Switch>
              <Route path="/steps/choose" render={props =>
                <Choose clientId={clientId}
                  scopes={scopes}
                  handleTemplate={handleTemplate}
                  handlePresentationId={handlePresentationId}
                  handleOpen={handleOpen}
                  handleClose={handleClose}
                  open={open}/>} />
              <Route path="/steps/fill" render={props =>
                <Fill
                  handleInputs={handleInputs}
                  handleTripleMoustaches={handleTripleMoustaches}
                  inputs={inputs}
                  imagesInputs={imagesInputs}
                  handleInitInputs={handleInitInputs}
                  handleImagesInputs={handleImagesInputs}
<<<<<<< HEAD
                  handleChangeFile={handleChangeFile}
                  selectedTemplate={selectedTemplate}
                  presentationId={presentationId}
                  fakeClick={fakeClick}
                  fileInput={fileInput}/>}
                  />
              <Route path="/steps/success" render = {props =>
                  <Success
                  presentationId={presentationId}
                  photos={this.props.photos}
                  />} />
=======
                  selectedTemplate={selectedTemplate}
                  presentationId={presentationId}
                  handleCopyId={handleCopyId}
                  copyId={copyId} />} />
              <Route path="/steps/success" render = {props =>
                  <Success
                  copyId={copyId} />} />
>>>>>>> dev
            </Switch>
          </main>
        </div>
      );

    } else {
      return <Redirect to='/' />
    }
  }
}

export default Steps;
