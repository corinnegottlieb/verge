import React, {Component} from 'react';
import Requester from '../stores/Requester';
import { observer, inject } from 'mobx-react';
import {Link} from 'react-router-dom';
const requester = new Requester();

@inject('lumberYard')
@observer
class TORList extends Component {

    componentDidMount() {
        this.props.lumberYard.getTORList()
    }

    loadTOR = (event) => {
        this.props.lumberYard.getTORData(event.target.id)
    }

    render() {
        return (
            <div id="TORList">
                {this.props.lumberYard.savedTORS.map(t  => 
                    <Link to='./TOR'><div className="TORRow" id={t.name} onClick={this.loadTOR}>{t.name}</div></Link>
                )}
            </div>
        )
    }
}

export default TORList;