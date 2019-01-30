import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import { observer } from 'mobx-react'
import NavBar from './components/NavBar/Navbar';
import Topic from './components/TreeOfResults/Topic';
import WikiView from './components/TreeOfResults/ContextMenu/WikiView';

@observer
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <WikiView />
          <Topic />
        </div>
      </Router>
    );
  }
}

export default App;