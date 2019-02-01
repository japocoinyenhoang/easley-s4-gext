import React, { Component } from 'react';
import './App.scss';
import Home from './components/Home';
import Steps from './components/Steps';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="app-container">

          <Home />
          <Steps />
        <Footer />
      </div>
    );
  }
}

export default App;
