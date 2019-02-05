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
    
    // saveNote =(event)=>{
    //     console.log(event.target.name)
    //     this.props.lumberYard.findTopicByNameAndAddNote(event.target.name)
    //     }
addNote = (event)=>{
    if (event.which === 13) {
        this.props.lumberYard.findTopicByNameAndAddNote(event.target.name, event.target.value)
    }
}

    render() {

        return (
            <div>
          <textarea name={this.props.name} placeholder="Enter notes..." onKeyDown={this.addNote}></textarea>
          {/* <button name ={this.props.name} onClick={this.saveNote}>Save</button> */}
            </div>
        )
    }
}

export default Note