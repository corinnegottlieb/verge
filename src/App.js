import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import { observer } from 'mobx-react'
import NavBar from './components/NavBar/Navbar';

@observer
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
        </div>
      </Router>
    );
  }
}

export default App;