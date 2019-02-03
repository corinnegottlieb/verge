import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
import Subtopic from './SubTopic';
import TrackTOR from './TrackTOR';
import WikiView from './ContextMenu/WikiView';

@inject("lumberYard")
@observer
class Topic extends Component {
    render() {
        console.log(this.props.lumberYard.currentTOR.value || {})
        console.log(this.props.lumberYard.currentTOR)
        return (<div>
            <h1>
                {this.props.lumberYard.currentTOR.value ?
                    <WikiView topic={this.props.lumberYard.currentTOR.value.value} /> :
                    null}
            </h1>
            {this.props.lumberYard.currentTOR.value ? this.props.lumberYard.currentTOR.value.children.map(child =>
                <Subtopic key={child.value.name} child={child} />) : null}
        </div>)
    }
}

export default Topic

