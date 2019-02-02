import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import SingleTopic from './SingleTopic'

@inject("lumberYard")
@observer
class TORView extends Component {
    buildHTMLTree = (cTOR) => {
        return (
            <div>
                <div className={`level${cTOR.level}`}>{cTOR.name}</div>
                {cTOR.children ? 
                    cTOR.children.map(c => {return (<div>{this.buildHTMLTree(c)}</div>)}) :
                    null
            }
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