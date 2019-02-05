import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject("lumberYard")
@observer
class Check extends Component {
  markAsRead = (event) => {
    this.props.lumberYard.findTopicByNameAndMarkAsRead(event.target.name)
    this.props.lumberYard.updateTOR()
  }
  render() {
    return (
      <label>
        <input checked={this.props.cTOR.checked ? true : false} id="check" type="checkbox" name={this.props.cTOR.name} onClick={this.markAsRead} />
        <span></span>
      </label>
    )
  }
}

export default Check;

