import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Popup from "reactjs-popup";

@inject("TESTstore")
@observer
class WikiView extends Component {
  render() {
    return (
      <Popup trigger={<button className="btn waves-effect waves-light"> Popup</button>} position="right center">
        <iframe title="wikiVIEW" src="https://en.wikipedia.org/wiki/Samurai"
          width="600px"
          height="400px"
          position="relative" />
      </Popup>
    )
  }
}

export default WikiView
