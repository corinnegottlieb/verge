import React, { Component } from 'react';
import Note from '../Note';
import Popup from 'reactjs-popup';

class OpenNote extends Component {

// showNotePopup =()=>{
// this.props.lumberYard.showNote = !this.props.lumberYard.showNote 
// }

  render() {
    return (<div>
      <Popup
    trigger={  <div className="open-note-button">Open Note Editor</div>}
    modalcloseOnDocumentClick
    >
      <Note cTOR={this.props.cTOR} /> 
  
    </Popup>
  
      </div>
    )
  }
}

export default OpenNote;