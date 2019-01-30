import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
import SubSubSub from './SubSubSub';
import WikiView from './ContextMenu/WikiView';



@inject("LumberYard")
@observer
class SubSubTopic extends Component {

    render() {
        return (
            <blockquote>
                <WikiView topic={this.props.child.value} />
                {this.props.child.children.length > 0 ?
                    this.props.child.children.map(child =>
                        <SubSubSub key={child.value.name} child={child} />) :
                    null}
            </blockquote>
        )
    }
}

export default SubSubTopic