import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject("lumberYard")
@observer
class TrackTOR extends Component {
  
  toggleTracked = () => {
    if (this.props.lumberYard.currentTOR.tracked && window.confirm('Are you sure you want to stop tracking this topic?')) {
      this.props.lumberYard.toggleTracked()
    } else if (!this.props.lumberYard.currentTOR.tracked) {
      this.props.lumberYard.toggleTracked()
    }
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
