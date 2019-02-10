import React, { Component } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header';
import Wizard from './Wizard';
import Choose from './Choose';
import Fill from './Fill';
import Success from './Success';

class Steps extends Component {
  render() {
    const { clientId, scopes, signIn, handleSignoutClick, inputs, handleInputs, selectedTemplate, handleTemplate, handleArrayInputs } = this.props;
    if (signIn) {
      return (
        <div className="steps-container">
          <Header handleSignoutClick={handleSignoutClick} />
          <main className="main-container">
            <Wizard />
            <Switch>
              <Route path="/steps/choose" render={props => <Choose clientId={clientId} scopes={scopes} handleTemplate={handleTemplate}/>} />
              <Route path="/steps/fill" render={props =>
                <Fill handleInputs={handleInputs}
                  inputs={inputs}
                  handleArrayInputs={handleArrayInputs}
                  selectedTemplate={selectedTemplate} />} />
              <Route path="/steps/success" component={Success} />
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
