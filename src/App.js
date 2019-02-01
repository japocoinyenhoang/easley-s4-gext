import React, { Component } from 'react';
import './App.scss';
import Choose from './components/Choose';
import Header from './components/Header';
import Fill from './components/Fill';
import Success from './components/Success';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Header />
        <main className="main-container">
          <div className="home-page">
          {/* header */}
            <div className="home-page__btn">
              <button type="button">Sign in</button>
            </div>
          {/* footer */}
          </div>
          <Choose />
          <Fill />
          <Success />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
