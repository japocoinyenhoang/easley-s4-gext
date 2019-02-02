import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.scss';
import Home from './components/Home';
import Steps from './components/Steps';
import Footer from './components/Footer';

class App extends Component {

  render() {
    return (
      <div className="app-container">
        <div className="container-fluid">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/steps" render={props => <Steps />}/>
          </Switch>
          <div className="row">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
