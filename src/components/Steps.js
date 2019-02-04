import React, {Component} from "react";
import {Route, Switch, Redirect} from 'react-router-dom';
import Header from './Header';
import Wizard from './Wizard';
import Choose from './Choose';
import Fill from './Fill';
import Success from './Success';

class Steps extends Component {
  render() {
    if (this.props.signIn) {
      return (
        <div className="steps-container">
          <Header handleSignoutClick={this.props.handleSignoutClick} />
          <main className="main-container">
            <Wizard />
            <Switch>
              <Route path="/steps/choose" component={Choose}/>
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
