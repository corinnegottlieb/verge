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
    buildHTMLTree = (cTOR) => {
        return (
            <div>
                <div className={`level${cTOR.level} singleTopic`}
                    onClick={this.toggleMenu}
                    id={cTOR.name}>
                    {cTOR.name}
                    <Check cTOR={cTOR} />
                    {cTOR.menu ? <ContextMenu cTOR={cTOR} /> : null}
                </div>
                {cTOR.children ?
                    cTOR.children.map(c =>
                        <div key={c.name}>{this.buildHTMLTree(c)}</div>
                    ) :
                    null}
            </div>
        )
    }
    render() {
        return (
            <div className="TORContainer">
                {/* {this.props.currentTOR ?
                    null :
                    <TrackTOR />} */}
                    <TrackTOR />
                    <Link to ="./tree">
                    <i className="fab fa-pagelines tree-icon"></i>
                    </Link>

                {this.buildHTMLTree(this.props.lumberYard.currentTOR)}
            </div>
        )
    }
}
export default TORView;