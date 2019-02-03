import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import { observer } from 'mobx-react'
import NavBar from './components/NavBar/Navbar';
import TORView from './components/TreeOfResults/TORView';
import Topic from './components/TreeOfResults/Topic';
import WikiView from './components/TreeOfResults/ContextMenu/WikiView';
import Rank from './components/TreeOfResults/ContextMenu/Rank';
import Checked from './components/TreeOfResults/Checked';

@observer
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Topic />
          <Checked/>
          <TORView />
        </div>
      </Router>
    );
  }
}

export default App;