import React, { Component } from 'react';
import './App.css';
import logo from './images/logo__gext_st.png';
import logoHeader from './images/logo__gext_header.png';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header>
          <div className="header__logo">
            <img src={logoHeader} alt="Gext logo"></img>
          </div>
          <div className="header__link"><a>How it works</a></div>
        </header>

        <main>
          <div className="home-page">
          {/* header */}
            <div>
              <img src={logo} alt="Gext logo"></img>
              <h2>Presentations with <span>superpowers</span></h2>
              <button>Sign in</button>
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
            <div>
              <button>Select template</button>
            </div>
            <div>
              <button>Upload template</button>
            </div>
            {/* footer */}
          </div>
          <div className="fill-page">
            {/* header */}
            {/* wizard */}
            <div className="fill-page__form">
              <form>
                <label></label>
                <input type="text"></input>
              </form>
            </div>
            {/* footer */}
          </div>
        </main>

        <footer>

        </footer>
      </div>
    );
  }
}

export default App;
