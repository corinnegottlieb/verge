import React, { Component } from 'react';
import OpenNote from './OpenNote';
import OpenWikiView from './WikiView';
import Remove from './Remove';
// import Check from '../Check';

class ContextMenu extends Component {

    render() {
        return (
            <div>
                <OpenNote />
                <OpenWikiView />
                <Remove />
            </div>
        )
    }
}

export default ContextMenu;