import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject("lumberYard")
@observer
class TrackTOR extends Component {
  render() {
    return (
      // <label>
      //   <input type="checkbox" className="filled-in" onClick={this.props.lumberYard.trackTOR} />
      //   <span>Track Tree</span>
      // </label>
      <div className="pin"><i class="fas fa-thumbtack"></i></div>
    )
  }
}

export default TrackTOR;
