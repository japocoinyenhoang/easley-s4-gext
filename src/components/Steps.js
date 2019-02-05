import React, {Component} from "react";
import {Route, Switch, Redirect} from 'react-router-dom';
import Header from './Header';
import Wizard from './Wizard';
import Choose from './Choose';
import Fill from './Fill';
import Success from './Success';

class Steps extends Component {
  render() {
    const{discoveryDocs, clientId, scopes, signIn, handleSignoutClick, apiKey} = this.props;
    if (signIn) {
      return (
        <div className="steps-container">
          <Header handleSignoutClick={handleSignoutClick} />
          <main className="main-container">
            <Wizard />
            <Switch>
              <Route path="/steps/choose" render={props => <Choose clientId={clientId} discoveryDocs={discoveryDocs} scopes={scopes} apiKey={apiKey} signIn={signIn}/>}/>
              <Route path="/steps/fill" component={Fill}/>
              <Route path="/steps/success" component={Success}/>
            </Switch>
          </main>
        </div>
      );

    }else{
      return <Redirect to = '/' />
    }
  }
}

export default Steps;
