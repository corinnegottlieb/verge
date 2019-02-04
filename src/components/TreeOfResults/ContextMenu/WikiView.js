import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Popup from "reactjs-popup";

@inject("lumberYard")
@observer
class WikiView extends Component {
  render() {
    return (
      <Popup
        trigger={<button className="black-text btn waves-effect waves-light #efebe9 brown lighten-5">{this.props.topic.name}</button>} position="right center">
        <iframe title="wikiVIEW" src={this.props.topic.url}
          width="1010px"
          height="550px"
          position="relative" />
      </Popup>
    )
  }
}

export default WikiView

