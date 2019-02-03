import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
import SubSubTopic from './SubSubTopic';
import WikiView from './ContextMenu/WikiView';
import Rank from './ContextMenu/Rank';

@inject("lumberYard")
@observer
class Subtopic extends Component {

    createTopic = () => {
        let newTopic = this.props.lumberYard.creatTopic(this.props.child)
        return newTopic
    }

    render() {
        console.log(this.props.key)
        console.log(this.props.child)
        return (<blockquote>
            <WikiView topic={this.props.child.value} />
            <Rank />
            {this.props.child.children.length > 0 ?
                this.props.child.children.map(child =>
                    <SubSubTopic key={child.value.name} child={child} />) :
                null}
        </blockquote>)
    }
}

export default Subtopic

