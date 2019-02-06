import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';

@inject("lumberYard")
@observer
class Note extends Component {

    saveNote = () => {
        this.props.lumberYard.updateTOR()
    }

    addNote = (event) => {
        this.props.lumberYard.findTopicByNameAndAddNote(event.target.name, event.target.value)

    }

    render() {

        return (
            <div className="input-field">
                <textarea id="textarea1" className="materialize-textarea"
                    name={this.props.cTOR.name}
                    value={this.props.cTOR.note ? this.props.cTOR.note : null}
                    onChange={this.addNote}></textarea>
                <label for="textarea1">Enter notes...</label>
                <button name={this.props.cTOR.name} onClick={this.saveNote}>Save</button>
            </div>
        )
    }
}

export default Note

// "note-textarea"