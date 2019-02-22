import React, { Component } from 'react';
import logo from '../logo.png';
import '../stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
							This is the official documentation site for project Mathball.<br />
            Edit <code>src/components/App.js</code> in the deploy branch and save to reload.
          </p>
          <a
            className="App-link"
            href="https://github.com/pbiswas101/Mathball"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more about Mathball
          </a>
        </header>
      </div>
    );
  }
}

export default App;
