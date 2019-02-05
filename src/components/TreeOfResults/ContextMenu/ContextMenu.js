import React, { Component } from 'react';
import OpenNote from './OpenNote';
import Remove from './Remove';
import WikiView from './WikiView';
import { Link } from 'react-router-dom'

class ContextMenu extends Component {

    render() {
        return (
            <div id="context-menu">
                <OpenNote cTOR={this.props.cTOR} />
                <WikiView currentTopic={this.props.cTOR} />
                <Remove name={this.props.cTOR.name} />
                <Link to='./tree'>
                    <button>View as graph</button>
                </Link>
            </div>
        )
    }
}

export default ContextMenu;