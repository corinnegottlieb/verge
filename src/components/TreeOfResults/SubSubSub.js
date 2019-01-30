import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
import WikiView from './ContextMenu/WikiView';

@inject("LumberYard")
@observer
class SubSubSub extends Component {

    render() {
        return (
            <blockquote>
                <WikiView topic={this.props.child.value} />
            </blockquote>
        )
    }
}

export default SubSubSub