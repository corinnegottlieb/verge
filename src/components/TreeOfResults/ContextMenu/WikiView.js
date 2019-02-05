import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Popup from "reactjs-popup";

@inject("lumberYard")
@observer
class WikiView extends Component {

  render() {
    return (
      <Popup
        trigger={<button>WikiView</button>} position="right center">
        <iframe title="wikiVIEW" src={this.props.currentTopic.url}
          width="1010px"
          height="550px"
          position="relative" />
      </Popup>
    )
  }
}

export default WikiView