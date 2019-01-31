import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import SavedList from './SavedList';

@inject("LumberYard")
@observer
 class LoadSaved extends Component {

  loadSavedTreeNames = async() => {
  await this.props.LumberYard.getAllTrackedTORs()
    // console.log(this.props.LumberYard.savedTORs)
  }

  render() {
    // console.log(this.props.LumberYard.savedTORs[0] || {})
    return (
      <div>
        <button onClick={this.loadSavedTreeNames}>Load saved TOR</button>
        <SavedList />
      </div>
    )
  }
}
export default LoadSaved
/*
To do
- button functionality
*/