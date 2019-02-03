import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';

@inject("lumberYard")
@observer
class Note extends Component {
    
    handleInput = (e)=>{
        this.props.lumberYard.handleInput(e.target.name, e.target.value)
        console.log(e.target.value)
    }
    render() {

        return (
            <div>
          <textarea name="note" value={this.props.lumberYard.currentTOR.note} placeholder="search" onChange={this.handleInput}></textarea>
            </div>
        )
    }
}

export default Note