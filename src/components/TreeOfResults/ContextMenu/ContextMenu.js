import React, { Component } from 'react';
import OpenNote from './OpenNote';
import Remove from './Remove';
import WikiView from './WikiView';

class ContextMenu extends Component {

    render() {
        return (
            <div id="context-menu">
                <OpenNote cTOR={this.props.cTOR} />
                <WikiView />
                <Remove name={this.props.cTOR.name} />
               
            </div>
        )
    }
}

export default ContextMenu;