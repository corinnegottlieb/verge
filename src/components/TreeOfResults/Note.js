import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';

@inject("lumberYard")
@observer
class Note extends Component {
    
    
    addNote = (event)=>{
        console.log(event.target.value)
        console.log(event.target.name)
        this.props.lumberYard.handleInput(event.target.value)
        this.props.lumberYard.findTopicByNameAndAddNote(event.target.name)
        }

    render() {

        return (
            <div>
          <textarea name={this.props.name} value={this.props.lumberYard.currentNote || ''} placeholder="search" onChange={this.addNote}></textarea>
            </div>
        )
    }
}

export default Note