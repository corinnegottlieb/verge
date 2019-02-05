import React, { Component } from 'react';
import Note from '../Note';
import Popup from 'reactjs-popup';

class OpenNote extends Component {

  render() {
    return (
      <Popup
        trigger={<button className="open-note-button brown-text text-darken-4 btn-small waves-effect waves-light #4db6ac teal lighten-2">
          <i className="large material-icons">note_add</i>
        </button>}
        modal closeOnDocumentClick>
        <Note cTOR={this.props.cTOR} />
      </Popup>
    )
  }
}

export default OpenNote;