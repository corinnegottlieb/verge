import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
import Popup from "reactjs-popup";
import Check from './Check';
// import Note from './Note';
import Remove from './ContextMenu/Remove';
import TrackTOR from './TrackTOR'

@inject("lumberYard")
@observer

class Topic extends Component {

  topicRenderer = (currentTOR) => {
    return (
      <div>
        {/* {this.props.currentTOR ?
            null :
            <TrackTOR />} */}
        {/* <div
          className={`level${currentTOR.level} singleTopic`}
          id={currentTOR.name}>
          {currentTOR.name}
        </div> */}
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

  recurse = (currentTOR) => {
    if (currentTOR.children)
      currentTOR.children.map(c => {
        return (
          <Topic key={c.name} currentTOR={c} />
        )
      })
  }

  // contextMenuPopup = (props) => (
  //   <div className="menu">
  //     <Popup
  //       trigger={<div > {this.topicRenderer(props)} </div>}
  //       position="right top"
  //       on="hover"
  //       closeOnDocumentClick
  //       mouseLeaveDelay={100}
  //       mouseEnterDelay={0}
  //       contentStyle={{ padding: '0px', border: 'none' }}
  //       arrow={false}
  //     >
  //       <div className="menu">
  //         {/* <OpenNote className="menu-item" /> */}
  //         <Remove className="menu-item" />
  //         <Check className="menu-item" />
  //         <div>{props.name}</div>
  //       </div>
  //     </Popup>
  //   </div>
  // )

  render() {
    this.props.currentTOR
    return (
      <div
        className={`level${currentTOR.level} singleTopic`}
        id={currentTOR.name}>
        {currentTOR.name}
      </div>
      // this.props.currentTOR ?
      //   this.contextMenuPopup(this.props.currentTOR) :
      //   this.contextMenuPopup(this.props.lumberYard.currentTOR)
    )
  }
}

export default Topic

/* topicRenderer = (currentTOR) => {
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
} */