import React, {Component} from "react";
import {Route, Switch} from 'react-router-dom';
import Header from './Header';
import Wizard from './Wizard';
import Choose from './Choose';
import Fill from './Fill';
import Success from './Success';
import Footer from './Footer';

class Steps extends Component {
  render() {
    return (
      <div className="steps-container">
        <Header />
        <main className="main-container">
          <Wizard match = {this.props.match}/>
          <Switch>
            <Route path="/steps/choose" component={Choose}/>
            <Route path="/steps/fill" component={Fill}/>
            <Route path="/steps/success" component={Success}/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default Steps;
