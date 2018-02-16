import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import router from './router';
import { connect } from 'react-redux';



class App extends Component {
  
//create a constructor that holds the state for each wizard
//bind each handleChange
//create handleChange for each wizard
//return in render { router } wrapped in a div
//mapState to props
//export using connect  
  
  
  
  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
