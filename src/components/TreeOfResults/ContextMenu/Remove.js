import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject("lumberYard")
@observer
class Remove extends Component {

  remove=(event)=>{
    console.log(event.target.name)
    this.props.lumberYard.findTopicByNameAndRemove(event.target.name)
  }
  render() {
    return (
      <button name={this.props.name} onClick={this.remove}>Remove Topic</button>
    )
  }
}

export default Remove;