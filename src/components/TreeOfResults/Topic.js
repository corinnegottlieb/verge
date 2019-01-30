import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
import Subtopic from './SubTopic';


@inject("LumberYard")
@observer
class Topic extends Component {


    render() {
        return (<div>
         <h1>{this.props.LumberYard.name}</h1>
         {this.props.LumberYard.children.map(child=>
            <Subtopic key={child.value.name} child={child}/>)}
        </div>)
    }
}

export default Topic