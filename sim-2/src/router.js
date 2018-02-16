//import each wizard, nextbutton, hashrouter, route
//export nextbutton and wizards using Route component wrapped in a div wrapped in hashrouter
import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import LandingPage from './components/LandingPage/LandingPage';
import Dashboard from './components/Dashboard/Dashboard';
import WizardOne from './components/WizardOne/WizardOne';
import WizardTwo from './components/WizardTwo/WizardTwo';
import WizardThree from './components/WizardThree/WizardThree';
import WizardFour from './components/WizardFour/WizardFour';
import WizardFive from './components/WizardFive/WizardFive';

export default (
    <HashRouter>
      <div>
        
        <Route component = {LandingPage} exact path = '/' />
        <Route component = {Dashboard} path = '/dashboard' />
        <Route component = {WizardOne} path = '/wizard/one' />
        <Route component = {WizardTwo} path = '/wizard/two' />
        <Route component = {WizardThree} path = '/wizard/three' />
        <Route component = {WizardFour} path = '/wizard/four' />
        <Route component = {WizardFive} path = '/wizard/five' />
      
      </div>
    </HashRouter>
)
