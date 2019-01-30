import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';


@inject("TESTstore")
@observer
class SubSubTopic extends Component {

    render() {
        // console.log(this.props.child)
        return (
            <h6>{this.props.child.value.name}</h6>
        )
    }
}

export default SubSubTopic