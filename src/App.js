import React, { Component } from 'react';
import './PageStyles/mediaStyles.css'
import Pages from './Components/Pages.js';
// import Nav from './Components/Nav.js';
import NavButton from './Components/NavButton.js';
import Loading from './Components/Loading.js';
import './Styles/App.css';
import {BrowserRouter as Router} from 'react-router-dom'
class App extends Component {

  render() {
    return (
      <div className="App">
      <Router>
        <>
          <Loading/>
          <NavButton/>
          <Pages/>
        </>
      </Router>
      </div>
    );
  }
}

export default App;
