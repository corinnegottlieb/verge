import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Popup from "reactjs-popup";

@inject("LumberYard")
@observer
class WikiView extends Component {
  render() {
    console.log(this.props.topic)
    return (
      <Popup
        trigger={<button className="black-text btn waves-effect waves-light #efebe9 brown lighten-5">{this.props.topic.name}</button>} position="right top">
        <iframe title="wikiVIEW" src={this.props.topic.link}
          width="600px"
          height="400px"
          position="relative" />
      </Popup>
    )
  }
}

export default WikiView

