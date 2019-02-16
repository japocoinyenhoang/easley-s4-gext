import React, { Component } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header';
import Choose from './Choose';
import Fill from './Fill';
import Success from './Success';
import Footer from './Footer';
import HorizontalLabelPositionBelowStepper from './HorizonalLabelPositionBelowSteppers';

class Steps extends Component {
  render() {
    const { clientId, scopes, signIn, handleSignoutClick, inputs, handleInputs, handleTripleMoustaches, selectedTemplate, handleTemplate, presentationId, handlePresentationId, handleInitInputs, handleImagesInputs,handleChangeFile, fileInput, fakeClick, open, handleOpen, handleClose, handleNext, handleBack, imagesInputs, handleCopyId, copyId } = this.props;
    if (signIn) {
      return (
        <div className="steps-container">
          <Header handleSignoutClick={handleSignoutClick}
                  handleOpen={handleOpen}
                  handleClose={handleClose}
                  open={open} />
          <main className="main-container">
          {/* <Wizard/> */}
            <HorizontalLabelPositionBelowStepper />
            <Switch>
              <Route path="/steps/choose" render={props =>
                <Choose clientId={clientId}
                  scopes={scopes}
                  handleTemplate={handleTemplate}
                  handlePresentationId={handlePresentationId}
                  handleOpen={handleOpen}
                  handleClose={handleClose}
                  handleNext={handleNext}
                  open={open}/>} />
              <Route path="/steps/fill" render={props =>
                <Fill
                  handleInputs={handleInputs}
                  handleTripleMoustaches={handleTripleMoustaches}
                  inputs={inputs}
                  imagesInputs={imagesInputs}
                  handleInitInputs={handleInitInputs}
                  handleImagesInputs={handleImagesInputs}
                  handleChangeFile={handleChangeFile}
                  selectedTemplate={selectedTemplate}
                  presentationId={presentationId}
                  handleBack={handleBack}
                  handleNext={handleNext}
                  handleCopyId={handleCopyId}
                  copyId={copyId}
                  fakeClick={fakeClick}
                  fileInput={fileInput}/>}
                  />
              <Route path="/steps/success" render = {props =>
                <Success
                  presentationId={presentationId}
                  photos={this.props.photos}
                  copyId={copyId}
                  />} />
            </Switch>
          </main>
          <Footer />
        </div>
      );
    } else {
      return <Redirect to='/' />
    }
  }
}

export default Steps;
