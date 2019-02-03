import React, { Component } from 'react';

class OpenNote extends Component {
  render() {
    return (
      <div onClick={this.showNote}>Open Note Editor</div>
    )
  }
}

export default OpenNote;