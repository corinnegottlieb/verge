import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { observer } from 'mobx-react'
import NavBar from './components/NavBar/Navbar';
import Topic from './components/TreeOfResults/Topic';
import WikiView from './components/TreeOfResults/ContextMenu/WikiView';
import Rank from './components/TreeOfResults/ContextMenu/Rank';
import Note from './components/TreeOfResults/Note';
// import TORView from './components/TreeOfResults/TORView';

@observer
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route path="/TOR" exact component={Topic} />
        </div>
      </Router>
    );
  }
}

export default App;