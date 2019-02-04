import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
import Check from './ContextMenu/Check';

@inject("lumberYard")
@observer

class Topic extends Component {

  topicRenderer = (currentTOR) => {
    console.log('currentTOR -', currentTOR.name)
    return (
      <div>
        <div className={`level${currentTOR.level} singleTopic`} id={currentTOR.name}>
          {currentTOR.name}
        </div>
        <Check />
        {currentTOR.children ?
          currentTOR.children.map(c => {
            return (<div>
              <Topic key={c.name} currentTOR={c} />
              </div>
            )
          }) :
          null}
      </div>
    )
  }

  render() {
    return (
      this.props.currentTOR ?
        this.topicRenderer(this.props.currentTOR) :
        this.topicRenderer(this.props.lumberYard.currentTOR)
    )
  }
}

export default Topic
