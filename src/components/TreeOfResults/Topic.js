import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';

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
        {currentTOR.children ?
          currentTOR.children.map(c => {
            return (
              <Topic key={c.name} currentTOR={c} />
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
