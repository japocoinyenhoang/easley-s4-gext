import React, { Component } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header';
import Wizard from './Wizard';
import Choose from './Choose';
import Fill from './Fill';
import Success from './Success';
import HorizontalLabelPositionBelowStepper from './HorizonalLabelPositionBelowSteppers';

class Steps extends Component {
  render() {
    const { clientId, scopes, signIn, handleSignoutClick, handleInputName, handleInputEmail, handleInputPhone, name, email, phoneNumber, selectedTemplate, handleTemplate } = this.props;
    if (signIn) {
      return (
        <div className="steps-container">
          <Header handleSignoutClick={handleSignoutClick} />
          <main className="main-container">
          <Wizard/>
            <HorizontalLabelPositionBelowStepper />
            <Switch>
              <Route path="/steps/choose" render={props => <Choose clientId={clientId} scopes={scopes} handleTemplate={handleTemplate}/>} />
              <Route path="/steps/fill" render={props =>
                <Fill handleInputName={handleInputName}
                  handleInputEmail={handleInputEmail}
                  handleInputPhone={handleInputPhone}
                  name={name}
                  email={email}
                  phoneNumber={phoneNumber}
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
