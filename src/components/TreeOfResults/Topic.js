import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
import Popup from "reactjs-popup";
import Check from './Check';
import Note from './Note';
import Remove from './ContextMenu/Remove';
import TrackTOR from './TrackTOR'

@inject("lumberYard")
@observer

class Topic extends Component {

  topicRenderer = (currentTOR) => {
    // console.log('currentTOR -', currentTOR.name)
    return (
      <div>
        <div className="topicContainer">
          {this.props.currentTOR ?
            null :
            <TrackTOR />}
        </div>
        <div
          className={`level${currentTOR.level} singleTopic`}
          id={currentTOR.name}>
          {currentTOR.name}
        </div>
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

  contextMenuPopup = (props) => (
    <div className="menu">
      <Popup
        trigger={<div className="menu-item"> {this.topicRenderer(props)} </div>}
        position="right top"
        on="hover"
        closeOnDocumentClick
        mouseLeaveDelay={300}
        mouseEnterDelay={0}
        contentStyle={{ padding: '0px', border: 'none' }}
        arrow={false}
      >
        <div className="menu">
          {/* <OpenNote className="menu-item" /> */}
          <Remove className="menu-item" />
          <Check className="menu-item" />
        </div>
      </Popup>
    </div>
  )

  render() {
    return (
      this.props.currentTOR ?
        this.contextMenuPopup(this.props.currentTOR) :
        this.contextMenuPopup(this.props.lumberYard.currentTOR)
    )
  }
}

export default Topic

{/* topicRenderer = (currentTOR) => {
  return (
    <div>
      <div
        onClick={this.handleMouseHover}
        className={`level${currentTOR.level} singleTopic`}
        id={currentTOR.name}>
        {currentTOR.name}
      </div>
      {currentTOR.children ?
        currentTOR.children.map(c => {
          return (
            <div key={c.name}>
              <Topic currentTOR={c} />
              {this.state.isHovering ?
                this.openContextMenu() :
                null}
            </div>
          )
        }) :
        null}
    </div>
  )
} */}