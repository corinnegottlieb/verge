import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';


@inject("LumberYard")
@observer
class SavedList extends Component {

    render() {
        return (
           
 <div>{this.props.LumberYard.savedTORs ? this.props.LumberYard.savedTORs.map(TOR=>TOR.value.name) : null}</div>
   
        
        )
    }
}

export default SavedList


