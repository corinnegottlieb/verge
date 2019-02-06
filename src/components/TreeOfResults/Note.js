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
                <label for="textarea1">{this.props.cTOR.note ? null : 'Enter notes...'}</label>
                <button name={this.props.cTOR.name}
                    onClick={this.saveNote}
                    className="brown-text text-darken-4 btn-small waves-effect waves-light #4db6ac teal lighten-2">
                    <i className="large material-icons">save</i>
                </button>
            </div>
        )
    }
}

export default Note