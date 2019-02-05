import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';
import Check from './Check';

@inject("lumberYard")
@observer
class SingleTopic extends Component {
    render() {
        return (<div>
            <div>{this.props.topic.name}</div>
            <Check name={this.props.topic.name}/>
            </div>
        )
    }
}

export default SingleTopic;