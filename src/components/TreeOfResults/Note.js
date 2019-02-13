import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';

@inject("lumberYard")
@observer
class Note extends Component {
    updateNote = (event) => {
        this.props.lumberYard.updateVal(this.props.nodeName, 'note', event.target.value)
    }
    toggleNote = () => {
        this.props.lumberYard.toggleProperty(this.props.nodeName, 'renderNote')
    }

    render() {
        return (
            <div className="note">
                <button className="exit-button" onClick={this.toggleNote}>X</button>
                <textarea value={this.props.lumberYard.currentTOR[this.props.nodeName].note}
                    onChange={this.updateNote} className="note-text"></textarea>
                <button className="save-button">save</button>
            </div>
        )
    }
    // saveNote = () => {
    //     this.props.lumberYard.updateTOR()
    // }

    // addNote = (event) => {
    //     this.props.lumberYard.findTopicByNameAndAddNote(event.target.name, event.target.value)

    // }

    // render() {

    //     return (
    //         <div className="input-field">
    //             <textarea id="textarea1" className="materialize-textarea"
    //                 name={this.props.cTOR.name}
    //                 value={this.props.cTOR.note ? this.props.cTOR.note : null}
    //                 onChange={this.addNote}></textarea>
    //             <label for="textarea1">{this.props.cTOR.note ? null : 'Enter notes...'}</label>
    //             <button name={this.props.cTOR.name}
    //                 onClick={this.saveNote}
    //                 className="brown-text text-darken-4 btn-small waves-effect waves-light #4db6ac teal lighten-2">
    //                 <i className="large material-icons">save</i>
    //             </button>
    //         </div>
    //     )
    // }
}

export default Note