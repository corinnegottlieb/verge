import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import ContextMenu from './ContextMenu/ContextMenu';
import TrackTOR from './TrackTOR'
import Check from './Check';
import SingleTopic from './SingleTopic';
import WikiView from './ContextMenu/WikiView';

@inject("lumberYard")
@observer
class TORView extends Component {
    toggleMenu = (event) => {
        this.props.lumberYard.findTopicByName(event.target.id, this.props.lumberYard.toggleMenu)
    }
    buildHTMLTree = (cTOR) => {
        return (
            <div>
                <div className={`level${cTOR.level} singleTopic`}
                    onMouseEnter={this.toggleMenu} onMouseLeave={this.toggleMenu} id={cTOR.name}>
                    <Check name={cTOR.name}/>
                    {cTOR.name}
                    {cTOR.menu ? <ContextMenu cTOR={cTOR} /> : null}
                </div>
                {cTOR.children ? 
                    cTOR.children.map(c => 
                    <div>{this.buildHTMLTree(c)}</div>
                    ) :
                    null}
            </div>
        )
    }
    render() {
        return (
            <div className="TORContainer">
                {this.props.currentTOR ?
                    null :
                    <TrackTOR />}
                {this.buildHTMLTree(this.props.lumberYard.currentTOR)}
            </div>
        )
    }
}
export default TORView;