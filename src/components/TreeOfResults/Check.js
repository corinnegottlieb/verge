import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject("lumberYard")
@observer
class Check extends Component {
  toggleChecked = () => {
    this.props.lumberYard.togglePropery(this.props.nodeName, 'checked')
    return this.props.lumberYard.currentTOR[this.props.lumberYard.currentRoot].tracked
      ? this.props.lumberYard.updateProperty(this.props.nodName, 'checked')
      : null
  }
  render() {
    return (
      <input type="checkbox"></input>
        // <input checked={this.props.lumberYard.currentTOR[this.props.nodeName].checked}
        //                     type="checkbox" className="check" onChange={this.toggleChecked}></input>
    )
  }
}

export default Check;

