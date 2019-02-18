import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Chetan Gadgil's Project Site
          </p>
          <ul>
            <li><a href='http://finance.google.com'>Stock Market</a></li>
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
