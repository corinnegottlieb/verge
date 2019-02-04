import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import ContextMenu from './ContextMenu/ContextMenu';
import Check from './Check';

@inject("lumberYard")
@observer
class TORView extends Component {
  toggleMenu = (event) => {
    const foundTopic = this.props.lumberYard.findTopicByName(event.target.id)
  }

    buildHTMLTree = (cTOR) => {
        return (
            <div>
                <div className={`level${cTOR.level} singleTopic`}
                    onMouseEnter={this.toggleMenu} onMouseLeave={this.toggleMenu} id={cTOR.name}>
                    {cTOR.name}
                    {cTOR.menu ? <ContextMenu cTOR={cTOR} /> : null}
                </div>
                {cTOR.children ? 
                    cTOR.children.map(c => {return (<div>
                    <div>{this.buildHTMLTree(c)}</div>
                    <Check name={c.name}/>
                    </div>)}) :
                    null}
            </div>
        )
    }

  render() {
    return (
      this.buildHTMLTree(this.props.lumberYard.currentTOR)
      // this.props.lumberYard.currentTOR.children.map(c => 
      //     <SingleTopic topic={c} />
      // )
    )
  }
}

export default TORView;