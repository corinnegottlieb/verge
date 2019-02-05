import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject("lumberYard")
@observer
class TrackTOR extends Component {
  toggleTracked = () => {
    this.props.lumberYard.toggleTracked()
  }
  render() {
    return (
      <div className={`pin${this.props.lumberYard.currentTOR.tracked}`} onClick={this.toggleTracked}>
        <i className="fas fa-thumbtack"></i>
      </div>
    )
  }
}

export default TrackTOR;
