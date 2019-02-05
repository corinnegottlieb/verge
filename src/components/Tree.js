import React from 'react';
import Tree from 'react-d3-tree';
import { observer, inject } from 'mobx-react';
 
@inject("lumberYard")
@observer
class MyComponent extends React.Component {
  render() {
    const data = [this.props.lumberYard.currentTOR]

    return (
      <div id="treeWrapper" style={{width: '100vw', height: '100vh', marginTop: '50px'}}>
 
        <Tree data={data} separation={{siblings: 0.2, nonSiblings: 0.5}} orientation={`vertical`} />
 
      </div>
    );
  }
}

export default MyComponent