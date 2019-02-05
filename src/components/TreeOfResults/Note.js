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
                <textarea placeholder="Enter notes" onChange={this.addNote} name={this.props.name}></textarea>
                <button name={this.props.name} onClick={this.saveNote}>Save</button>
            </div>
        )
    }
}

export default Note