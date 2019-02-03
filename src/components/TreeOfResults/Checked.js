import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';

@inject("lumberYard")
@observer
class Checked extends Component {

    render() {
        return (
            <div>
                <span>Done</span>
                <input type="checkbox"></input>
            </div>
        )
    }
}

export default Checked