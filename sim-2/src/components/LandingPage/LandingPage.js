import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import authLogo from '../assets/auth_logo.png';
import './LandingPage.css'

class LandingPage extends Component {
    render(){
        return(
            <div>
              <div className = 'auth-div white_bgc'>
                <img className = 'auth-logo' src={authLogo} alt='Houser Logo'/>
                <span className = 'auth-input-header open-sans-bold'>Username</span>
                <input className = 'auth-input green-border' />
                <span className = 'auth-input-header open-sans-bold'>Password</span>
                <input className = 'auth-input green-border' />
                <div className = 'auth-button-div'>
                  <Link to = '/dashboard' > <button className = 'auth-button-login lightest-green-bgc open-sans-bold'>Login</button>
                  <button className = 'auth-button-register darkest-green-bgc open-sans-bold'>Register</button></Link>
                </div>
              </div>
            </div>
        )
    }
}

export default LandingPage;