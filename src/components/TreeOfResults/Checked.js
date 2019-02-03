import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';

@inject("lumberYard")
@observer
class Checked extends Component {

    render() {
        return (
            <label>
            <input type="checkbox" onClick={this.props.lumberYard.check} />
            <span>Done</span>
            </label>
        )
    }
}

export default Checked