import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';

@inject("lumberYard")
@observer
class SingleTopic extends Component {
    render() {
        return (
            <div>{this.props.topic.name}</div>
        )
    }
}

export default SingleTopic;