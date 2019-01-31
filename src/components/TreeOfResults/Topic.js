import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
import Subtopic from './SubTopic';
import TrackTOR from './TrackTOR';
import WikiView from './ContextMenu/WikiView';

@inject("LumberYard")
@observer
class Topic extends Component {
    render() {
        console.log(this.props.LumberYard.currentTOR.value || {})
        console.log(this.props.LumberYard.currentTOR)
        return (<div>
            <h1>
                {this.props.LumberYard.currentTOR.value ?
                    <WikiView topic={this.props.LumberYard.currentTOR.value.value} /> :
                    null}
            </h1>
            {this.props.LumberYard.currentTOR.value ? this.props.LumberYard.currentTOR.value.children.map(child =>
                <Subtopic key={child.value.name} child={child} />) : null}
        </div>)
    }
}

export default Topic

