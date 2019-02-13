import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import ContextMenu from './ContextMenu/ContextMenu';
import Note from './Note'
import TrackTOR from './TrackTOR'

import Check from './Check';
import { Link } from 'react-router-dom'

@inject("lumberYard")
@observer
class Tree extends Component {
    toggleContextMenu = (event) => {
        this.props.lumberYard.toggleProperty(event.target.id, 'renderMenu')
    }
    recursivelyBuildTree(nodeName) {
        let currentNode = this.props.lumberYard.currentTOR[nodeName]
        return (
            <div key={currentNode.name} className={`level${currentNode.level}`}>
                <div className="single-topic" onClick={this.toggleContextMenu} id={currentNode.name}>
                    {currentNode.name}
                </div>
                {currentNode.renderMenu ? <ContextMenu nodeName={currentNode.name}/> : null}
                {currentNode.renderNote ? <Note nodeName={currentNode.name} /> : null}
                {currentNode.children
                    ? currentNode.children.map(c => this.recursivelyBuildTree(c))
                    : null
                }
            </div>
        )
    }
    render() {
        return (
            <div className="tree-container">
                {this.recursivelyBuildTree(this.props.lumberYard.currentRoot)}
                <TrackTOR />
            </div>
        )
    }
}

export default Tree;