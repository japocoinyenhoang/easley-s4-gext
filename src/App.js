import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.scss';
import Home from './components/Home';
import Steps from './components/Steps';
import Footer from './components/Footer';

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="app-container">
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/steps/:id" render={props => {
              <Steps match={props.match}/>
            }}></Route>
      </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;
