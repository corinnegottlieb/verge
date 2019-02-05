import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { observer } from 'mobx-react'
import NavBar from './components/NavBar/Navbar';
import TORView from './components/TreeOfResults/TORView';
import TORList from './components/TORList'


@observer
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          {/* <Route path="/TOR" exact component={Topic} /> */}
          <TORView />
          <Route path="/TOR" exact component={TORView} />
          <Route path="/TORList" exact component={TORList} />
        </div>
      </Router>
    );
  }
}

export default App;