import React, { Component } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header';
import Wizard from './Wizard';
import Choose from './Choose';
import Fill from './Fill';
import Success from './Success';

class Steps extends Component {
  render() {
    const { clientId, scopes, signIn, handleSignoutClick, inputs, handleInputs, handleInputName, handleInputEmail, handleInputPhone, name, email, phoneNumber, selectedTemplate, handleTemplate, presentationId, handlePresentationId, handleInitInputs } = this.props;
    if (signIn) {
      return (
        <div className="steps-container">
          <Header handleSignoutClick={handleSignoutClick} />
          <main className="main-container">
            <Wizard />
            <Switch>
              <Route path="/steps/choose" render={props =>
                <Choose clientId={clientId}
                  scopes={scopes}
                  handleTemplate={handleTemplate}
                  name={name}
                  email={email}
                  phoneNumber={phoneNumber}
                  handlePresentationId={handlePresentationId}/>} />
              <Route path="/steps/fill" render={props =>
                <Fill
                  handleInputs={handleInputs}
                  inputs={inputs}
                  handleInitInputs={handleInitInputs}
                  handleInputName={handleInputName}
                  handleInputEmail={handleInputEmail}
                  handleInputPhone={handleInputPhone}
                  selectedTemplate={selectedTemplate}
                  presentationId={presentationId} />} />
              <Route path="/steps/success" render = {props =>
                  <Success
                  presentationId={presentationId} />} />
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
