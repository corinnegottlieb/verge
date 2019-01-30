import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject("LumberYard")
@observer
class TrackTOR extends Component {
  render() {
    return (
      <label>
        <input type="checkbox" className="filled-in" onClick={this.props.LumberYard.trackTOR} />
        <span>Track Tree</span>
      </label>
    )
  }
}

export default TrackTOR
