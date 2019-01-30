import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
import Subtopic from './SubTopic';
import WikiView from './ContextMenu/WikiView';


@inject("TESTstore")
@observer
class Topic extends Component {
    render() {
        console.log(this.props.TESTstore)
        return (<div>
            <h2>{this.props.TESTstore.name}</h2>
            {this.props.TESTstore.children.map(child =>
                <Subtopic key={child.value.name} child={child} />)}
        </div>)
    }
}

export default Topic

