import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
import TrackTOR from './TrackTOR'

@inject("lumberYard")
@observer

class Topic extends Component {

  topicRenderer = (currentTOR) => {
    // console.log('currentTOR -', currentTOR.name)
    return (
      <div className="topicContainer">
        {this.props.currentTOR ?
          null :
          <TrackTOR />}
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

      // //Guy's Try:
      // this.props.lumberYard.currentTOR.name === this.props.lumberYard.searchValue
    )
  }
}

export default Topic
