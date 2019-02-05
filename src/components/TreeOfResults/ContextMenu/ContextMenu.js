import React, { Component } from 'react';
import OpenNote from './OpenNote';
import OpenWikiView from './WikiView';
import Remove from './Remove';
import WikiView from './WikiView';
// import Check from '../Check';

class ContextMenu extends Component {

    render() {
        return (
            <div id="context-menu">
                <OpenNote name={this.props.cTOR.name} />
                <WikiView currentTopic={this.props.cTOR} />
                <Remove name={this.props.cTOR.name} />
            </div>
        )
    }
}

export default ContextMenu;