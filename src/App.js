import React, { Component } from 'react';
import './App.css';
import { observer } from 'mobx-react'
import Tor from './components/Tor';

@observer
class App extends Component {
  render() {
    return (
      <div className="App">
          <Tor/>
      </div>
    );
  }
}

export default App;
