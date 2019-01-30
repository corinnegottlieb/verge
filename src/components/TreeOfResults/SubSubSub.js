import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
 

@inject("LumberYard")
@observer
class SubSubSub extends Component {

    render() {
        return (
            <h4>{this.props.child.value.name}</h4>
       )
    }
}

export default SubSubSub