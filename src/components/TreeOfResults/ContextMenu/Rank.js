import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject("LumberYard")
@observer
class Rank extends Component {


  render() {
    return (
      <div>
        <i className="material-icons">thumb_up</i>
        <i className="material-icons">thumb_down</i>
      </div>
    )
  }
}

export default Rank

/*
To do
- button (i tag) functionality
*/