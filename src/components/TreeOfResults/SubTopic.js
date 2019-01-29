import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
 

@inject("LumberYard")
@observer
class Subtopic extends Component {

    render() {
        return (<div>{this.props.child}</div>)
    }
}

export default Subtopic