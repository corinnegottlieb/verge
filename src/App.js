import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { observer } from 'mobx-react'
import NavBar from './components/NavBar/Navbar';
// import TORView from './components/TreeOfResults/TORView';
import Tree from './components/TreeOfResults/Tree';
import TORList from './components/TORList'
import TreeGraph from './components/Tree';


@observer
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route path="/TOR" exact component={Tree} />
          <Route path="/TORList" exact component={TORList} />
        </div>
      </Router>
    );
  }
}

export default App;