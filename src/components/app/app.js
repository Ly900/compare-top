import React from 'react';
import logo from '../../images/logo.svg';
import './app.scss';
import CompareTop from '../compare-top/compare-top.js';

function App() {
  return (
    <div className="App compare-top">
      <CompareTop />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link"
          href="https://reactjs.org"
          target="_blank"
          el="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
