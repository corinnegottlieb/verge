import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject("lumberYard")
@observer
class Rank extends Component {


  render() {
    return (
      <span>
        <i class="far fa-trash-alt"></i>
        <i class="far fa-thumbs-up"></i>
      </span>
    )
  }
}

export default Rank