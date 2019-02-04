import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject("lumberYard")
@observer
class Check extends Component {
  markAsRead = (event) => {
    console.log(event.target.name)
this.props.lumberYard.findTopicByNameAndMarkAsRead(event.target.name)  
}
  render() {
    return (
      <label>
        <input type="checkbox" name={this.props.name} onClick={this.markAsRead} />
        <span>Mark as read</span>
      </label>
    )
  }
}

export default Check;

