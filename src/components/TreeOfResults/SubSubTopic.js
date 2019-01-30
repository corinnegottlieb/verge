import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
import SubSubSub from './SubSubSub';
 

@inject("LumberYard")
@observer
class SubSubTopic extends Component {

    render() {
        return (
            <div>
            <h3>{this.props.child.value.name}</h3>
            {this.props.child.children.length > 0 ?
                this.props.child.children.map(child=>
                <SubSubSub key={child.value.name} child={child}/>) :
                    null}
                     </div>  
       )
    }
}

export default SubSubTopic