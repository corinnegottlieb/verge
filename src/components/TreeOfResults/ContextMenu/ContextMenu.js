import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
// import OpenNote from './OpenNote';
// import Remove from './Remove';
// import WikiView from './WikiView';

@inject('lumberYard')
@observer
class ContextMenu extends Component {
    toggleProperty = (event) => {
        console.log(event.target.dataset.property)
        this.props.lumberYard.toggleProperty(this.props.nodeName, event.target.dataset.property)
    }
    removeTopic = () => {
        this.props.lumberYard.removeTopic(this.props.nodeName)
    }
    render() { 
        return (
            <div className="context-menu">
                <button data-property="renderNote" onClick={this.toggleProperty}>edit note</button>
                <button onClick={this.removeTopic}>remove subtopic</button>
                <button>add subtopic</button>
                <button>peek at source</button>
                <button>link document</button>
            </div>
        )
    }
}

export default ContextMenu;