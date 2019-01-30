import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
import SubSubTopic from './SubSubTopic';
 

@inject("LumberYard")
@observer
class Subtopic extends Component {

    render() {
        console.log(this.props.child.children.length)
        return (<div>
        <h2>{this.props.child.value.name}</h2>
        {this.props.child.children.length > 0 ?
            this.props.child.children.map(child=>
            <SubSubTopic key={child.value.name} child={child}/>) :
                null}
                 </div>     )
    }
}

export default Subtopic

