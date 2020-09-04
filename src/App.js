import React, {Component} from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import Index from './pages/index';

class App extends Component{
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/index" component={Index}/>
        </Switch>
      </Router>

    );
  }
}
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Paige and Mike's Web App
        </a>
      </header>
    </div>
  );
}*/

export default App;
