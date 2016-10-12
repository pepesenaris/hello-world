import React, { Component } from 'react';
import Box from './Box';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <Box title="Good news" message="React uses components everywhere" />

          <Box message="JS itself is the template language">
            <p>
              ie, with a great power comes a great responsability
            </p>
          </Box>
        </div>
      </div>
    );
  }
}

export default App;
