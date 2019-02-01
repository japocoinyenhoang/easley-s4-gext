import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <header className="header-container">
          <div className="header__logo">
            <img src="" alt=""></img>
          </div>
          <div className="header__link"><a>How it works</a></div>
        </header>
        <main className="main-container">
          <div className="home-page">
          {/* header */}
            <div className="home-page__btn">
              <button type="button">Sign in</button>
            </div>
          {/* footer */}
          </div>
          <div className="choose-page">
            {/* header */}
            <div className="wizard">
              <div className="wizard__item step1">Choose your template</div>
              <div className="wizard__item step2">Fill the fields</div>
              <div className="wizard__item step3">Review and download</div>
            </div>
            <div className="choose-page__btn select-btn">
              <button type="button">Select template</button>
            </div>
            <div className="choose-page__btn upload-btn">
              <button type="button">Upload template</button>
            </div>
            {/* footer */}
          </div>
          <div className="fill-page">
            {/* header */}
            {/* wizard */}
            <div className="fill-page__form">
              <form>
                <label for=""></label>
                <input id="" type="text"></input>
              </form>
            </div>
            <div className="fill-page__btn back-btn">
              <button type="button">Back</button>
            </div>
            <div className="fill-page__btn next-btn">
              <button type="button">Next</button>
            </div>
            {/* footer */}
          </div>
          <div className="success-page">
            {/* header */}
            {/* wizard */}
            <div className="success-page__icons">

            </div>
            <div className="success-page__btn view-btn">
              <button>View your presentation</button>
            </div>
            <div className="success-page__btn download-btn">
              <button>Download your presentation</button>
            </div>
            {/* footer */}
          </div>
        </main>
        <footer className="footer-container">

        </footer>
      </div>
    );
  }
}

export default App;
