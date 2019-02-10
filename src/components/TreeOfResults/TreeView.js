import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import ContextMenu from './ContextMenu/ContextMenu';
import TrackTOR from './TrackTOR'

import Check from './Check';
import { Link } from 'react-router-dom'

@inject("lumberYard")
@observer
class TORView extends Component {
    toggleMenu = (event) => {
        this.props.lumberYard.findTopicByName(event.target.id, this.props.lumberYard.toggleMenu)
    }

    stringCleaner = (str) => {
        return str.substr(1).replace(/_/gi, ' ')
    }
    buildHTMLTree = (rootName) => {
        let cNode = this.props.lumberYard.currentTOR[rootName]
        return (
            <div>
                <div className={`level${cNode.level} singleTopic`}
                    onClick={this.toggleMenu} id={cNode.name}>
                    {cNode.name}
                    {/* <Check cNode={cNode} />
                    {cNode.menu ? <ContextMenu cNode={cNode} /> : null} */}
                </div>
                {cNode.children ?
                    cNode.children.map(n =>
                        <div key={n}>{this.buildHTMLTree(n)}</div>
                    ) :
                    null}
            </div>
        )
    }
    render() {
        return (
            <div className="TORContainer">
                <TrackTOR /> {/* toggle-tracking button */}
                {this.buildHTMLTree(this.props.lumberYard.currentRoot)}
            </div>
        )
    }
}
export default TORView;