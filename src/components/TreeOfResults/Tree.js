import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import ContextMenu from './ContextMenu/ContextMenu';
import TrackTOR from './TrackTOR'

import Check from './Check';
import { Link } from 'react-router-dom'

@inject("lumberYard")
@observer
class Tree extends Component {
    recursivelyBuildTree(nodeName) {
        let currentNode = this.props.lumberYard.currentTOR[nodeName]
        return (
            <div className={`level${currentNode.level}`}>
                {currentNode.name}
                {currentNode.children
                    ? currentNode.children.map(c => this.recursivelyBuildTree(c))
                    : null
                }
            </div>
        )
    }
    render() {
        return (
            this.recursivelyBuildTree(this.props.lumberYard.currentRoot)
        )
    }
}

export default Tree;