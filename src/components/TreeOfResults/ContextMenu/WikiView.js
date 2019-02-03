import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

// @inject("lumberYard")
// @observer
class WikiView extends Component {

  render() {
    return (
      <a><div>Open Topic in new tab</div></a>
    )
  }
}

export default WikiView;

