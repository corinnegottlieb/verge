import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
import SubSubTopic from './SubSubTopic';
import WikiView from './ContextMenu/WikiView';

@inject("LumberYard")
@observer
class Subtopic extends Component {

    render() {
        console.log(this.props.child)
        return (<blockquote>
            <WikiView topic={this.props.child.value} />
            <hr></hr>
            {this.props.child.children.length > 0 ?
                this.props.child.children.map(child =>
                    <SubSubTopic key={child.value.name} child={child} />) :
                null}
        </blockquote>)
    }
}

export default Subtopic

