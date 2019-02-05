import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Popup from "reactjs-popup";
import OpenNote from './OpenNote';
import Remove from './Remove';
import Check from '../Check';

@inject("lumberYard")
@observer
class WikiView extends Component {

  render() {
    return (
      <Popup
        trigger={<button>WikiView</button>} position="right center">
        <iframe title="wikiVIEW" src={this.props.currentTopic.url}
          width="1010px"
          height="550px"
          position="relative" />
      </Popup>
    )
  }
}

export default WikiView

{/* <Popup
  trigger={<div className="singleTopic"> sup Menu </div>}
  position="right top"
  on="hover"
  closeOnDocumentClick
  mouseLeaveDelay={300}
  mouseEnterDelay={0}
  contentStyle={{ padding: '0px', border: 'none' }}
  arrow={false}
>
  <div className="menu">
    <OpenNote className="menu-item" />
    <Remove className="menu-item" />
    <Check className="menu-item" />
  </div>
</Popup> */}