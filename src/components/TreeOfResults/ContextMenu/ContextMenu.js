import React, {Component} from 'react';
import OpenNote from './OpenNote';
import OpenWikiView from './WikiView';
import Remove from './Remove';
import Check from './Check';

class ContextMenu extends Component {
    render() {
        return (
            <div className={`contextMenu`}>
                <OpenNote />
                <OpenWikiView />
                <Remove />
                <Check />
            </div>
        )
    }
}

export default ContextMenu;