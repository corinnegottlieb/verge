import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';

@inject("lumberYard")
@observer
class Note extends Component {


    // addNote = (event)=>{
    //     console.log(event.target.value)
    //     console.log(event.target.name)
    //     this.props.lumberYard.handleInput(event.target.value)
    // }
    
    saveNote = () => {
        this.props.lumberYard.updateTOR()
    }

    addNote = (event) => {
        this.props.lumberYard.findTopicByNameAndAddNote(event.target.name, event.target.value)

    }

    render() {

        return (
            <div>
                <textarea className="note-textarea" name={this.props.cTOR.name} placeholder="Enter notes..." value={this.props.cTOR.note ? this.props.cTOR.note : null} onChange={this.addNote}></textarea>
                <button name={this.props.cTOR.name} onClick={this.saveNote}>Save</button>
            </div>
        )
    }
}

export default Note