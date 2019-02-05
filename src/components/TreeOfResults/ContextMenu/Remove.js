import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject("lumberYard")
@observer
class Remove extends Component {

  remove = (event) => {
    this.props.lumberYard.findTopicByNameAndRemove(event.target.name)
    this.props.lumberYard.updateTOR()
  }
  render() {
    return (
      <button className="open-note-button brown-text text-darken-4 btn-small waves-effect waves-light #4db6ac teal lighten-2"
        name={this.props.name} onClick={this.remove}>
        <i className="large material-icons">clear</i>
      </button>
    )
  }
}

export default Remove;