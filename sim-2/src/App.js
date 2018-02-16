import React, { Component } from 'react';
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
      <div id="root">
        { router }
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps) (App);
