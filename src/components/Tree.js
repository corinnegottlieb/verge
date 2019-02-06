import React from 'react';
import Tree from 'react-d3-tree';
import { observer, inject } from 'mobx-react';
 
@inject("lumberYard")
@observer
class TreeGraph extends React.Component {
  render() {
    const data = [this.props.lumberYard.currentTOR]

    return (
      <div id="treeWrapper" style={{width: '100vw', height: '100vh'}}>
 
        <Tree data={data} separation={{siblings: 0.2, nonSiblings: 0.5}} orientation={`vertical`} translate={{x: 614, y: 73}} textLayout={{textAnchor: "start", x: 10, y: 20, transform:"skewY(30)" }}/>
 
      </div>
    );
  }
}

export default TreeGraph