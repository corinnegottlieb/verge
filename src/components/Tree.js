import React from 'react';
import Tree from 'react-d3-tree';
import { observer, inject } from 'mobx-react';
import {Link} from 'react-router-dom'
 
@inject("lumberYard")
@observer
class TreeGraph extends React.Component {
  render() {
    const data = [this.props.lumberYard.currentTOR]

    return (
      <div id="treeWrapper" style={{width: '100vw', height: '100vh'}}>
        <Link to="/TOR"><button className="brown-text text-darken-4 btn-small waves-effect waves-light #4db6ac teal lighten-2"><i className="large material-icons">arrow_back</i></button></Link>
        <Tree data={data} separation={{siblings: 0.2, nonSiblings: 0.5}} orientation={`vertical`} translate={{x: 614, y: 73}} textLayout={{textAnchor: "start", x: 10, y: 20, transform:"skewY(30)" }}/>

      </div>
    );
  }
}

export default TreeGraph