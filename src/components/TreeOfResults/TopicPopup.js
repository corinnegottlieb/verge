import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
import Popup from "reactjs-popup";
import Remove from './ContextMenu/Remove';
import Check from './Check';
import Topic from './Topic';

@inject("lumberYard")
@observer

class TopicPopup extends Component {

  render() {
    return (
      <div className="menu">
        <Popup
          trigger={<Topic currentTOR={this.props.currentTOR} />}
          position="right top"
          on="hover"
          closeOnDocumentClick
          mouseLeaveDelay={100}
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
  }
}

export default TopicPopup