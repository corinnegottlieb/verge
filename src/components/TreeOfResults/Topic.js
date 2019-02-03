import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
// import Subtopic from './SubTopic';
// import WikiView from './ContextMenu/WikiView';

@inject("lumberYard")
@observer

class Topic extends Component {

  renderDecider = (currentTOR) => {
    // if (currentTOR.level === 0 && currentTOR.children) {
    //   return <div>
    //     <h3>{this.props.lumberYard.currentTOR.name}</h3>
    //     <Topic key={currentTOR.name}
    //       currentTOR={currentTOR.children} />
    //   </div>
    // }
    return (
      <div>
        <div className={`level${currentTOR.level} singleTopic`} id={currentTOR.name}>
          {currentTOR.name}
        </div>
        {currentTOR.children ?
          currentTOR.children.map(c => { return (<div key={c.name}>{this.renderDecider(c)}</div>) }) :
          null}
      </div>
    )
  }

  render() {
    console.log(this.props.lumberYard.currentTOR.name)
    return (
      this.renderDecider(this.props.lumberYard.currentTOR)
    )
  }
}

export default Topic
