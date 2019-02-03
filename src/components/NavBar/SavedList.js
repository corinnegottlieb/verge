import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';


@inject("lumberYard")
@observer
class SavedList extends Component {

    render() {
        return (
           
 <div>{this.props.lumberYard.savedTORs ? this.props.lumberYard.savedTORs.map(TOR=>TOR.value.name) : null}</div>
   
        
        )
    }
}

export default SavedList


