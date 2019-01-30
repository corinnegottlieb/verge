import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
 

@inject("LumberYard")
@observer
class SubSubTopic extends Component {

    render() {
        console.log(this.props.child)
        return (
        <h3>{this.props.child.value.name}</h3>
       )
    }
}

export default SubSubTopic